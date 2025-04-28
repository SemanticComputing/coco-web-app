import { constrainedMemory } from "process";

export default {
  languageLabel: 'English',
  html: {
    title: 'LetterSampo Finland (1809 - 1917)',
    description: 'CoCo can be used for analysing epistolary data in different data repositories in different countries, or for aggegated international datasets, such as Republic of Letters Data.'
  },
  appTitle: {
    short: '',
    long: ' LetterSampo Finland',
    mobile: 'LetterSampo Finland',
    subheading: `
      Finnish Historical Letters on the Semantic Web 1809-1917
    `
  },
  selectEditionPerpective: 'Focused collection perspectives with textual features',
  selectPerspective: 'Select a perspective to search, browse, and analyze letters using metadata',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
  mainPageLinkText: "Select example searches, visualizations, and linked information",
  mainPageLinks: [
      {
        title: 'Letters of Akseli Gallen-Kallela',
        link: '/actors/page/p0000000000000000869/letters'
      },
      {
        title: 'Network of letters of Elias Lönnrot',
        link: '/actors/page/p0000000000000000370/letter-network'
      },
      {
        title: 'Letters between Johan Ludvig and Fredrika Runeberg',
        link: 'en/letters/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22source%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B36%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000002128%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Fredrika%20(1807-1879)%22%2C%22instanceCount%22%3A1407%7D%7D%7D%2C%7B%22facetId%22%3A%22source%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B380%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000000187%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Johan%20Ludvig%20(1804-1877)%22%2C%22instanceCount%22%3A484%7D%7D%7D%2C%7B%22facetId%22%3A%22target%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B7%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000002128%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Fredrika%20(1807-1879)%22%2C%22instanceCount%22%3A41%7D%7D%7D%2C%7B%22facetId%22%3A%22target%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B48%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000000187%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Johan%20Ludvig%20(1804-1877)%22%2C%22instanceCount%22%3A4%7D%7D%7D%5D'
      },
      {
        title: 'Top correspondences of Uno Cygnaeus',
        link: '/actors/page/p1516151985531889895/top-correspondences'
      },
      {
        title: 'Linked data about Ida Aalberg',
        link: '/actors/page/p0000000000000000571/table'
      },
      {
        title: 'Timeline of Helene Schjerfbeck’s letters',
        link: '/actors/page/p0000000000000001321/letters-by-year'
      },
      {
        title: 'Places mentioned in A. Edelfelt’s letters on a map',
        link: '/edelfeltedition/faceted-search/map'
      },
      {
        title: 'Finnish Literature Society Fonds',
        link: '/en/fonds/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22datasource%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B3%5D%2C%22node%22%3A%7B%22id%22%3A%22https%3A%2F%2Fwww.finlit.fi%22%2C%22prefLabel%22%3A%22The%20Finnish%20Literature%20Society%20(SKS)%22%2C%22instanceCount%22%3A256%7D%7D%7D%5D'
      },
      {
        title: 'Correspondence networks of people related to theater world',
        link: '/en/actors/faceted-search/network?constraints=%5B%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B29%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ33999%22%2C%22prefLabel%22%3A%22actor%22%2C%22instanceCount%22%3A370%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B178%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ1776724%22%2C%22prefLabel%22%3A%22theatre%20manager%22%2C%22instanceCount%22%3A53%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B74%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ2259451%22%2C%22prefLabel%22%3A%22stage%20actor%22%2C%22instanceCount%22%3A158%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B474%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ21169216%22%2C%22prefLabel%22%3A%22actress%22%2C%22instanceCount%22%3A8%7D%7D%7D%5D'
      },
      {
        title: 'Women as records creators at the National Library of FInland',
        link: '/en/fonds/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22creator_gender%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B2%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%2F2009%2Fcode%23sex-F%22%2C%22prefLabel%22%3A%22Female%22%2C%22instanceCount%22%3A32%7D%7D%7D%2C%7B%22facetId%22%3A%22datasource%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B4%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fsource%2Fnationallibrary%22%2C%22prefLabel%22%3A%22National%20Library%20of%20Finland%22%2C%22instanceCount%22%3A248%7D%7D%7D%5D'
      }
  ],
  mainPageDick: 'fehkufhekj',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      aboutTheProject: 'About the project',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/coco/'
    },
    searchBarPlaceHolder: 'Search metadata',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions',
    instructionsUrl: 'https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub'

  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Sort',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    },
    barChart: {
      tooltip: 'Bar chart',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Line chart',
      productionTimespan: {
        title: 'Manuscript production by decade',
        xaxisTitle: 'Decade',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    migrations: 'migrations',
    network: 'network',
    export: 'export',
    'by-year': 'by year',
    'letters-by-year': 'timeline of letters',
    'by-period': 'by period',
    'letter-network': 'network of letters',
    'social-signatures': 'social signatures',
    'top-correspondences': 'top correspondences',
    'top-correspondents': 'top correspondents',
    csv: 'csv',
    metadata: 'source data',
    letter: 'letter',
    sentReceivedByPlace: 'timeline of letters',
    correspondenceTimeline: 'Letter Timeline',
    sentReceivedByTie: 'Timeline',
    tieNetwork: 'Network',
    letters: 'letters',
    'letters-and-actors': 'letters and actors',
    heatmap: 'heatmap',
    statistics: 'statistics',
    download: 'download',
    sparql: 'sparql',
    share: 'share'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation',
    sentCount: 'Sent',
    receivedCount: 'Received',
    allCount: 'All',
    average: 'Average',
    sender: 'Sender',
    sender1: 'Sender 1',
    sender2: 'Sender 2',
    both: 'Both'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    }
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the CoCo Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Computationally generated data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Plenty of the data is computationally generated.
        There might be missing, erroneous, or repeting data records
        due to the errors or inadequate amount of source data.
      </p>
    `
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    letterMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Place: Sending',
      legendTo: 'Place of receiving',
      from: 'Place of sending:',
      to: 'Place of receiving:',
      count: 'Letter count:',
      listHeadingSingleInstance: 'Letter:',
      listHeadingMultipleInstances: 'Letters:'
    }
  },
  perspectives: {
    fullTextSearch: {
      properties: {
        prefLabel: {
          label: 'Title'
        },
        altLabel: {
          label: 'Alternative label'
        },
        type: {
          label: 'Type'
        },
        image: {
          label: 'Image'
        },
        maxScore: {
          label: 'Text search score'
        },
        number_of_activities: {
          label: 'Number of activities'
        }
      }
    },
    actors: {
      label: 'People and Organizations',
      facetResultsType: 'People/Organizations',
      shortDescription: '',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the actors, e.g., people, groups, families, and unknowns, in the dataset.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          General information about the project is available at the <a href="https://seco.cs.aalto.fi/projects/coco/"  target="_blank" rel="noopener noreferrer">project blog</a>.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the actors in the dataset.
          See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all actors in
            the CoCo data. One table row is equivalent to one actors.
            Wikidata/Wikimedia Commons is used as the image source.
            NB. Clicking on the person name leads to a actor instance page providing more information about the actor, while clicking on the image opens the image in a larger scale.
          </li>
          <li>
            <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of birth, sending letters, and death.
            Places without the coordinate information are shown as a part of the place higher in the hierarchy.
          </li>
          <li>
            <strong>NETWORK</strong> is a social network visualization showing the Sender-Recipient relationships.
              Notice that the amount of people shown in the network is limited for performance reason.
              The Sender-Recipient relationships are not available for all, so some facet setting may not show the network at all.
              Clicking on an actor node leads to the actor's ego-centric network on an instance page.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Person or Organization',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view provides detailed data about this actor.
            </li>
            <li>
              <strong>LETTERS</strong> show the available information about letters sent or received by this person.
              NB some people may not have any letter information available.
            </li>
            <li>
              <strong>TIMELINE OF LETTERS</strong> shows time series of the letters sent or recieved by the actor.
              Howering or clicking on the bullets 'Sent', 'Received', or 'All' allows to hide/show e.g. only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>TOP CORRESPONDENCE</strong> show a time series of the actor's correspondences with 10 ten other people.
              Howering or clicking on the bullets 'to', 'from', 'Sent', 'Received', or 'All' allows to focus e.g. on only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> shows this actors's relations to other actors connected by the correspondence. The network shown a maximum of 60 neighbors nodes within a distance of 3 degress from the network ego.
            </li>
            <li>
              <strong>SOCIAL SIGNATURES</strong> view has a chart showing how much the actor has been in correspondence with the most, the second most, etc, important other actor during the different periods along the total time of activity. In connections both sent and recieved letters are taken into account.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Search actors by name. Search is based on Apache Lucene index search. In addition to simple searches, you can use wildcard matching, e.g. Finland*. You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
        },
        gender: {
          label: 'Gender',
          description: 'The gender of a person. Notice that the other types of actors do not have this value.'
        },
        image: {
          label: 'Image of a person',
          description: `
            Image source: Wikimedia Commons.
          `
        },
        type: {
          label: 'Actor type',
          description: 'Type of the actor: person, group, family, or unknown'
        },
        maxScore: {
          label: 'Text search score',
          description: ''
        },
        role: {
          label: 'Actor role',
          description: 'Role of the actor: letter sender, recipient, referenced in content, or records creator'
        },
        birthDateTimespan: {
          label: 'Birth time',
          description: `Birth time of a person. Notice that the other types of actors do not have this value.`
        },
        birthPlace: {
          label: 'Place of Birth',
          description: `Place of Birth. Notice that the other types of actors do not have this value.`
        },
        floruitTimespan: {
          label: 'Floruit',
          description: `
          Floruit, e.g. time of flourishing, time of activity.
          `
        },
        floruit: {
          label: 'Floruit',
          description: `
          Floruit, e.g. time of flourishing, time of activity.
          `
        },
        deathDateTimespan: {
          label: 'Death time',
          description: `Death time of a person. Notice that the other types of actors do not have this value.`
        },
        deathPlace: {
          label: 'Place of Death',
          description: `Place of Death. Notice that the other types of actors do not have this value.`
        },
        altLabel: {
          label: 'Alternative names',
          description: `Alternative names of the actor.`
        },
        description: {
          label: 'Description',
          description: `Short description of the actor. The descriptions might be in different languages.`
        },
        occupation: {
          label: 'Occupation',
          description: `Occupation of a person. Notice that the other types of actors do not have this value.`
        },
        external: {
          label: 'External databases',
          description: `
            Links to External databases.
          `
        },
        relative: {
          label: 'Relatives',
          description: `Family relatives of a person. 
          Notice that this data has been extracted from external databased like BiographySampo, AcademySampo and Wikidata. 
          Only relations between people in the CoCo data are shown, so there might be missing relations or errors.`
        },
        acquaintance: {
          label: 'Personal relations',
          description: `Personal relations to other people. 
          Notice that this data has been extracted from external databased like BiographySampo, AcademySampo, Wikidata, and ULAN.
          Only relations between people in the CoCo data are shown, so there might be missing relations or errors.`
        },
        rel: {
          label: 'Related actors',
          description: `
            Related actors, e.g. parents, spouses, acquaintances.
          `
        },
        similar: {
          label: 'Actors with similar names',
          description: `
            Actors with names that are close to the name of the current actor. 
            
            NB: Linking the letter metadata to the actors is an automatic process and there might appear errors in the actor recognition.
          `
        },
        metrics: {
          label: 'Network metrics',
          description: `
            Network metrics, e.g. centrality measures of the actor in the letter network. 
            Each line has the label of the measure, its value, and the rank at the end in the parenthesis. 
            (rank - 1 = the number of people who have a higher measure value).
          `
        },
        numCorrespondences: {
          label: 'Number of correspondences',
          description: `
          Number of distinct correspondences.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
            Other actors who have been in correspondence with this actor. 
            The number of mutually sent letters is in parenthesis at end of the label.
          `
        },
        numSent: {
          label: 'Number of sent letters',
          description: `
            Number of sent letters.
          `
        },
        sentletter: {
          label: 'Sent letters',
          description: `
            List of sent letters.
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        numReceived: {
          label: 'Number of received letters',
          description: `
            Number of received letters.
          `
        },
        receivedletter: {
          label: 'Received letters',
          description: `
            List of received letters.
          `
        },
        mentioningletter: {
          label: 'Mentioned in letters',
          description: `
          List of letters which mention this actor.
          `
        },
        archival_organization: {
          label: 'Archival Organization',
          description: `
            Archival Organizations having letter srelating to this actor.
          `
        },
        in_fonds: {
          label: 'Fonds',
          description: `
            Fonds containing letters related to this actor. 
            The name of the archival organization is shown in parenthesis after the name of the fonds,
            as well as the number of (sent+received) letters. 
            (Notice that all letters do not necessarily belong to a fonds.)
          `
        },
        created_fonds: {
          label: 'Created Fonds',
          description: `
            THe fonds where this actor is marked as the records creator.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds containing letters sent by this actor.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source where this actor is mentioned.
          `
        },
        knownLocation: {
          label: 'Known locations',
          description: `
            List of known locations. The number in parenthesis is the number of sent letters.
          `
        }
      }
    },
    letters: {
      label: 'Letters',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all letters in the data publication. One table row is equivalent to one letter.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>MAP</strong> includes a map showing the locations of sending the letters. 
        Clicking on a marker opens up a popup showing a list of actors have sent letters from each location.
      </li>
      <li>
        <strong>HEATMAP</strong> includes a heatmap showing the locations of letters activities.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. The chart shows the activities using a precision of one year.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first year of that time period, e.g. '1860'.

        NB. Due to the performance issues with the huge amount of letters in the database the amount of results is limited. Notice that you can use the filters to limit the size of the result set.
      </li>
      <li>
        <strong>CSV</strong> to download the result table as a datasheet.
      </li>
      <li>
        <strong>SPARQL</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
      <li>
        <strong>SHARE</strong> a link to a specific tab view with faceted results.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the letter in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The label of the Letter'
        },
        language: {
          label: 'Language',
          description: `
            The language used in the letter content.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the letters were written.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        data_provider: {
          label: 'Cultural heritage organization',
          description: `
            Cultural heritage organization
          `
        },
        digital_edition: {
          label: 'Digital Editions',
          description: `
            Digital Editions
          `
        },
        original_record: {
          label: 'Original record',
          description: `
          Original record.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        series: {
          label: 'Series',
          description: `
            Series
          `
        },
        source: {
          label: 'Sender',
          description: `
          Search for a sender by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        source_type: {
          label: 'Sender: Type',
          description: `
          Select the type of sender: Person, Group, Family or Unknown.
          `
        },
        source_gender: {
          label: 'Sender: Gender',
          description: `
          Filter the senders by their gender. NB: Group, Families, and Unknowns do not have a gender.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Search for a recipient by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        target_type: {
          label: 'Recipient: Type',
          description: `
          Filter the recipients by their type: Person, Group, Family or Unknown.
          `
        },
        target_gender: {
          label: 'Recipient: Gender',
          description: `
          Filter the recipients by their gender.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          Actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          Places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place: Sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The type of letter, e.g., letter, telegram, postcard, etc.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record
          `
        },
        created_letter: {
          label: 'Related letters',
          description: `
            All letters from this metadata record
          `
        },
        metadata: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about this letter
          `
        },
        source_url: {
          label: 'External data source',
          description: `
            External data source for the letter information
          `
        }
      }
    },
    fonds: {
      label: 'Fonds and Collections',
      facetResultsType: 'fonds',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the archival organizations and fonds in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all archival organizations and fonds in the CoCo data. 
        One table row is equivalent to one organization.
      </li>
      <li>
        <strong>MAP</strong> is a map visualization showing the known locations of sending letters.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Fonds and Collections',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the archival organization in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Fonds',
          description: 'The label of the Fonds'
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        fondsLabel: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        number_of_letters: {
          label: 'Number of Letters',
          description: `
            Number of letters in this fonds.
          `
        },
        creator: {
          label: 'Records creator',
          description: `
            Records creator of the fonds.
          `
        },
        creator_type: {
          label: 'Records creator, type',
          description: `
            Type of the records creator.
          `
        },
        creator_gender: {
          label: 'Records creator, gender',
          description: `
            Gender of the records creator.
          `
        },
        creator_occupation: {
          label: 'Records creator, occupation',
          description: `
            Occupation of the records creator.
          `
        },
        creator_external: {
          label: 'Records creator, external database',
          description: `
            Records creators in  external databases.
          `
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about the letters in this fonds.
          `
        },
        sender: {
          label: 'Senders',
          description: `
          List of letter senders in this fonds. The number in parenthesis is the number of letters.
          `
        },
        recipient: {
          label: 'Recipients',
          description: `
          List of letter recipients in this fonds. The number in parenthesis is the number of letters.
          `
        },
        letter: {
          label: 'Letters',
          description: `
          Letters in this fonds.
          `
        }
      }
    },
    contributors: {
      label: 'Contributors',
      facetResultsType: 'contributors',
      shortDescription: '(UNDER CONSTRUCTION)',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the archival organizations and fonds in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all archival organizations and fonds in the CoCo data. 
        One table row is equivalent to one organization.
      </li>
      <li>
        <strong>MAP</strong> is a map visualization showing the known locations of sending letters.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Contributor',
          description: 'The label of the contributing cultural heritage organization'
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        dataset_description: {
          label: 'Dataset Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        image: {
          label: 'Logo',
          description: `
            Possible logo of the organization.
          `
        },
        letter: {
          label: 'Letters',
          description: `
          Letters in this fonds.
          `
        },
        location: {
          label: 'Location',
          description: `
            Location of the cultural heritage organization.
          `
        },
        external: {
          label: 'Webpage',
          description: `
            Webpage of the cultural heritage organization.
          `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'Places',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Use this perspective to access the place ontology related to the letters and actors in the dataset.
      Places in the CoCo data consists of countries, counties, towns, villages, and town neighborhoods,
      as well as individual buildings, e.g. schools, churches, hospitals etc.
      The data (labels, coordinates, hierarchy) is converted from data sources like Wikidata and YSO.
      </br>
      Notice that this perspective view only the places with sent letters or referenced in the letter contents.
      In addition to that there are places required to, e.g., build the geographical hiearchy.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
      filters. The result view can be selected using the tabs:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all places in
        the CoCo data. One table row is equivalent to one place.
        Clicking on the place name opens a instance page providing more information about the chosen place. 
        Clicking on the place image opens a larger version of it.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed imformation about each place resource in the database.
          </li>
          <li>
            <strong>LETTERS AND ACTORS</strong> contains lists of letters and actors related to this place.
          </li>
          <li>
            <strong>TIMELINE OF LETTERS</strong> shows a time series with yearly amounts of letters.
            Notice that also the hiearchy is considered, e.g., on the page of a country all the letters sent from places within are also included. 
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            Place name.
          `
        },
        country: {
          label: 'Country',
          description: `
            Related country.
          `
        },
        location: {
          label: 'Coordinates',
          description: `
            Latitude and longitude of the place.
          `
        },
        broader: {
          label: 'Parent place',
          description: `
          Parent place, e.g. a municipality, county or country.
          `
        },
        narrower: {
          label: 'Places within',
          description: `
            Smaller places, e.g. towns and villages contained within the place.
            The optional number in parenthesis is the number of letter sendings and mentions of that place. 
          `
        },
        place: {
          label: 'Place',
          description: `
            The specific place(s) associated with the event.
          `
        },
        altLabel: {
          label: 'Alternative names',
          description: `
            Alternative names of the place.
          `
        },
        external: {
          label: 'External links',
          description: `
            External links.
          `
        },
        related: {
          label: 'Related actors',
          description: `
          Related actors, e.g. people or groups that have sent letters from this place.
          `
        },
        number_of_events: {
          label: 'Number of events',
          description: `
          Number of letter sendings and references related to this place. 
          A detailed list about the letters can be seen on the instance page tab "LETTERS AND ACTORS"
          `
        },
        born: {
          label: 'People born',
          description: `
          List of people known to have born here.
          `
        },
        deceased: {
          label: 'People deceased',
          description: `
          List of people known to have deceased here.
          `
        },
        type: {
          label: 'Place type',
          description: `
            The type of the specific place(s) associated with the event.
          `
        },
        from: {
          label: 'Sent letters',
          description: `
          Letters sent from this place.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        mentioningletter: {
          label: 'Mentioned in letters',
          description: `
            List of letters which mention this place.
          `
        },
        image: {
          label: 'Image',
          description: `
            A possible image of the person. Source: Wikimedia Commons.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database (Schoenberg, Bibale, and Bodleian) that provided
            the information about the event.
          `
        }
      }
    },
    ties: {
      instancePage: {
        label: 'Correspondence',
        description: `
          <p>
          This instance page provides detailed information about a correspondence between two actors.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes detailed information about the correspondence between two specific actors.
            </li>
            <li>
              <strong>TIMELINE OF LETTERS</strong> details about all the letters sent and received between the two actors. The two timeline charts on this tab show the correspondence with precision of a single day or by years.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> contains a network visualization showing the closest other correspondences connecting to the specific correspondence between the two actors of this page.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        ego: {
          label: 'URI 1',
          description: 'Uniform Resource Identifier'
        },
        prefLabel1: {
          label: 'Actor 1',
          description: `
            Preferable actor label.
          `
        },
        alter: {
          label: 'URI 2',
          description: 'Uniform Resource Identifier'
        },
        prefLabel2: {
          label: 'Actor 2',
          description: `
            Preferable actor label.
          `
        },
        numLetters: {
          label: 'Number of letters',
          description: `
            Number of letters sent between the two actors.
          `
        },
        letter: {
          label: 'List of letters',
          description: `
            All letters sent between the two actors.
          `
        },
        other: {
          label: 'Related people',
          description: `
          People who have been in correspondence with both the sender and the recipient.
          `
        }
      }
    },
    metrics: {
      instancePage: {
        label: 'Network Metrics',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            This instance page provides information about the actors with the highest values for each of the network metric.
          </p>
        `
      },
      properties: {
        highest: {
          label: 'Actors with highest values',
          description: 'Actors with highest values'
        },
        prefLabel: {
          label: 'Actor 1',
          description: `
            Label for Network Metric.
          `
        },
        related: {
          label: 'Related network metrics',
          description: `
          Other network metrics available in the data.
          `
        }
      }
    },
    sources: {
      instancePage: {
        label: 'Data source',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            TODO: short instructions here
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Title',
          description: `
            Preferable data source label.
          `
        },
        letter: {
          label: 'List of letters',
          description: `
            List of letters from this data source.
          `
        },
        numLetters: {
          label: 'Number of letters',
          description: `
            Number of letters from this data source.
          `
        }
      }
    },
    occupations: {
      label: 'Occupation',
      facetResultsType: 'occupation',
      shortDescription: '',
      instancePage: {
        label: 'Proxy',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view provides detailed data about this actor.
            </li>
            <li>
              <strong>LETTERS</strong> show the available information about letters sent or received by this person.
              NB some people may not have any letter information available.
            </li>
            <li>
              <strong>TIMELINE OF LETTERS</strong> shows time series of the letters sent or recieved by the actor.
              Howering or clicking on the bullets 'Sent', 'Received', or 'All' allows to hide/show e.g. only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>TOP CORRESPONDENCES</strong> show a time series of the actor's correspondences with 10 ten other people.
              Howering or clicking on the bullets 'to', 'from', 'Sent', 'Received', or 'All' allows to focus e.g. on only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> shows this actors's relations to other actors connected by the correspondences. The network shown a maximum of 60 neighbors nodes within a distance of 3 degress from the network ego.
            </li>
            <li>
              <strong>SOCIAL SIGNATURES</strong> view has a chart showing how much the actor has been in correspondence with the most, the second most, etc, important other actor during the different periods along the total time of activity. In connections both sent and recieved letters are taken into account.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Search actors by name. Search is based on Apache Lucene index search. In addition to simple searches, you can use wildcard matching, e.g. Finland*. You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
        },
        provided: {
          label: 'Provided resource',
          description: 'Same actor in all datasets.'
        },
        people: {
          label: 'People',
          description: `
            People related to the occupation.
          `
        },
        related: {
          label: 'Related occupations',
          description: `
            Related occupations.
          `
        },
        altLabel: {
          label: 'Alternative labels',
          description: `Alternative labels of the occupation, e.g., in different languages.`
        },
        description: {
          label: 'Description',
          description: `Short description of the actor. The descriptions might be in different languages.`
        },
        occupation: {
          label: 'Occupation',
          description: `Occupation of a person. Notice that the other types of actors do not have this value.`
        },
        external: {
          label: 'External databases',
          description: `
            Links to External databases.
          `
        },
        broader: {
          label: 'Broader concept of this occupation.',
          description: `
            Hiearchically broader concept of this occupation.
          `
        }
      }
    },
    proxies: {
      label: 'Proxy',
      facetResultsType: 'proxy',
      shortDescription: '',
      instancePage: {
        label: 'Proxy',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view provides detailed data about this actor.
            </li>
            <li>
              <strong>LETTERS</strong> show the available information about letters sent or received by this person.
              NB some people may not have any letter information available.
            </li>
            <li>
              <strong>TIMELINE OF LETTERS</strong> shows time series of the letters sent or recieved by the actor.
              Howering or clicking on the bullets 'Sent', 'Received', or 'All' allows to hide/show e.g. only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>TOP CORRESPONDENCES</strong> show a time series of the actor's correspondences with 10 ten other people.
              Howering or clicking on the bullets 'to', 'from', 'Sent', 'Received', or 'All' allows to focus e.g. on only the sent or received letters.
              The letters that are known to be sent during multiple years are spread evenly along that period.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> shows this actors's relations to other actors connected by the correspondences. The network shown a maximum of 60 neighbors nodes within a distance of 3 degress from the network ego.
            </li>
            <li>
              <strong>SOCIAL SIGNATURES</strong> view has a chart showing how much the actor has been in correspondence with the most, the second most, etc, important other actor during the different periods along the total time of activity. In connections both sent and recieved letters are taken into account.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Search actors by name. Search is based on Apache Lucene index search. In addition to simple searches, you can use wildcard matching, e.g. Finland*. You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
        },
        provided: {
          label: 'Provided resource',
          description: 'Same actor in all datasets.'
        },
        gender: {
          label: 'Gender',
          description: 'The gender of a person. Notice that the other types of actors do not have this value.'
        },
        image: {
          label: 'Image of a person',
          description: `
            Image source: Wikimedia Commons.
          `
        },
        other: {
          label: 'Other proxies',
          description: `
            Other proxies of same actor.
          `
        },
        label_in_letter: {
          label: 'Labels used in letter metadata',
          description: `
            How this actor was named as a sender or a recipient in the letter metadata 
          `
        },
        type: {
          label: 'Actor type',
          description: 'Type of the actor: person, group, family, or unknown'
        },
        birthDateTimespan: {
          label: 'Birth time',
          description: `Birth time of a person. Notice that the other types of actors do not have this value.`
        },
        birthPlace: {
          label: 'Place of Birth',
          description: `Place of Birth. Notice that the other types of actors do not have this value.`
        },
        floruitTimespan: {
          label: 'Floruit',
          description: `
          Floruit, e.g. time of flourishing, time of activity.
          `
        },
        floruit: {
          label: 'Floruit',
          description: `
          Floruit, e.g. time of flourishing, time of activity.
          `
        },
        deathDateTimespan: {
          label: 'Death time',
          description: `Death time of a person. Notice that the other types of actors do not have this value.`
        },
        deathPlace: {
          label: 'Place of Death',
          description: `Place of Death. Notice that the other types of actors do not have this value.`
        },
        altLabel: {
          label: 'Alternative names',
          description: `Alternative names of the actor.`
        },
        description: {
          label: 'Description',
          description: `Short description of the actor. The descriptions might be in different languages.`
        },
        occupation: {
          label: 'Occupation',
          description: `Occupation of a person. Notice that the other types of actors do not have this value.`
        },
        external: {
          label: 'External databases',
          description: `
            Links to External databases.
          `
        },
        relative: {
          label: 'Relatives',
          description: `Family relatives of a person. 
          Notice that this data has been extracted from external databased like BiographySampo, AcademySampo and Wikidata. 
          Only relations between people in the CoCo data are shown, so there might be missing relations or errors.`
        },
        acquaintance: {
          label: 'Personal relations',
          description: `Personal relations to other people. 
          Notice that this data has been extracted from external databased like BiographySampo, AcademySampo, Wikidata and ULAN. 
          Only relations between people in the CoCo data are shown, so there might be missing relations or errors.`
        },
        rel: {
          label: 'Related actors',
          description: `
            Related actors, e.g. parents, spouses, acquaintances.
          `
        },
        metrics: {
          label: 'Network metrics',
          description: `
            Network metrics, e.g. centrality measures of the actor in the letter network. 
            Each line has the label of the measure, its value, and the rank at the end in the parenthesis. 
            (rank - 1 = the number of people who have a higher measure value).
          `
        },
        numCorrespondences: {
          label: 'Number of correspondences',
          description: `
          Number of distinct correspondences.
          `
        },
        tie: {
          label: 'Correspondences',
          description: `
            Other actors who have been in correspondence with this actor. 
            The number of mutually sent letters is in parenthesis at end of the label.
          `
        },
        numSent: {
          label: 'Number of sent letters',
          description: `
            Number of sent letters.
          `
        },
        sentletter: {
          label: 'Sent letters',
          description: `
            List of sent letters.
          `
        },
        numReceived: {
          label: 'Number of received letters',
          description: `
            Number of received letters.
          `
        },
        receivedletter: {
          label: 'Received letters',
          description: `
            List of received letters.
          `
        },
        mentioningletter: {
          label: 'Mentioned in letters',
          description: `
          List of letters which mention this actor.
          `
        },
        archival_organization: {
          label: 'Archival Organization',
          description: `
            Archival Organizations having letter srelating to this actor.
          `
        },
        in_fonds: {
          label: 'Fonds',
          description: `
            Fonds containing letters related to this actor. 
            The name of the archival organization is shown in parenthesis after the name of the fonds,
            as well as the number of (sent+received) letters. 
            (Notice that all letters do not necessarily belong to a fonds.)
          `
        },
        created_fonds: {
          label: 'Created Fonds',
          description: `
            The fonds where this actor is marked as the records creator.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds containing letters sent by this actor.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source where this actor is mentioned.
          `
        },
        knownLocation: {
          label: 'Known locations',
          description: `
            List of known locations. The number in parenthesis is the number of sent letters.
          `
        }
      }
    },
    snellmanedition: {
      label: 'J. V. Snellman',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the letter data in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all letters in
        the data publication. 
        One table row is equivalent to one letter.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>MAP</strong> includes a map showing the locations of sending the letters. 
        The number in the place marker is the total number of letters. 
        Clicking on a marker opens up a popup showing a list of actors who have sent or received letters in the locations. 
      </li>
      <li>
        <strong>HEATMAP</strong> includes a heatmap showing the locations of letters activities.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. 
        The upper chart of the timeline shows the activities using a precision of one day, the lower one the yearly amounts of sent and received letters.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first year of that time period, e.g. '1860'.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the letter in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The label of the Letter'
        },
        relatedPerson: {
          label: 'Related person',
          description: ''
        },
        relatedPlace: {
          label: 'Related place',
          description: ''
        },
        relatedConcept: {
          label: 'Related concept',
          description: ''
        },
        relatedEntity: {
          label: 'Related entity',
          description: ''
        },
        nlpEntity: {
          label: 'Mentioned entity (automatically)',
          description: ''
        },
        nlpPerson: {
          label: 'Mentioned person (automatically)',
          description: ''
        },
        nlpPlace: {
          label: 'Mentioned place (automatically)',
          description: ''
        },
        nlpLocation: {
          label: 'Mentioned location (automatically)',
          description: ''
        },
        nlpDate: {
          label: 'Mentioned date (automatically)',
          description: ''
        },
        nlpEvent: {
          label: 'Mentioned event (automatically)',
          description: ''
        },
        nlpOrganization: {
          label: 'Mentioned organization (automatically)',
          description: ''
        },
        nlpMisc: {
          label: 'Misc (automatically)',
          description: ''
        },
        nlpArtwork: {
          label: 'Mentioned artwork (automatically)',
          description: ''
        },
        language: {
          label: 'Language',
          description: `
            The language used in the letter content.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the letters were written.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        original_record: {
          label: 'Original record',
          description: `
          Original record.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        series: {
          label: 'Series',
          description: `
            Series
          `
        },
        source: {
          label: 'Sender',
          description: `
          Search for a sender by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        source_type: {
          label: 'Sender: Type',
          description: `
          Select the type of sender: Person, Group, Family or Unknown.
          `
        },
        source_gender: {
          label: 'Sender: Gender',
          description: `
          Filter the senders by their gender. NB: Group, Families, and Unknowns do not have a gender.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Search for a recipient by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        target_type: {
          label: 'Recipient: Type',
          description: `
          Filter the recipients by their type: Person, Group, Family or Unknown.
          `
        },
        target_gender: {
          label: 'Recipient: Gender',
          description: `
          Filter the recipients by their gender.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          Actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          Places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place of sending (automatically)',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The type of letter, e.g., letter, telegram, postcard, etc.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record
          `
        },
        other: {
          label: 'Related letters',
          description: `
            List of all letters having the same metadata record
          `
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about this letter
          `
        },
        source_url: {
          label: 'External data source',
          description: `
            External data source for the letter information
          `
        },
        content: {
          label: 'Content',
          description: `
            Textual content of the letter
          `
        }
      }
    },
    topeliusedition: {
      label: 'Zachris Topelius',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the letter data in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li> 
        <strong>TABLE</STRONG> view includes all letters in the data publication. One table row is equivalent to one letter.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>MAP</strong> includes a map showing the locations of sending the letters. 
        Clicking on a marker opens up a popup showing a list of actors have sent letters from each location.
      </li>
      <li>
        <strong>HEATMAP</strong> includes a heatmap showing the locations of letters activities.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. The upper chart of the timeline shows the activities using a precision of one day, the lower one the yearly amounts of sent and received letters.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first year of that time period, e.g. '1860'.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the letter in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The label of the Letter'
        },
        language: {
          label: 'Language',
          description: `
            The language used in the letter content.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the letters were written.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        original_record: {
          label: 'Original record',
          description: `
          Original record.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        series: {
          label: 'Series',
          description: `
            Series
          `
        },
        source: {
          label: 'Sender',
          description: `
          Search for a sender by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        source_type: {
          label: 'Sender: Type',
          description: `
          Select the type of sender: Person, Group, Family or Unknown.
          `
        },
        source_gender: {
          label: 'Sender: Gender',
          description: `
          Filter the senders by their gender. NB: Group, Families, and Unknowns do not have a gender.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Search for a recipient by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        target_type: {
          label: 'Recipient: Type',
          description: `
          Filter the recipients by their type: Person, Group, Family or Unknown.
          `
        },
        target_gender: {
          label: 'Recipient: Gender',
          description: `
          Filter the recipients by their gender.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          Actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          Places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place: Sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The type of letter, e.g., letter, telegram, postcard, etc.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record
          `
        },
        other: {
          label: 'Related letters',
          description: `
            List of all letters having the same metadata record
          `
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about this letter
          `
        },
        source_url: {
          label: 'External data source',
          description: `
            External data source for the letter information
          `
        }
      }
    },
    lonnrotedition: {
      label: 'Elias Lönnrot',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the letter data in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all letters in the data publication. 
        One table row is equivalent to one letter.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>MAP</strong> includes a map showing the locations of sending the letters. 
        Clicking on a marker opens up a popup showing a list of actors have sent letters from each location.
      </li>
      <li>
        <strong>HEATMAP</strong> includes a heatmap showing the locations of letters activities.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. The upper chart of the timeline shows the activities using a precision of one day, the lower one the yearly amounts of sent and received letters.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first year of that time period, e.g. '1860'.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the letter in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The label of the Letter'
        },
        language: {
          label: 'Language',
          description: `
            The language used in the letter content.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the letters were written.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        original_record: {
          label: 'Original record',
          description: `
          Original record.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        series: {
          label: 'Series',
          description: `
            Series
          `
        },
        source: {
          label: 'Sender',
          description: `
          Search for a sender by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        source_type: {
          label: 'Sender: Type',
          description: `
          Select the type of sender: Person, Group, Family or Unknown.
          `
        },
        source_gender: {
          label: 'Sender: Gender',
          description: `
          Filter the senders by their gender. NB: Group, Families, and Unknowns do not have a gender.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Search for a recipient by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        target_type: {
          label: 'Recipient: Type',
          description: `
          Filter the recipients by their type: Person, Group, Family or Unknown.
          `
        },
        target_gender: {
          label: 'Recipient: Gender',
          description: `
          Filter the recipients by their gender.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          Actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          Places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place: Sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The type of letter, e.g., letter, telegram, postcard, etc.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record
          `
        },
        other: {
          label: 'Related letters',
          description: `
            List of all letters having the same metadata record
          `
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about this letter
          `
        },
        source_url: {
          label: 'External data source',
          description: `
            External data source for the letter information
          `
        }
      }
    },
    edelfeltedition: {
      label: 'Albert Edelfelt',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the letter data in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vRPPYcK4VLKdh_uVbNMZ8diOe0MZhvVjisvVpDCzUn5hMU8SAKfG5QF8iwS6grYpXB41PfzDkT0tttg/pub">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all letters in the data publication. One table row is equivalent to one letter.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of the letters.
      </li>
      <li>
        <strong>MAP</strong> includes a map showing the locations of sending the letters. 
        Clicking on a marker opens up a popup showing a list of actors have sent letters from each location.
      </li>
      <li>
        <strong>HEATMAP</strong> includes a heatmap showing the locations of letters activities.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. The upper chart of the timeline shows the activities using a precision of one day, the lower one the yearly amounts of sent and received letters.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first year of that time period, e.g. '1860'.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</strong> show the available information about the letter in the database.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Title',
          description: 'The label of the Letter'
        },
        language: {
          label: 'Language',
          description: `
            The language used in the letter content.
          `
        },
        subject: {
          label: 'Subject',
          description: `
            The subject of the letter.
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        comment: {
          label: 'Comment',
          description: `
          Comments marked with the letter.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date(s) when the letters were written.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital Edition
          `
        },
        original_record: {
          label: 'Original record',
          description: `
          Original record.
          `
        },
        fonds: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        series: {
          label: 'Series',
          description: `
            Series
          `
        },
        source: {
          label: 'Sender',
          description: `
          Search for a sender by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        source_type: {
          label: 'Sender: Type',
          description: `
          Select the type of sender: Person, Group, Family or Unknown.
          `
        },
        source_gender: {
          label: 'Sender: Gender',
          description: `
          Filter the senders by their gender. NB: Group, Families, and Unknowns do not have a gender.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Search for a recipient by name. 
          Search is based on Apache Lucene index search. 
          In addition to simple searches, you can use wildcard matching, e.g. Finland*. 
          You can also use the logical operators AND, OR and NOT, but then the search must be written in parentheses, e.g., like this (Jean AND Sibelius)'
          `
        },
        target_type: {
          label: 'Recipient: Type',
          description: `
          Filter the recipients by their type: Person, Group, Family or Unknown.
          `
        },
        target_gender: {
          label: 'Recipient: Gender',
          description: `
          Filter the recipients by their gender.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          Actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          Places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place: Sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          Place where the letter was received.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The type of letter, e.g., letter, telegram, postcard, etc.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record
          `
        },
        other: {
          label: 'Related letters',
          description: `
            List of all letters having the same metadata record
          `
        },
        related: {
          label: 'External links',
          description: `
            External links providing more information about this letter
          `
        },
        source_url: {
          label: 'External data source',
          description: `
            External data source for the letter information
          `
        }
      }
    },
  }
}
