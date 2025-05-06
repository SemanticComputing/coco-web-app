import {
  has,
  cloneDeep,
  isEqual,
  transform,
  forIn,
  findLast,
  isObject,
  set,
  isArray,
  mergeWith
} from 'lodash'
import { getTreeFromFlatData } from '@nosferatu500/react-sortable-tree'
import { ckmeans } from 'simple-statistics'
import { Counter } from './Utils'

export const mapPlaces = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      id: b.id.value,
      lat: b.lat.value,
      long: b.long.value,
      ...(Object.prototype.hasOwnProperty.call(b, 'instanceCount') && { instanceCount: b.instanceCount.value })
    }
  })
  return results
}

export const mapCoordinates = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      lat: b.lat.value,
      long: b.long.value
    }
  })
  return results
}

export const mapBirthYearCount = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      counted: b.counted.value,
      count: b.count.value
    }
  })
  return results
}

export const mapAgeCount = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      counted: b.counted.value,
      count: b.count.value
    }
  })
  return results
}

export const mapCountGroups = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      counted: b.counted.value,
      count: b.count.value
    }
  })
  return results
}

export const mapCount = sparqlBindings => {
  return sparqlBindings[0].count.value
}

export const mapFacet = ({ sparqlBindings, config }) => {
  let results = []
  if (sparqlBindings.length > 0) {
    results = sparqlBindings.map(b => {
      try {
        return {
          id: b.id.value,
          prefLabel: b.prefLabel
            ? b.prefLabel.value
            : '0', // temporary prefLabel for <http://ldf.fi/MISSING_VALUE> to support sorting
          selected: b.selected.value,
          parent: b.parent ? b.parent.value : null,
          instanceCount: parseInt(b.instanceCount.value)
        }
      } catch (err) {
        console.log(err)
      }
      return null
    })
    return results
  }
  return results
}

export const mapHierarchicalFacet = ({ sparqlBindings, config }) => {
  const results = mapFacet({ sparqlBindings, config })
  let treeData = getTreeFromFlatData({
    flatData: results,
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve node's parent's key
    rootKey: '0' // The value of the parent key when there is no parent (i.e., at root level)
  })
  treeData = recursiveSortAndSelectChildren(treeData)
  return ({
    treeData,
    flatData: results
  })
}

export const mapTimespanFacet = ({ sparqlBindings, config }) => {
  const b = sparqlBindings[0]
  return {
    min: b.min.value,
    max: b.max.value
  }
}

export const mapNameSampoResults = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      id: b.id.value,
      prefLabel: b.prefLabel.value.charAt(0).toUpperCase() + b.prefLabel.value.slice(1), // capitalize
      modifier: has(b, 'modifier') ? b.modifier.value : '-',
      basicElement: has(b, 'basicElement') ? b.basicElement.value : '-',
      typeLabel: has(b, 'typeLabel') ? b.typeLabel.value : '-',
      broaderTypeLabel: has(b, 'broaderTypeLabel') ? b.broaderTypeLabel.value : '-',
      collector: has(b, 'collector') ? b.collector.value : '-',
      broaderAreaLabel: has(b, 'broaderAreaLabel') ? b.broaderAreaLabel.value : '-',
      collectionYear: has(b, 'collectionYear') ? b.collectionYear.value : '-',
      source: has(b, 'source') ? b.source.value : '-',
      markerColor: has(b, 'markerColor') ? b.markerColor.value : '-',
      namesArchiveLink: has(b, 'namesArchiveLink') ? b.namesArchiveLink.value : '-',
      positioningAccuracy: has(b, 'positioningAccuracy') ? b.positioningAccuracy.value : '-',
      ...(Object.prototype.hasOwnProperty.call(b, 'lat') && { lat: b.lat.value }),
      ...(Object.prototype.hasOwnProperty.call(b, 'long') && { long: b.long.value })
    }
  })
  return results
}

