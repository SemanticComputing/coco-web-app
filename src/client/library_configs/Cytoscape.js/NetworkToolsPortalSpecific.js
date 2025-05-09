import { ValueScaler, ColorScaler } from './NetworkToolsGeneral'

export const preprocessLetterSampo = elements => {
  const maxEdgeWidth = 8

  /**
    const rankSort = arr => {
     const arr2 = arr.map(function (o, i) { return { idx: i, obj: o } }).sort((a, b) => a.obj - b.obj)
     return arr2.map(function (o, i) { o.ord = i; return o }).sort((a, b) => a.idx - b.idx).map(o => o.ord)
    }
    */

  //  edges
  let arr = elements.edges.map(ele => ele.data.weight || 1)

  //  edge width
  let res = (new ValueScaler(1.0, maxEdgeWidth)).fitTransform(arr)
  elements.edges.forEach((ele, i) => { ele.data.weight = res[i] })

  //  edge color
  // https://www.w3schools.com/colors/colors_hsl.asp
  res = (new ColorScaler('hsl(30, 64%, 85%)', 'hsl(30, 64%, 35%)')).fitTransform(arr)
  elements.edges.forEach((ele, i) => { ele.data.color = res[i] })

  // nodes
  arr = elements.nodes.map(ele => Math.sqrt(ele.data.num_letters || 0))

  // TODO: adjust node sizes e.g. https://stackoverflow.com/questions/30167117/get-the-current-index-in-sort-function
  // node size
  res = (new ColorScaler('8px', '40px')).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.size = res[i] })

  // node color
  res = (new ColorScaler('rgb(0,0,0)', 'rgb(255,0,0)')).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.color = res[i] })
}

export const preprocessTie = elements => {
  const maxEdgeWidth = 8
  console.log(elements)
  //  edges
  let arr = elements.edges.map(ele => ele.data.weight)

  //  edge width
  let res = (new ValueScaler(1.0, maxEdgeWidth)).fitTransform(arr)
  elements.edges.forEach((ele, i) => { ele.data.weight = res[i] })

  //  edge color
  res = (new ColorScaler('hsl(30, 64%, 85%)', 'hsl(30, 64%, 35%)')).fitTransform(arr)
  elements.edges.forEach((ele, i) => { ele.data.color = res[i] })

  // nodes
  arr = elements.nodes.map(ele => ele.data.pagerank)

  // node size
  res = (new ColorScaler('8px', '20px')).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.size = res[i] })

  // node color
  res = (new ColorScaler('rgb(0,0,0)', 'rgb(255,0,0)')).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.color = res[i] })
}
