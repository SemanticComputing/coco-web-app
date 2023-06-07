export default {
  languageLabel: 'English',
  html: {
    title: 'CoCo – Historical Letters on the Semantic Web',
    description: 'CoCo can be used for analysing epistolary data in different data repositories in different countries, or for aggegated international datasets, such as Republic of Letters Data.'
  },
  appTitle: {
    short: 'CoCo',
    long: ' CoCo',
    mobile: 'CoCo',
    subheading: `
      Historical Letters on the Semantic Web
    `
  },
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      aboutTheProject: 'About the project',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/rrl/'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions',
    instructionsUrl: 'https://seco.cs.aalto.fi/projects/rrl/'

  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
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
    sentReceivedByPlace: 'timeline of letters',
    correspondenceTimeline: 'Letter Timeline',
    sentReceivedByTie: 'Timeline',
    tieNetwork: 'Network',
    letters: 'letters',
    'letters-and-actors': 'letters and actors',
    heatmap: 'heatmap',
    statistics: 'statistics',
    download: 'download'
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
        used in the LetterSampo Portal. Click the Open in Linked Data Browser on button on the
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
      legendFrom: 'Place of sending',
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
          label: 'Label'
        },
        type: {
          label: 'Type'
        }
      }
    },
    actors: {
      label: 'Actors',
      facetResultsType: 'actors',
      shortDescription: 'People or groups of people in the collection', // altogether 19716
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the people and groups in the dataset.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          General information about the project is available at the <a href="https://seco.cs.aalto.fi/projects/rrl/"  target="_blank" rel="noopener noreferrer">project blog</a>.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the actors in the dataset.
          See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all actors in
            the LetterSampo data. One table row is equivalent to one actors.
            Wikidata/Wikimedia Commons is used as the image source.
            NB. Clicking on the person name leads to a actor instance page providing more information about the actor, while clicking on the image opens the image in a larger scale.
          </li>
          <li>
            <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of birth, sending and receiving letters, and death.
            Places without the coordinate information are shown as a part of the place higher in the hierarchy.
          </li>
          <li>
            <strong>NETWORK</strong> is a social network visualization showing the Sender-Recipient relationships.
              Notice that the amount of people shown in the network is limited for performance reason.
              The Sender-Recipient relationships are not available for all, so some facet setting may not show the network at all.
              More network visualizations focusing on a particular person can be viewed at person instance pages.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Actor',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes detailed data about this person or group.
            </li>
            <li>
              <strong>LETTERS</strong> show the available information about letters sent or received by this person.
              NB some people may not have any letter information available.
            </li>
            <li>
              <strong>NETWORK OF LETTERS</strong> shows this actors's relations to other actors connected by the correspondences.
            </li>
            <li>
              <strong>SOCIAL SIGNATURES</strong> view has a chart showing how much the actor has been in correspondence with the most, the second most, etc, important other actor during the different periods along the total time of activity.
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
          description: ''
        },
        gender: {
          label: 'Gender',
          description: 'The gender of a person.'
        },
        image: {
          label: 'Image',
          description: `
            Image source: Wikimedia Commons.
          `
        },
        type: {
          label: 'Type',
          description: 'Person or Group'
        },
        birthDateTimespan: {
          label: 'Birth time',
          description: `
          Birth time of a person
          `
        },
        birthPlace: {
          label: 'Place of Birth',
          description: `
          Place of Birth
          `
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
        receiving_time: {
          label: 'Time of receiving letters',
          description: `
          Years when letters has been sent to this actor.
          `
        },
        deathDateTimespan: {
          label: 'Death time',
          description: `
          Death time of a person
          `
        },
        deathPlace: {
          label: 'Place of Death',
          description: `
          Place of Death
          `
        },
        altLabel: {
          label: 'Alternative names',
          description: `
            Alternative names of the actor.
          `
        },
        occupation: {
          label: 'Occupation',
          description: `
          Occupation of the actor.
          `
        },
        external: {
          label: 'External databases',
          description: `
            Links to External databases.
          `
        },
        event: {
          label: 'Event',
          description: `
            Events related to the manuscript.
          `
        },
        owner: {
          label: 'Owner',
          description: `
            Former or current owners (individual or institutional).
          `
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
        datasource: {
          label: 'Data source',
          description: `
            The data source where this actor is mentioned.
          `
        },
        knownLocation: {
          label: 'Known locations',
          description: `
            Known locations by letter correspondence.
          `
        },
        material: {
          label: 'Material',
          description: `
            The physical material on which the text is written.
          `
        }
      }
    },
    letters: {
      label: 'Letters',
      facetResultsType: 'letters',
      shortDescription: 'Information about the letters in the database',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the letter data in the dataset.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a href="/instructions">instructions</a> for using the
        filters. The result view can be selected using the tabs:
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all letter in
        the LetterSampo data. One table row is equivalent to one letter.
      </li>
      <li>
        <strong>MIGRATIONS</strong> is a map visualization showing the known routes of the letters.
        NB. Some letters may not have information including both the places of sending and receiving, and does not therefore appear on the map application.
      </li>
      <li>
        <strong>BY YEAR</strong> includes a chart showing the yearly distribution of letters in the database.
      </li>
      <li>
        <strong>TOP CORRESPONDENTS</STRONG> view shows a timeline of letters and most important correspondents. The upper chart of the timeline shows the activities using a precision of one day, the lower one the yearly amounts of sent and received letters.
        NB. Letters having more approximate temporal information, e.g. 'sent 1860-1865' show up on the first day of that time period, e.g. '1 Jan. 1860'.
      </li>
      <li>
        <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
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
          description: 'The name or title of the Work.'
        },
        language: {
          label: 'Language',
          description: `
            The language in which a Work is written in the manuscript
            (i.e., an “Expression” of a Work). One manuscript may contain multiple languages.
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
        excipit: {
          label: 'Excipit',
          description: `
          An excipit of the letter.
          `
        },
        description: {
          label: 'Description',
          description: `
          The description of the letter content.
          `
        },
        manuscript: {
          label: 'Manuscript',
          description: `
          The specific manuscript(s) in which the Work can be found.
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
            The date(s) when the manuscript(s) in which the Work can be found were written.
            Multiple production dates may appear for a single manuscript,
            when there are discrepancies between the contributing data source
            or when the precise date is uncertain.
          `
        },
        collection: {
          label: 'Collection',
          description: `
            The specific collection(s) of manuscripts in which a Work can be found.
          `
        },
        source: {
          label: 'Sender',
          description: `
            Sender of the letter.
          `
        },
        target: {
          label: 'Recipient',
          description: `
          Recipient of the letter.
          `
        },
        mentions: {
          label: 'Mentions',
          description: `
          An actor mentioned in the letter.
          `
        },
        store: {
          label: 'Stored in',
          description: `
          A place where this letter is stored.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence of all letters between the sender and the recipient.
          `
        },
        from: {
          label: 'Place of sending',
          description: `
          Place from where the letter was sent.
          `
        },
        to: {
          label: 'Place of receiving',
          description: `
          The receiving place of the letter.
          `
        },
        record_value: {
          label: 'Metadata record values',
          description: `
            Textual values in the letter metadata record.
          `
        },
        related: {
          label: 'External links',
          description: `
            External links.
          `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'Places',
      shortDescription: 'Related towns, cities, or countries',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Use this perspective to access the place data related to the actors and letters in the dataset.
      Places in the LetterSampo data consists of countries, counties, towns, villages, and town neighborhoods,
      as well as individual buildings, e.g. schools, churches, hospitals etc.
      The data (labels, coordinates, hierarchy) is converted from various data sources:
      Geonames, GND places, and Wikidata.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      See <a href="/instructions">instructions</a> for using the
      filters. The result view can be selected using the tabs:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all places in
        the LetterSampo data. One table row is equivalent to one place.
        Clicking on the place name opens a instance page providing more information about the chosen place. 
        Clicking on the place image opens a larger version of it.
      </li>
      <li>
        <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
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
            <strong>TIMELINE OF LETTERS</strong> contains a timeline showing the letters related to this place.
            The two timeline charts on this tab show the activities with precision of a single day or by years.
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
          Related actors, e.g. people or groups that have sent or received letters at this place.
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
          label: 'Received letters',
          description: `
          Letters sent to this place.
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
          label: 'Label',
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
    }
  }
}