export const mapLineChart = ({ sparqlBindings, config }) => {
  const seriesData = []
  const categoriesData = []
  const categeryLabels = []
  const sparqlBindingsLength = sparqlBindings.length
  const customizedCategoryLabels = config && config.customizedCategoryLabels
  sparqlBindings.forEach((b, index, bindings) => {
    const currentCategory = parseInt(b.category.value)
    const currentValue = parseInt(b.count.value)
    seriesData.push(currentValue)
    categoriesData.push(
      config && config.xAxisConverter
        ? config.xAxisConverter(currentCategory)
        : currentCategory
    )
    if (customizedCategoryLabels) {
      categeryLabels.push(b.categoryLabel.value)
    }
    if (config && config.fillEmptyValues && index + 1 < sparqlBindingsLength) {
      let categoryIter = currentCategory
      const nextNonZeroCategory = parseInt(bindings[index + 1].category.value)
      // add zeros until we reach the next category with a non zero value
      while (categoryIter < nextNonZeroCategory - 1) {
        categoryIter += 1
        seriesData.push(0)
        categoriesData.push(
          config && config.xAxisConverter
            ? config.xAxisConverter(categoryIter)
            : categoryIter
        )
      }
    }
  })
  return {
    seriesData,
    categoriesData,
    ...(customizedCategoryLabels) && { categeryLabels }
  }
}

export const mapMultipleLineChart = ({ sparqlBindings, config }) => {
  const res = {}
  sparqlBindings.forEach(b => {
    for (const p in b) {
      if (p !== 'category') {
        res[p] = []
      }
    }
  })
  const category = sparqlBindings.map(p => parseFloat(p.category.value))

  if (config && config.fillEmptyValues) {
    //  fill the missing years with zeroes
    const valmax = Math.max(...category)
    for (let i = Math.min(...category); i <= valmax; i++) {
      for (const p in res) {
        if (p !== 'category') {
          res[p][i] = 0
        }
      }
    }
  }

  //  read the known years into the data object
  sparqlBindings.forEach(b => {
    for (const p in b) {
      if (p !== 'category') {
        res[p][parseFloat(b.category.value)] = parseFloat(b[p].value)
      }
    }
  })

  // sort by year and remove empty sequence at start and end
  for (const p in res) {
    const arr = Object.entries(res[p])
      .map(p => [parseFloat(p[0]), p[1]])
      .sort((a, b) => ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0)))
    res[p] = trimResult(arr)
  }
  return res
}

export const mapPieChart = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      category: b.category.value,
      prefLabel: b.prefLabel.value,
      instanceCount: parseInt(b.instanceCount.value)
    }
  })
  return results
}

export const linearScale = ({ data, config }) => {
  const { variable, minAllowed, maxAllowed } = config
  const length = data.length
  const min = Number(data[length - 1][variable])
  const max = Number(data[0][variable])
  data.forEach(item => {
    if (item[variable]) {
      const unscaledNum = Number(item[variable])
      // https://stackoverflow.com/a/31687097
      const scaled = (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed
      item[`${variable}Scaled`] = parseFloat(scaled.toFixed(2))
    }
  })
  return data
}

/* Data processing as in:
*  https://github.com/apexcharts/apexcharts.js/blob/master/samples/vue/area/timeseries-with-irregular-data.html
*  Trim zero values from array start and end
*/
const trimResult = arr => {
  //  trim start of array
  let i = 0
  while (i < arr.length && arr[i][1] === 0) i++

  //  end of array
  let j = arr.length - 1
  while (i < j && arr[j][1] === 0) j--

  return arr.slice(i, j + 1)
}

const comparator = (a, b) => {
  if (Array.isArray(a.prefLabel)) {
    a.prefLabel = a.prefLabel[0]
  }
  if (Array.isArray(b.prefLabel)) {
    b.prefLabel = b.prefLabel[0]
  }
  return a.prefLabel.localeCompare(b.prefLabel)
}

const recursiveSortAndSelectChildren = nodes => {
  nodes.sort(comparator)
  nodes.forEach(node => {
    if (has(node, 'children')) {
      for (const child of node.children) {
        if (node.selected === 'true') {
          child.selected = 'true'
          child.disabled = 'true'
        }
      }
      recursiveSortAndSelectChildren(node.children)
    }
  })
  return nodes
}

export const toBarChartRaceFormat = ({ data, config }) => {
  const { step } = config
  const firstKey = parseInt(data[0].id)
  const lastKey = parseInt(data[data.length - 1].id)
  const resultObj = {}
  let rawDataIndex = 0
  let lastNonNullIndex = null
  for (let i = firstKey; i <= lastKey; i += step) {
    const dataItemExists = parseInt(data[rawDataIndex].id) === i
    if (dataItemExists) {
      const currentDataItem = dataItemToObject(data[rawDataIndex].dataItem)
      if (i === firstKey) {
        resultObj[i] = currentDataItem
      } else {
        resultObj[i] = mergeDataItems(resultObj[lastNonNullIndex], currentDataItem)
      }
      lastNonNullIndex = i
      rawDataIndex++
    } else {
      resultObj[i] = null
    }
  }
  return resultObj
}

const dataItemToObject = dataItem => {
  if (Array.isArray(dataItem)) {
    return dataItem.reduce((obj, item) => {
      return {
        ...obj,
        [item.id]: {
          prefLabel: item.prefLabel,
          value: parseInt(item.value)
        }
      }
    }, {})
  } else {
    return {
      [dataItem.id]: {
        prefLabel: dataItem.prefLabel,
        value: parseInt(dataItem.value)
      }
    }
  }
}

const mergeDataItems = (itemA, itemB) => {
  const merged = cloneDeep(itemA)
  const keys = Object.keys(itemB)
  for (let i = 0; i < keys.length; i++) {
    const itemBkey = keys[i]
    if (Object.prototype.hasOwnProperty.call(itemA, itemBkey)) {
      merged[itemBkey].value += itemB[itemBkey].value
    } else {
      merged[itemBkey] = itemB[itemBkey]
    }
  }
  return merged
}

export const toPolygonLayerFormat = ({ data, config }) => {
  // const scaledData = linearScale({ data, config })
  const valuesArray = []
  data.forEach(item => {
    valuesArray.push(item.instanceCount)
    const pointArray = item.polygon.split(' ')
    const deckGlArray = pointArray.map(point => {
      const latLng = point.split(',')
      return [
        parseFloat(parseFloat(latLng[0]).toFixed(4)),
        parseFloat(parseFloat(latLng[1]).toFixed(4))
      ]
    })
    item.polygon = deckGlArray
  })
  // Ckmeans algorithm: https://journal.r-project.org/archive/2011-2/RJournal_2011-2_Wang+Song.pdf
  const clusters = ckmeans(valuesArray, 8)
  data.forEach(item => {
    item.choroplethColor = getChoroplethMapColor({ value: Number(item.instanceCount), clusters })
  })
  return data
}

const getChoroplethMapColor = ({ value, clusters }) => {
  // https://colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=8
  const colors = [
    [255, 255, 204],
    [255, 237, 160],
    [254, 217, 118],
    [254, 178, 76],
    [253, 141, 60],
    [252, 78, 42],
    [227, 26, 28],
    [177, 0, 38]
  ]
  let heatmapColor
  colors.forEach((color, index) => {
    if (value >= Number(clusters[index][0]) && value <= Number(clusters[index][clusters[index].length - 1])) {
      heatmapColor = color
    }
  })
  return heatmapColor
}

export const createPaddedTimeCodes = ({ data, config }) => {
  data.forEach(item => {
    let target = item[config.target]
    if (!Array.isArray(target)) {
      target = [target]
    }
    target.forEach(targetItem => {
      const { hours, minutes, seconds } = targetItem
      if (hours == null || minutes == null || seconds == null) {
        // console.log(targetItem)
      } else {
        const paddedTimecode = createPaddedTimeCode({ hours, minutes, seconds })
        targetItem[config.timeCodeProperty] = paddedTimecode
      }
    })
  })
  return data
}

const createPaddedTimeCode = ({ hours, minutes, seconds }) => {
  return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

// const NS_PER_SEC = 1e9
// const MS_PER_NS = 1e-6

/**
* @param {Array} objects A list of objects as SPARQL results.
* @returns {Array} The mapped object list.
* @description
* Map the SPARQL results as objects, and return a list where result rows with the same
* id are merged into one object.
*/
export const makeObjectList = (objects) => {
  // const time = process.hrtime()
  const objList = transform(objects, function (result, obj) {
    if (!obj.id) {
      return null
    }
    // let orig = obj;
    obj = makeObject(obj)
    // obj = reviseObject(obj, orig);
    mergeValueToList(result, obj)
  })
  // const diff = process.hrtime(time)
  // console.log(`makeObjectList took ${(diff[0] * NS_PER_SEC + diff[1]) * MS_PER_NS} milliseconds`)
  return objList
  // return self.postProcess(objList);
}

export const makeDict = (objects) => {
  return arrayToObject(objects, 'id')
}

/**
* @param {Object} obj A single SPARQL result row object.
* @returns {Object} The mapped object.
* @description
* Flatten the result object. Discard everything except values.
* Assume that each property of the obj has a value property with
* the actual value.
*/
const makeObject = (obj) => {
  const o = {}
  forIn(obj, function (value, key) {
    // If the variable name contains "__", an object
    // will be created as the value
    // E.g. { place__id: '1' } -> { place: { id: '1' } }
    set(o, key.replace(/__/g, '.'), value.value)
  })
  return o
}

/**
* @param {Array} valueList A list to which the value should be added.
* @param {Object} value The value to add to the list.
* @returns {Array} The merged list.
* @description
* Add the given value to the given list, merging an object value to and
* object in the list if both have the same id attribute.
* A value already present in valueList is discarded.
*/
const mergeValueToList = (valueList, value) => {
  let old
  if (isObject(value) && value.id) {
    // Check if this object has been constructed earlier
    old = findLast(valueList, function (e) {
      return e.id === value.id
    })
    if (old) {
      // Merge this object to the object constructed earlier
      mergeObjects(old, value)
    }
  } else {
    // Check if this value is present in the list
    old = findLast(valueList, function (e) {
      return isEqual(e, value)
    })
  }
  if (!old) {
    // This is a distinct value
    valueList.push(value)
  }
  return valueList
}

/**
* @param {Object} first An object as returned by makeObject.
* @param {Object} second The object to merge with the first.
* @returns {Object} The merged object.
* @description
* Merges two objects.
*/
const mergeObjects = (first, second) => {
  // Merge two objects into one object.
  return mergeWith(first, second, merger)
}

const merger = (a, b) => {
  if (isEqual(a, b)) {
    return a
  }
  if (a && !b) {
    return a
  }
  if (b && !a) {
    return b
  }
  if (isArray(a)) {
    if (isArray(b)) {
      b.forEach(function (bVal) {
        return mergeValueToList(a, bVal)
      })
      return a
    }
    return mergeValueToList(a, b)
  }
  if (isArray(b)) {
    return mergeValueToList(b, a)
  }
  if (!(isObject(a) && isObject(b) && a.id === b.id)) {
    return [a, b]
  }
  return mergeObjects(a, b)
}

const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    const newItem = {}
    Object.entries(item).forEach(([key, value]) => {
      if (key !== keyField) {
        newItem[key] = value.value
      }
    })
    obj[item[keyField].value] = newItem
    return obj
  }, {})

export const createCorrespondenceChartData = ({ sparqlBindings, config }) => {
  const { numberTopResults, types, lastLabel } = config
  let topN = numberTopResults || 10

  sparqlBindings.forEach(ob => { Object.keys(ob).forEach(key => { ob[key] = ob[key].value }) })

  //  Dates '1663-10-26' to UTC -9662204389000
  sparqlBindings.forEach(ob => { ob.date = Date.parse(ob.date) })

  let cnAll = new Counter()

  //  Check if query result has parameter 'count' e.g. number of items for each result per year
  const has_counts = sparqlBindings.find(ob => (has(ob, 'count')))
  if (has_counts) {
    sparqlBindings.forEach(ob => {
      ob.count = parseInt(ob.count)
      cnAll.addItem(ob[ob.type + '__label'], ob.count)
    })
  }
  else
  {
    cnAll = new Counter(sparqlBindings.map(ob => ob[ob.type + '__label']))
  }

  //  find the N most common values in the data
  const topTies = cnAll.mostCommonLabels(topN)

  const datas = {}
  const others = {}
  
  types.forEach(type => { datas[type] = [] })
  if (lastLabel) {
    types.forEach(type => { others[type] = {} })
    sparqlBindings.forEach(ob => {
      others[ob.type][ob.date] = 0
    })
  }
  
  sparqlBindings.forEach(ob => {
    const v = topTies.indexOf(ob[ob.type + '__label'])
    //  one of the top correspondences (v > -1) or in other (topTies.length)
    if (has_counts) {
      if (v > -1) {
        datas[ob.type].push([ob.date, v, Math.sqrt(ob.count)])
      } else if (lastLabel) {
        others[ob.type][ob.date] += ob.count
        // datas[ob.type].push([ob.date, topTies.length, 75+10*ob.count])
      }
    } else {
      if (v > -1) {
        datas[ob.type].push([ob.date, v])
      } else if (lastLabel) {
        datas[ob.type].push([ob.date, topTies.length])
      }
    }
  })

  //  Add 'others' to the yearly data:
  for (const [ob_type, year_values] of Object.entries(others)) {
    for (const [ob_date, num_letters] of Object.entries(year_values)) {
      // console.log(`${ob_type} ${ob_date}: ${num_letters}`)
      datas[ob_type].push([parseInt(ob_date), topTies.length, Math.sqrt(num_letters)])
    }
  }

  const years = new Set(sparqlBindings.map(ob => { return parseInt(ob.year) }))

  topN = topTies.length
  if (lastLabel) { topTies.push(lastLabel) }

  //  map arrays in 'datas' to unique date values as in
  //  https://stackoverflow.com/questions/43772320/map-set-to-maintain-unique-array-of-arrays-javascript
  for (var key in datas) {
    if (datas.hasOwnProperty(key)) {
      datas[key] = Array.from(
        new Map(datas[key].map((p) => [p.join(), p])).values()
      );
    }
  }
  
  return {
    series: types.map(type => { return { name: type, data: datas[type] } }),
    topTies: topTies,
    topN: topN,
    minUTC: Date.UTC(Math.min(...years)),
    //  NB. January = 0, ... December = 11:
    maxUTC: Date.UTC(Math.max(...years), 11, 31)
  }
}

export const createCorrespondenceChartDataByLabel = ({ sparqlBindings, config }) => {
  const series = []
  
  const res = {}
  sparqlBindings.forEach(row => {
    for (const [key, obj] of Object.entries(row)) {
      if (key=='label') {
        res[obj.value] = []
      }
    }
  })
  sparqlBindings.forEach(row => {
    res[row.label.value].push([parseInt(row.category.value), parseInt(row.count.value)])
  })

  // entire yearspan, add zeros to start and end
  const category = sparqlBindings.map(p => parseFloat(p.category.value))
  const allyears = {}
  const valmax = Math.max(...category) + 2
  for (let i = Math.min(...category)-1; i <= valmax; i++) {
    allyears[i] = 0
  }

  const all_letters = { ...allyears }

  function sortByYear(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }

  for (const [key, arr] of Object.entries(res)) {
    if (arr && arr.length) {
      const years = { ...allyears }
      
      arr.forEach(obj => years[obj[0]] = obj[1])
      arr.forEach(obj => all_letters[obj[0]] += obj[1])
      const arr2 = Object.entries(years).map(y => [parseInt(y[0]), y[1]])
      arr2.sort(sortByYear);
      
      series.push({
        name: key,
        data: arr2
      })
    }
  }

  const arr2 = Object.entries(all_letters).map(y => [parseInt(y[0]), y[1]])
  arr2.sort(sortByYear)
  series.push({name:'All letters', data: arr2})

  return series
}

export const processTextIndexHighlighting = ({ data }) => {
  data.forEach(item => {
    if (item.literal) {
      item.content = item.literal
    }
  })
  return data
}
