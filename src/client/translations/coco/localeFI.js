import { constrainedMemory } from "process";
import fig_num_letters_actors from '../../img/data_figures/num_letters_actors.png'
import fig_letter_metadata from '../../img/data_figures/letter_metadata.png'
import fig_letter_dates from '../../img/data_figures/letter_dates.png'
import fig_actor_metadata from '../../img/data_figures/actor_metadata.png'
import fig_shared_actors from '../../img/data_figures/shared_actors.png'

export default {
  languageLabel: 'Finnish',
  html: {
    title: 'Kirjesampo',
    description: 'Tietokokonaisuus ja semanttinen portaali, joka kokoaa yhteen 1800-luvun kirjeenvaihtoa koskevia metatietoja tärkeimmistä suomalaisista kulttuuriperintöorganisaatioista. Tietokokonaisuus sisältää tietoja yli 1 200 000 kirjeestä ja yli 100 000 henkilöstä ja organisaatiosta. Tiedot ovat saatavilla linkitettynä avoimena datana.'
  },
  appTitle: {
    short: '',
    long: 'Kirjesampo',
    mobile: '',
    subheading: `
      1800-luvun suomalaisia kirjekokoelmia semanttisessa webissä
    `
  },
  selectEditionPerpective: 'Digitaaliset editiot (in English)',
  selectPerspective: 'Valitse näkymä kirjemetadatan hakua ja tutkimista varten: ',
  selectInformationPerspective: 'Tietoa aineistojen luovuttajista ja heidän kokoelmistaan',
  mainPageImageLicence: 'Kuvia käytetään Wikimedia Commonsin lisenssillä',
  backendErrorText: 'Yksi taustapalveluista ei ole tällä hetkellä käytettävissä. Yritä myöhemmin uudelleen.',
  mainPageLinkText: "Esimerkkihakuja ja linkitetyn tiedon visualisointeja",
  mainPageLinks: [
      {
        title: 'Akseli Gallen-Kallelan kirjeet',
        link: '/fi/actors/page/p0000000000000000869/letters'
      },
      {
        title: 'Elias Lönnrotin kirjeverkosto',
        link: '/fi/actors/page/p0000000000000000370/letter-network'
      },
      {
        title: 'Johan Ludvig and Fredrika Runebergin välistä kirjeenvaihtoa',
        link: '/fi/letters/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22source_facet%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B36%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000002128%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Fredrika%20(1807-1879)%22%2C%22instanceCount%22%3A1407%7D%7D%7D%2C%7B%22facetId%22%3A%22source_facet%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B383%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000000187%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Johan%20Ludvig%20(1804-1877)%22%2C%22instanceCount%22%3A483%7D%7D%7D%2C%7B%22facetId%22%3A%22target_facet%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B8%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000002128%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Fredrika%20(1807-1879)%22%2C%22instanceCount%22%3A41%7D%7D%7D%2C%7B%22facetId%22%3A%22target_facet%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B55%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fprovided%2Fp0000000000000000187%22%2C%22prefLabel%22%3A%22Runeberg%2C%20Johan%20Ludvig%20(1804-1877)%22%2C%22instanceCount%22%3A4%7D%7D%7D%5D'
      },
      {
        title: 'Uno Cygnaeuksen laajimmat kirjeenvaihdot',
        link: '/fi/actors/page/p1516151985531889895/top-correspondences'
      },
      {
        title: 'Linkitettyä tietoa Ida Aalbergista',
        link: '/fi/actors/page/p0000000000000000571/table'
      },
      {
        title: 'Helene Schjerfbeckin kirjeet aikajanalla',
        link: '/fi/actors/page/p0000000000000001321/letters-by-year'
      },
      {
        title: 'Albert Edelfeltin kirjeissä mainittuja paikkoja kartalla',
        link: '/fi/edelfeltedition/faceted-search/map'
      },
      {
        title: 'Suomalaisen Kirjallisuuden Seuran kirjekokoelmat',
        link: '/fi/fonds/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22data_provider%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B3%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fsource%2Fsks%22%2C%22prefLabel%22%3A%22Finnish%20Literature%20Society%22%2C%22instanceCount%22%3A256%7D%7D%7D%5D'
      },
      {
        title: 'Teatterimaailmaan liittyviä kirjeverkostoja',
        link: '/fi/actors/faceted-search/network?constraints=%5B%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B29%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ33999%22%2C%22prefLabel%22%3A%22actor%22%2C%22instanceCount%22%3A370%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B178%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ1776724%22%2C%22prefLabel%22%3A%22theatre%20manager%22%2C%22instanceCount%22%3A53%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B74%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ2259451%22%2C%22prefLabel%22%3A%22stage%20actor%22%2C%22instanceCount%22%3A158%7D%7D%7D%2C%7B%22facetId%22%3A%22occupation%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B474%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Foccupations%2FQ21169216%22%2C%22prefLabel%22%3A%22actress%22%2C%22instanceCount%22%3A8%7D%7D%7D%5D'
      },
      {
        title: 'Naiset arkistonmuodostajina Kansalliskirjastossa',
        link: '/fi/fonds/faceted-search/table?page=0&constraints=%5B%7B%22facetId%22%3A%22data_provider%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B4%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fcoco%2Fsource%2Fnationallibrary%22%2C%22prefLabel%22%3A%22The%20National%20Library%20of%20Finland%22%2C%22instanceCount%22%3A32%7D%7D%7D%2C%7B%22facetId%22%3A%22creator_gender%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B1%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%2F2009%2Fcode%23sex-F%22%2C%22prefLabel%22%3A%22Female%22%2C%22instanceCount%22%3A313%7D%7D%7D%5D'
      }
  ],
  mainPageDick: 'fehkufhekj',
  topBar: {
    feedback: 'Palaute',
    info: {
      info: 'Info',
      aboutTheProject: 'Tietoa projektista',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/coco/',
      dataStatistics: 'Yleiskatsaus aineistoon / tilastotietoa'
    },
    searchBarPlaceHolder: 'Hae aineistosta',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'ohjeet',
    instructionsUrl: 'https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub',
    editionPerspectives: 'Digital editions'

  },
  facetBar: {
    results: 'Tulokset',
    activeFilters: 'Valitut filtterit:',
    removeAllFilters: 'Poista kaikki',
    narrowDownBy: 'Rajaa hakua',
    filterOptions: 'Järjestämisen valinnat',
    filterByName: 'Hae nimen perusteella',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Järjestämisen valinnat',
    sortAlphabetically: 'Järjestä aakkosten mukaan',
    sortByNumberOfSearchResults: 'Järjestä tulosten määrän mukaan',
    useDisjunction: 'Käytä loogista OR-toimintoa valintojen välillä',
    useConjuction: 'Käytä loogista AND-toimintoa valintojen välillä',
    minYear: 'Min vuosi',
    maxYear: 'Max vuosi',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Hae...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Piirakkakaavio'
    }
  },
  tabs: {
    table: 'taulukko',
    map: 'kartta',
    migrations: 'migrations',
    network: 'verkosto',
    export: 'export',
    'by-year': 'aikajana',
    'letters-by-year': 'kirjeet aikajanalla',
    'by-period': 'aikakauden mukaan',
    'letter-network': 'kirjeiden verkosto',
    'social-signatures': 'kirjeenvaihtojen jatkuvuus ',
    'top-correspondences': 'laajimmat kirjeenvaihdot',
    'top-correspondents': 'laajimmat kirjeenvaihdot',
    csv: 'csv',
    metadata: 'metadata',
    view: 'digitaalinen editio',
    letter: 'kirje',
    sentReceivedByPlace: 'aikajana',
    correspondenceTimeline: 'aikajana',
    sentReceivedByTie: 'aikajana',
    tieNetwork: 'verkosto',
    letters: 'kirjeet',
    'letters-and-actors': 'kirjeet ja toimijat',
    heatmap: 'lämpokartta',
    statistics: 'tilastot',
    download: 'lataa',
    sparql: 'sparql',
    share: 'jaa'
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation',
    sentCount: 'Lähetetyt',
    receivedCount: 'Vastaanotetut',
    allCount: 'Kaikki',
    average: 'Keskimäärin',
    sender: 'Lähettäjä',
    sender1: 'Lähettäjä 1',
    sender2: 'Lähettäjä 2',
    both: 'Molemmat'
  },
  exportToYasgui: 'Avaa tuloskysely Yasgui-editorissa',
  openInLinkedDataBrowser: 'Avaa linkitetty data Saha-editorissa',
  resultsAsCSV: 'Lataa tulokset CSV-tiedostona',
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
        Tämä laskeutumissivu tarjoaa yhteenvedon tietyn kokonaisuuden {entity} tiedoista. Yksityiskohtaisemmat tiedot näet klikkaamalla Avaa linkitettynä avoimena              datana -painiketta.  
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Käytä tiedoston URI:ia jos haluat viitata tiedostoon. URI:n avulla voit palata tiedostoon aina halutessasi.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Computationally generated data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Suuri osa tiedoista on tuotettu laskennallisesti. Mukana saattaa olla virheellisiä tai toistuvia tietueita, jotka johtuvat joko lähdedatasta tai prosessoinnissa         tapahtuneista virheistä.
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
          label: 'Nimeke'
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
      label: 'Henkilöt ja organisaatiot',
      facetResultsType: 'People/Organizations',
      shortDescription: '',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
         
        Tämän perspektiivin kautta voit hakea tietoja kirjeiden kirjoittajista ja vastaanottajista, kirjekokoelmien arkistonmuodostajista ja            joidenkin aineistojen kohdalla kirjeissä mainituista henkilöistä.<br>

        Eri organisaatioissa ja kirjekokoelmissa on samojen toimijoiden aineistoja. Näitä toimijoita on yhdistetty laskennallisesti, mutta                  aineistossa on edelleen niin väärin yhdistyneitä kuin yhdistymättömiäkin. Lähes kaikissa kirjekokoelmissa on lisäksi                    kirjeitä tunnistamattomilta henkilöiltä; näiden suuri määrä on tyypillistä kirjekokoelmien kuvailutiedoille ja niistä tuotetulle                massametadatalle.<br>

        Voit selata metatietoja käyttäen vasemmalla (mobiiliversiossa tulosten yllä) olevia suodattimia tai fasetteja. Nimi-haun lisäksi voit           rajoittaa hakua esimerkiksi toimijan sukupuolen tai ammatin mukaan. Huomaa, että ammattitieto on saatavilla ainoastaan toimijoista,             joista löytyy lisätietoa ulkopuolisista tietolähteistä. Ulkoinen datalähde -fasetti kertoo, kuinka suuri osuus toimijoista yhdistyy             ulkopuolisiin tietolähteisiin.<br>
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Ohjeet <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> filttereiden käyttämiseen.
          </p>
          Tuloksia voit visualisoida seuraavilla välilehdillä:
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG>-välilehti listaa aineiston kaikki toimijat. Taulukon yksi rivi sisältää yhteen toimijaan liittyvät tiedot. Toimijan nimen                     valitseminen vie yksityiskohtaisemmalle Toimija-instanssisivulle. Kuvat: Wikidata/Wikimedia Commons.
          </li>
          <li>
            <strong>KARTTA</strong> visualisoi toimijoihin liittyviä tunnettuja paikkoja (syntymä- ja kuolinpaikat, kirjeiden lähettämis- ja vastaanottopaikat). Mikäli         paikalla ei ole tarkkoja maantieteellisiä koordinaatteja, näytetään se osana seuraavaa suurempaa yksikköä. Paikkojen merkkejä klikkaamalla aukeaa lista paikkaan             liittyvistä henkilöistä selityksineen.
          </li>
          <li>
            <strong>VERKOSTO</strong>-näkymä visualisoi tarkastelun kohteena olevan henkilön kirjeenvaihtoverkostoa. Toimijoiden suuren määrän takia verkostoon                     valikoituu usein vain osa toimijoista. 
          </li>
          <li>
            <strong>CSV</strong>-välilehdeltä voit ladata tuloksia taulukkomuodossa omalle koneellesi.
            </li>
            <li>
            <strong>SPARQL-KYSELY</strong> -välilehdeltä voit seurata linkkiä Yasgui-palveluun, ja voit nähdä kyselyn, jolla tulokset haetaan tietokannasta.
            </li>
            <li>
           <strong>JAA</strong>-välilehdeltä löydät pysyvän linkin tekemääsi hakuun. Voit käyttää sitä haun myöhempään löytämiseen ja aineistoon viittaamiseen.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Lisää tietoa aineiston tuottaneesta tutkimusprojektista löydät projektin blogista <a href="https://seco.cs.aalto.fi/projects/coco/"  target="_blank" rel="noopener noreferrer">project blog</a>.
      `,
      instancePage: {
        label: 'Henkilö tai organisaatio',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Tuloksia voit tarkastella seuraavilla välilehdillä:
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>YLEISTIEDOT</STRONG>-välilehti esittelee henkilön tai muun toimijan biografisia tietoja. Tiedot on rikastettu ulkopuolisista tietolähteistä.
            </li>
            <li>
              <strong>KIRJEET</strong>-välilehdellä voit tarkastella toimijan lähettämiä ja vastaanottamia kirjeitä yksityiskohtaisemmin. Huomaa, että kaikista                     datasetissä mainituista toimijoista ei ole saatavilla näitä tietoja (esimerkiksi kirjeissä mainitut henkilöt). 
            </li>
            <li>
              <strong>AIKAJANA</strong>: Kyseisen toimijan lähettämät ja vastaanottamat kirjeet viivakaaviona. Oikeassa yläkulmassa olevilla zoomaus-työkaluilla pystyt                 tarkastelemaan tarkempia ajanjaksoja kaaviolla. 
            </li>
            <li>
              <strong>LAAJIMMAT KIRJEENVAIHDOT</strong> näyttää toimijan käymän kirjeenvaihdon 20 suurinta kokonaisuutta aikajanalla. Huomaa, että pääosassa                            kirjeenvaihdoista on vain alkamis- ja loppumisvuodet (esimerkiksi 1860-1895). Näissä tapauksissa kyseisen kirjeenvaihdon kirjeet on jaettu tasaisesti                   kyseiselle aikavälille. Oikeassa yläkulmassa olevilla zoomaus-työkaluilla pystyt tarkastelemaan tarkempia ajanjaksoja kaaviolla. 
            </li>
            <li>
              <strong>KIRJEVERKOSTO</strong> visualisoi toimijan kirjeenvaihdon verkostoa. Huomaa, että toimijoiden määrää on rajoitettu: verkostossa on enintään 60                    toimijaa enintään kolmen asteen etäisyydellä verkon egosta eli päätoimijasta.
            </li>
            <li>
             <strong>KIRJEENVAIHTOJEN JATKUVUUS (sosial signatures)</strong> -visualisointi näyttää toimijan käymän kirjeenvaihdon pysyvyyden eli laajimpien                            kirjeenvaihtojen määrälliset muutokset eri ajanjaksoina toimijan koko kirjeenvaihdon kokonaiskeston aikana. Vaaka-akseli kertoo toimijan kanssa käydyn                  kirjeenvaihdon laajuuden (1 = eniten kirjeitä) ja pystyakseli prosentuaalisen osuuden. Visualisoinnissa otetaan huomioon sekä lähetetyt että                            vastaanotetut kirjeet.
            </li>
            <li>
              <strong>SPARQL</strong>-välilehdeltä voit tarkastella tietokantakyselyä Yasgui-palvelussa ja aineistoa Saha-editorissa. 
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Kirjeen tiedot linkitettynä avoimena datana'
        },
        prefLabel: {
          label: 'Nimi',
          description: 'Hae toimijan nimen perusteella. Haku perustuu Apache Lucene -indeksiin. Yksinkertaisen tekstihaun lisäksi voit käyttää jokerimerkkiä * (Topel*).             Voit myös käyttää loogisia operaattoreita AND, OR ja NOT.'
        },
        label: {
          label: 'Nimi'
        },
        gender: {
          label: 'Sukupuoli',
          description: `
          Toimijoiden sukupuoli on tunnistettu koneellisesti ja jaottelussa on edelleen virheitä. 
         
        Mies: etunimen perusteella mieheksi tunnistetut henkilöt. Jos etunimestä on tiedossa vain kirjain tai kirjaimet, henkilö on laskettu mieheksi. Tämä perustuu            käsin läpikäytyyn otokseen. 
      
    
        Nainen: etunimen perusteella naiseksi tunnistetut henkilöt. 
      
   
        Ei käytettävissä; perheet, suvut, organisaatiot jne. 
     
    
        Tuntematon: toimija jonka sukupuolta ei ole tunnistettu lainkaan (pelkkä sukunimi; etunimi harvinainen; lähtödatassa “tuntematon”, “tunnistamaton”, “okänd” jne.) 
        `
        },
        image: {
          label: 'Kuva',
          description: `
            Lähde: Wikimedia Commons.
          `
        },
        type: {
          label: 'Toimijan tyyppi',
          description: 'Toimijat on jaoteltu henkilöihin, organisaatioihin, tuntemattomiin ja perheisiin. Tuntemattomat toimijat ovat pääasiassa henkilöitä, joiden             identiteettiä ei ole luetteloinnissa tunnistettu. Tuntemattomien toimijoiden kirjeiden vastaanottajia tai lähettäjiä pääsee tarkastelemaan klikkaamalla                 Tuntematon-otsaketta ja seuraavalla instanssisivulla URL-linkkiä, joka näyttää kirjeenvaihdon tiedot linkitettynä avoimena datana.'
        },
        maxScore: {
          label: 'Text search score',
          description: ''
        },
        role: {
          label: 'Toimijan rooli',
          description: `Lähdedatasta saadut toimijat on jaettu kirjeiden lähettäjiin ja vastaanottajiin sekä arkistonmuodostajiin. Lisäksi joistakin dataseteistä on                haettu koneellisesti kirjeiden sisällöissä mainittuja toimijoita. Jos olet kiinnostunut pelkästään kirjemetadatasta, jätä sisällöissä mainitut toimijat                 hausta pois. Yhdellä toimijalla voi olla useita rooleja.`
        },
        birthDateTimespan: {
          label: 'Syntymäaika',
          description: `Henkilötoimijoiden syntymäaika; tieto on pääosin saatu ulkoisista tietolähteistä mutta osassa aineistoa lähdedatasta.`
        },
        birthPlace: {
          label: 'Syntymäpaikka',
          description: `Henkilötoimijoiden syntymäpaikka; tieto on pääosin saatu ulkoisista tietolähteistä mutta osassa aineistoa lähdedatasta. Yläviitteet kertovat,               mistä tietolähteistä tieto on saatu.`
        },
        floruitTimespan: {
          label: 'Kirjeenvaihdon aika',
          description: `
          Toimijan kirjeenvaihdon alkamis- ja loppumisvuodet (floruit; lyhennys fl.)
          `
        },
        floruit: {
          label: 'Kirjeenvaihdon aika',
          description: `
          Toimijan kirjeenvaihdon alkamis- ja loppumisvuodet (floruit; lyhennys fl.)
          `
        },
        deathDateTimespan: {
          label: 'Kuolinaika',
          description: `Henkilötoimijoiden kuolinaika; tieto on pääosin saatu ulkoisista tietolähteistä mutta osassa aineistoa lähdedatasta.`
        },
        deathPlace: {
          label: 'Kuolinpaikka',
          description: `Henkilötoimijoiden kuolinpaikka. Tieto on saatu ulkoisista tietolähteistä. Yläviitteet kertovat, mistä tietolähteistä tieto on saatu.`
        },
        altLabel: {
          label: 'Nimen vaihtoehtoiset muodot',
          description: `Lähdedatassa ja ulkopuolisissa tietolähteissä esiintyvät nimivariantit. Yläviite kertoo, mistä lähteestä tieto on saatu.`
        },
        description: {
          label: 'Kuvaus',
          description: `Tiedot saatu aineistossa mukana olevien digitaalisten editioiden kommenteista. Kuvauksien kieli vaihtelee.`
        },
        occupation: {
          label: 'Ammatti',
          description: `Ammattitieto on saatavilla ainoastaan toimijoista, joista on tietoa ulkopuolisissa tietolähteissä (Wikidata, Biografiasampo, Akatemiasampo jne              .). Yhdellä toimijalla voi olla useita ammatteja. Huomaa kuitenkin, että visualisointi kuvaa koko aineiston ammattivarantoa ja ammattien esiintymistä                   yhdessä, ei ammattiin liittyvien toimijoiden määrää.`
        },
        external: {
          label: 'Ulkoinen datalähde',
          description: `
            Ulkoinen tietolähde, jonka avulla datasetin toimijatietoja on rikastettu. Ei tietoa -ryhmä sisältää kaikki toimijat, joista ei löydy tietoa ulkoisista                  datalähteistä.
          `
        },
        relative: {
          label: 'Sukulaiset',
          description: `Tiedot haettu ulkopuolisista tietolähteistä ja koskevat ainoastaan datasetissä mukana olevia sukulaisia.`
        },
        acquaintance: {
          label: 'Muut henkilösuhteet',
          description: `Perustuu henkilötietoja sisältävään linkitettyyn avoimeen dataan (Biografiasampo, Akatemiasampo jne.) Tiedot koskevat ainoastaan datasetissä                mukana olevia henkilöitä.`
        },
        rel: {
          label: 'Related actors',
          description: `
            Related actors, e.g. parents, spouses, acquaintances.
          `
        },
        similar: {
          label: 'Toimijoita joilla samankaltainen nimi',
          description: `
            Lista toimijoista, joilla on samankaltainen nimi, mutta joita ei ole automaattisesti yhdistetty yhdeksi tai useammaksi toimijaksi.
          `
        },
        metrics: {
          label: 'Verkostotunnusluvut',
          description: `
            Toimijan keskeisyysaste kirjeverkostossa. Kukin rivi vastaa yhtä keskeisyysmittaria ja näyttää toimijan keskeisyysasteen sekä suluissa tämän sijoittumisen          kokonaisverkostossa (# = niiden toimijoiden määrä, joilla on korkeampi keskeisyysaste).
          `
        },
        numLetters: {
          label: 'Kirjeiden kokonaismäärä',
          description: `
          Lähetettyjen ja vastaanotettujen kirjeiden kokonaismäärä
          `
        },
        numCorrespondences: {
          label: 'Kirjeenvaihtokontaktien määrä',
          description: `
         Kuinka monen toimijan kanssa kyseinen toimija on ollut yhteydessä
          `
        },
        tie: {
          label: 'Kirjeenvaihdot',
          description: `
            Suluissa oleva luku kertoo henkilöiden tai organisaatioiden välillä vaihdettujen kirjeiden kokonaismäärän.
          `
        },
        numSent: {
          label: 'Lähetettyjen kirjeiden määrä',
          description: ``
        },
        sentletter: {
          label: 'Lähetetyt kirjeet',
          description: ` `
        },
        digital_edition: {
          label: 'Digitaalinen editio',
          description: `
            Hae aineistossa mukana olevissa digitaalissa editioissa mainittuja toimijoita
          `
        },
        numReceived: {
          label: 'Saapuneiden kirjeiden määrä',
          description: ``
        },
        receivedletter: {
          label: 'Saapuneet kirjeet',
          description: ``
        },
        mentioningletter: {
          label: 'Mainittu kirjeissä',
          description: `
          Luettelo kirjeistä, joissa toimija mainitaan. Koskee ainoastaan datasetissä mukana olevissa digitaalisissa editioissa julkaistuja kirjeitä.
          `
        },
        data_provider: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `
            Organisaatio, jonka kokoelmissa toimijan kirjeenvaihtoa on.
          `
        },
        data_provider_facet: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `
            Rajaa hakua tietyn arkiston, kirjaston tai museon kokoelmiin. 
          `
          
          
        },
        in_fonds: {
          label: 'Arkistot ja kokoelmat',
          description: `
            Kirjekokoelmat ja arkistokokonaisuudet, joissa toimijan kirjeenvaihtoa on. Organisaation nimi ja kirjeiden kokonaismäärä (lähetetyt + vastaanotetut kirjeet)             on suluissa kokoelman nimen jälkeen. Kaikki kirjeet eivät välttämättä kuuluu erilliseen kirjekokoelmaan (esim. Postimuseon aineistot).
          `
        },
        created_fonds: {
          label: 'Arkistonmuodostaja',
          description: `
            Lähdedatassa mainittu kirjekokoelma / arkistokokonaisuus, jonka arkistonmuodostaja toimija on. Kaikki toimijat eivät ole arkistonmuodostajia.
          `
        },
        fonds: {
          label: 'Kokoelmat ja arkistot',
          description: `
            Luettelo datasetissä mukana olevista kirjekokoelmista. Hakasuluissa oleva luku näyttää kuhunkin kokoelmaan liittyvien toimijoiden eli vastaanottajien,                  lähettäjien ja arkistonmuodostajien määrän. 
          `
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source where this actor is mentioned.
          `
        },
        knownLocation: {
          label: 'Tunnetut paikat',
          description: `
            Toimijaan ja tämän kirjeisiin liittyviä paikkoja. Suluissa oleva luku kertoo kyseisestä paikasta lähetettyjen kirjeiden määrän.
          `
        }
      }
    },
    letters: {
      label: 'Kirjeet',
      facetResultsType: 'letters',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      
      Tämä perspektiivi tarjoaa yleisnäkymän portaalissa mukana olevien kulttuuriperintöorganisaatioiden kokoelmiin kuuluviin kirjeaineistoihin ja kirjeiden tai kirjeenvaihtojen määriin. Jos olet kiinnostunut jostain yksittäisestä toimijasta, on suositeltavaa aloittaa Henkilöt ja organisaatiot -perspektiivistä.           <br>

        Kirjeet-perspektiivi saattaa joskus toimia hitaasti, erityisesti jos avaat yhtä aikaa useamman fasetin hakuja varten. Jos saat viestin “Error. One of the backend services is currently unavailable. Please try again later”, jätä haku auki ja lataa/päivitä sivu uudelleen.<br>
        
        Voit selata metatietoja käyttäen vasemmalla (mobiiliversiossa tulosten yllä) olevia suodattimia tai fasetteja. Kun valitset esimerkiksi lähettäjät- tai vastaanottajat-fasetin, saat listauksen aineistoista suuruusjärjestyksessä. Voit myös rajata hakua eri organisaatioiden kokoelmiin tai erilaisten ominaisuuksien, kuten kirjeen kirjoittajan tai lähettäjän sukupuolen tai kirjeiden kielen, perusteella. Huomaa, että vain pienessä osassa aineistoa on tietoja esimerkiksi kirjeiden kielestä tai kirjoittamispaikasta.<br>
        
        Suuri osa tiedoista on tuotettu laskennallisesti. Mukana saattaa olla virheellisiä tai toistuvia tietueita, jotka johtuvat joko lähdedatasta tai prosessoinnissa tapahtuneista virheistä.<br>
           </p>
           
           <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Ohjeet <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub"             >instructions</a> filttereiden käyttämiseen.
          </p>
          
          Tuloksia voit visualisoida seuraavilla välilehdillä:
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TAULUKKO</STRONG>-välilehti näyttää tulokset listana .
      </li>
      <li>
        <strong>AIKAJANA</strong> visualisoi kirjeiden vuosittaista määrää viivakaaviona. Oikeassa yläkulmassa olevilla zoomaus-työkaluilla pystyt tarkastelemaan               tarkempia ajanjaksoja kaaviolla.
      </li>
      <li>
        <strong>KARTTA</strong> visualisoi kirjeiden kirjoittamis- tai vastaanottopaikkoja. 
      </li>
      <li>
        <strong>LÄMPÖKARTTA</strong> visualisoi kirjoittamis- ja vastaanottopaikkoja lämpökarttana (mitä punaisempi väri, sen enemmän kirjeitä).
      </li>
      <li>
        <strong>LAAJIMMAT KIRJEENVAIHDOT> näyttää 20 suurinta aineistokokonaisuutta aikajanalla. Huomaa, että pääosassa kirjeenvaihdoista on vain alkamis- ja                   loppumisvuodet (esimerkiksi 1860-1895). Näissä tapauksissa kyseisen kirjeenvaihdon kirjeet on jaettu tasaisesti kyseiselle aikavälille. 
      </li>
      <li>
        <strong>CSV</strong>-välilehdeltä voit ladata tuloksia taulukkomuodossa omalle koneellesi.
      </li>
      <li>
       <strong>SPARQL-KYSELY</strong> -välilehdeltä voit seurata linkkiä Yasgui-palveluun, ja voit nähdä kyselyn, jolla tulokset haetaan tietokannasta.
      </li>
      <li>
        <strong>JAA</strong>-välilehdeltä löydät pysyvän linkin tekemääsi hakuun. Voit käyttää sitä haun myöhempään löytämiseen ja aineistoon viittaamiseen.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Kirje',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
       Tuloksia voit tarkastella seuraavilla välilehdillä:
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</strong>-välilehti näyttää tulokset listana.
        </li>
        <li>
        <strong>LÄHDEDATA</strong>-välilehden avulla pääset tarkastelemaan alkuperäistä tietuetta ja siitä käsiteltyjä tietokenttiä. Täältä             löydät myös linkin mahdollisiin ulkopuolisiin tietolähteisiin. 
        </li>
        <li>
        On the <strong>DIGITAALINEN EDITIO</strong>-välilehdeltä voit siirtyä katsomaan kirjettä datan alkuperäisen tuottajan sivustolla. Huom.         välilehti toimii vain aineistoille, jotka on julkaistu omina verkkosivustoinaan. 
        </li>
        <li>
        <strong>EXPORT</strong>-välilehdeltä voit siirtyä tarkastelemaan Taulukko-välilehden tietokantakyselyä Yasgui-palvelussa ja tutkimaan           kirjeen digitaalista aineistoa Saha-editorissa.
      </li>
        </ul>
        `
        },
     externalSite: {
        loadingFailed: 'Embedding the content failed',
        openInNewTab: 'Open original source directly in a new tab',
        notAvailable: 'No external data source available'
      },
      csvDisclaimer: 'The exported results for the CSV file are <strong>limited to the first 50,000 rows returned by the endpoint</strong>. If your current selections in the perspective lead to more than 50,000 instances in the results (current number of results is shown at the top of the left-hand side menu), some data will be missing in the exported CSV file. The encoding of the results in the CSV file is UTF-8.',
      properties: {
        uri: {
          label: 'URI',
          description: `Kirjeen tiedot linkitettynä avoimena datana
          `
        },
        
        prefLabel: {
          label: 'Nimeke',
          description: `Yksittäisen kirjeen nimeke
          `
          
        },
        language_facet: {
          label: 'Kieli',
          description: `
            Lähdedatassa mainittu kirjeen kirjoittamiskieli. Tieto on saatavilla noin 34% aineistosta (Åbo Akademin kirjaston kirjeet on                    merkitty ruotsinkielisiksi, jos muuta tietoa ei ole ollut saatavilla).
          `
        },
        language: {
          label: 'Kieli',
          description: `
            Lähdedatassa mainittu kirjeen kirjoittamiskieli.
          `
        },
        subject: {
          label: 'Aihe',
          description: ``
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        description: {
          label: 'Kuvaus',
          description: `
          Kirjeen sisällön kuvaus
          `
        },
        comment: {
          label: 'Kommentti',
          description: `
          Lähdedatassa oleva kommentti.
          `
        },
        productionTimespan: {
          label: 'Aika',
          description: `
            Kirjeen kirjoittamisaika tai kirjeenvaihdon alku- ja loppuvuosi. Aikarajaus 1840-1870 antaa kaikki kirjeenvaihdot, jotka osuvat             kyseisille vuosikymmenille (myös esimerkiksi 1784-1840 ja 1870-1893).

          `
        },
        productionDate: {
          label: 'Aika',
          description: `
            Kirjeenvaihdon alku- ja loppuvuosi tai yksittäisen kirjeen ajoitus.
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        data_provider_facet: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `Rajaa hakua tietyn arkiston, kirjaston tai museon kokoelmiin. Ilman rajausta voit selailla koko aineistoa, mutta haku               saattaa olla hitaampi. 
          `
        },
        data_provider: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `
            Organisaatio, jonka kokoelmiin kirje kuuluu
          `
        },
        digital_edition_facet: {
          label: 'Digitaalinen editio',
          description: `
            Hae kirjeitä, jotka on julkaistu jossakin portaalin aineistossa mukana olevassa digitaalisessa editiossa. 
          `
        },
        digital_edition: {
          label: 'Digitaalinen editio',
          description: `
            Digitaalinen editio, jossa kirje on julkaistu
          `
        },
        original_record: {
          label: 'Alkuperäinen tietue',
          description: ``
        },
        fonds_facet: {
          label: 'Kokoelmat ja arkistot',
          description: `
            Rajaa hakua tiettyihin kirjekokoelmiin, henkilöarkistoihin ja yhteisöarkistoihin. 
          `
        },
        fonds: {
          label: 'Kokoelma tai arkisto',
          description: `
            Kirjekokoelma tai arkistokokonaisuus, johon kirje kuuluu
          `
        },
        series: {
          label: 'Sarja',
          description: ``
        },
        source_facet: {
          label: 'Lähettäjä',
          description: `
          Hae kirjeen lähettäjän nimen perusteella.
          `
        },
        source: {
          label: 'Lähettäjä',
          description: `
          Kirjeen lähettäjän nimi ja syntymä- ja kuolinvuosi, mikäli ne ovat saatavilla. Nimi voi olla samassa muodossa kuin lähdedatassa tai              se on voitu hakea muista tietolähteistä.
          `
        },
        source_type: {
          label: 'Lähettäjä: tyyppi',
          description: `
          
        Lähettäjät on jaettu neljään tyyppiin, jotka voivat olla osittain päällekkäisiä.
        Henkilö: lähettäjä on yksi tai useampi henkilö, jolle on lähdedatassa annettu koko nimi tai vain etu- tai sukunimi tai nimikirjaimet.
        Organisaatio: lähettäjänä on organisaatio, järjestö, seura, yhtiö, lehti tai muu ryhmittymä tai yhteenliittymä.
        Tuntematon: toimija jota ei ole tunnistettu lainkaan (lähdedatassa usein “tuntematon”, “tunnistamaton”, “okänd” jne. tai lähettäjä on           puuttunut lähdedatasta). Tuntemattomat lähettäjät ovat pääsääntöisesti henkilöitä. Mikäli useiden lähettäjien ryhmässä on mukana yksi          tuntematon, listautuu myös ryhmä tuntemattomiin.
        Perhe: lähdedatassa lähettäjälle on annettu perhesuhteisiin viittaava attribuutti (”perheineen”; omaiset; lapset; vanhemmat).
          `
        },
        source_gender: {
          label: 'Lähettäjä: Sukupuoli',
          description: `
          Toimijoiden sukupuoli on tunnistettu koneellisesti ja jaottelussa on edelleen virheitä. 

        Mies: etunimen perusteella mieheksi tunnistetut henkilöt. Jos etunimestä on tiedossa vain kirjain tai kirjaimet, henkilö on laskettu            mieheksi. Tämä perustuu käsin läpikäytyyn otokseen. 

        Nainen: etunimen perusteella naiseksi tunnistetut henkilöt. 
        Tuntematon: toimija jonka sukupuolta ei ole tunnistettu lainkaan (pelkkä sukunimi; etunimi harvinainen; lähtödatassa “tuntematon”,              “tunnistamaton”, “okänd” jne.) 
        Nainen & mies: usein avioparien tai sisaruksien lähettämiä kirjeitä.
        Ei käytössä: perhe, suku, organisaatio, järjestö, seura, yhtiö, lehti tai muu ryhmittymä tai yhteenliittymä.

          `
        },
        target_facet: {
          label: 'Vastaanottaja',
          description: `
          Hae kirjeen vastaanottajan nimen perusteella. 
          `
        },
        target: {
          label: 'Vastaanottaja',
          description: `
             Kirjeen vastaanottajan nimi ja syntymä- ja kuolinvuosi, mikäli ne ovat saatavilla. Nimi voi olla samassa muodossa kuin lähdedatassa             tai se on voitu hakea muista tietolähteistä.
          `
        },
        target_type: {
          label: 'Vastaanottaja: tyyppi',
          description: `
          Vastaanottajat on jaettu neljään tyyppiin, jotka voivat olla osittain päällekkäisiä .

        Henkilö: vastaanottaja on yksi tai useampi henkilö, jolle on lähdedatassa annettu koko nimi tai vain etu- tai sukunimi tai nimikirjaimet             .
        Organisaatio: vastaanottajana on organisaatio, järjestö, seura, yhtiö, lehti tai muu ryhmittymä tai yhteenliittymä.
        Tuntematon: toimija jota ei ole tunnistettu lainkaan (lähdedatassa usein “tuntematon”, “tunnistamaton”, “okänd” jne.). Tuntemattomat            vastaanottajat ovat pääsääntöisesti henkilöitä.  Mikäli useiden vastaanottajien ryhmässä on mukana yksi tuntematon, listautuu myös ryhmä         tuntemattomiin.
        Perhe: lähdedatassa vastaanottajalle on annettu perhesuhteisiin viittaava attribuutti (suku; perhe; vanhemmat; “kotimiehet & lapset”).
          `
        },
        target_gender: {
          label: 'Vastaanottaja: sukupuoli',
          description: `
          Toimijoiden sukupuoli on tunnistettu koneellisesti ja jaottelussa on edelleen virheitä. 

        Mies: etunimen perusteella mieheksi tunnistetut henkilöt. Jos etunimestä on tiedossa vain kirjain tai kirjaimet, henkilö on laskettu            mieheksi. Tämä perustuu käsin läpikäytyyn otokseen. 
        Nainen: etunimen perusteella naiseksi tunnistetut henkilöt. 
            Tuntematon: toimija jonka sukupuolta ei ole tunnistettu lainkaan (pelkkä sukunimi; etunimi harvinainen; lähtödatassa “tuntematon”,          “tunnistamaton”, “okänd” jne.) 
            Nainen & mies: usein avioparien tai sisaruksien lähettämiä kirjeitä.
            Ei käytössä: perhe, suku, organisaatio, järjestö, seura, yhtiö, lehti tai muu ryhmittymä tai yhteenliittymä.
          `
        },
        mentioned_person: {
          label: 'Mainitut toimijat',
          description: `
          Kirjeessä mainitut (automaattisesti tunnistetut) toimijat
          `
        },
        mentioned_place: {
          label: 'Mainitut paikat',
          description: `
          Kirjeessä mainitut (automaattisesti tunnistetut) paikat
          `
        },
        tie: {
          label: 'Kirjeenvaihto',
          description: `
          Kirjeenvaihto johon yksittäinen kirje kuuluu.
          `
        },
        from: {
          label: 'Lähettämispaikka',
          description: `
          Kirjeeseen merkitty paikka. Tieto on vain noin 2 %:ssa koko aineistosta.
          `
        },
        to: {
          label: 'Vastaanottopaikka',
          description: `
          Lähdedataan merkitty vastaanottopaikka. Tieto on saatavilla vain noin 0.07% koko aineistosta.
          `
        },
        lettertype: {
          label: 'Kirjeen tyyppi',
          description: `
          Luettelo perustuu kirjetyyppiontologiaan, joka on laadittu lähdedataan merkittyjen kirjetyyppien perusteella. 
          `
        },
        record_value: {
          label: 'Tietueesta käsitellyt tiedot',
          description: ``
        },
        created_letter: {
          label: 'Liittyvät kirjeet',
          description: `
            Kaikki samassa metadatatietueessa mainitut kirjeet 
          `
        },
        metadata: {
          label: 'URI',
          description: 'Kirjeen tiedot linkitettynä avoimena datana'
        },
        external: {
          label: 'Ulkoinen linkki',
          description: `
            Linkki digitaalisessa editiossa julkaistuun kirjeeseen  
          `
        },
        source_url: {
          label: 'Ulkoinen datalähde',
          description: ` `
        }
      }
    },
    fonds: {
      label: 'Kokoelmat ja arkistot',
      facetResultsType: 'fonds',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      
      Tämä näkymän avulla voit tarkastella portaalin aineistoa organisaation sekä arkistokokonaisuuksien ja kokoelmien mukaan. Voit myös                tutustua arkistonmuodostajiin ja esimerkiksi heidän sukupuolijakautumaansa koko aineistossa ja organisaatiokohtaisesti.<br>
        
        Voit selata metatietoja käyttäen vasemmalla (mobiiliversiossa tulosten yllä) olevia suodattimia tai fasetteja.<br>
        
        Suuri osa tiedoista on tuotettu laskennallisesti. Mukana saattaa olla virheellisiä tai toistuvia tietueita, jotka johtuvat joko                 lähdedatasta tai prosessoinnissa tapahtuneista virheistä.<br>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Ohjeet <a target="_" href="https://docs.google.com/document/d/e/2PACX                                                   -1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> filttereiden käyttämiseen.
          </p>
      
        Tuloksia voit visualisoida seuraavilla välilehdillä: 
      </p>
      <ul class="MuiTypography-root MuiTypography-body1">
      <li>
       <strong>TAULUKKO</STRONG>-välilehti listaa portaalin aineiston kaikki arkistokokonaisuudet ja kokoelmat. Taulukon yksi rivi sisältää             yhteen kokoelmaan liittyvät tiedot. Arkiston / kokoelman nimen valitseminen vie kyseisen kokoelman yksityiskohtaisemmalle                       instanssisivulle. 
      </li>
      <li>
        <strong>AIKAJANA</strong>visualisoi kirjekokoelmiin kuuluvien kirjeiden vuosittaista määrää viivakaaviona. Oikeassa yläkulmassa olevilla         zoomaus-työkaluilla pystyt tarkastelemaan tarkempia ajanjaksoja kaaviolla. 
      </li>
      <li>
        <strong>KARTTA</strong>visualisoi toimijoihin liittyviä tunnettuja paikkoja (syntymä- ja kuolinpaikat, kirjeiden lähettämis- ja                     vastaanottopaikat). Mikäli paikalla ei ole tarkkoja maantieteellisiä koordinaatteja, näytetään se osana seuraavaa suurempaa yksikköä             . Klikkaamalla paikkojen merkkejä aukeaa lista paikkaan liittyvistä henkilöistä selityksineen.
      </li>
      <li>
        <strong>CSV</strong>-välilehdeltä voit ladata tuloksia taulukkomuodossa omalle koneellesi.
      </li>
      <li>
       <strong>SPARQL</strong>-välilehdeltä voit seurata linkkiä Yasgui-palveluun, ja voit nähdä kyselyn, jolla tulokset haetaan tietokannasta.
      </li>
      <li>
        <strong>JAA</strong>-välilehdeltä löydät pysyvän linkin tekemääsi hakuun. Voit käyttää sitä haun myöhempään löytämiseen ja aineistoon           viittaamiseen.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Kokoelmat ja arkistot',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Tuloksia voit tarkastella seuraavilla välilehdillä:
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</strong>-välilehti näyttää tulokset listana.
            </li>
            <li>
              <strong>EXPORT</strong>-välilehdeltä voit siirtyä tarkastelemaan Taulukko-välilehden tietokantakyselyä Yasgui-palvelussa ja                   tutkimaan digitaalista aineistoa Saha-editorissa.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Tiedot linkitettynä avoimena datana'
        },
        prefLabel: {
          label: 'Kokoelma',
          description: 'Kokoelman nimeke'
        },
        data_provider_facet: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `
            Rajaa hakua tietyn arkiston, kirjaston tai museon kokoelmiin. Lukumäärä hakasulkeissa kertoo organisaation arkistokokonaisuuksien ja             kirjekokoelmien määrän datasetissä. 
          `
          
        },
        data_provider: {
          label: 'Kulttuuriperintöorganisaatio',
          description: `
            Organisaatio, jonka kokoelmissa aineisto on
          `
          
        },
        description: {
          label: 'Kuvaus',
          description: `
          Sisällönkuvaus.
          `
        },
        comment: {
          label: 'Kommentti',
          description: `
          Digitaaliseen editioon sisältyvään aineistoon liittyvä kommentti.
          `
        },
        fonds: {
          label: 'Kokoelmat ja arkistot',
          description: `
            Aineistossa mukana olevat kirjekokoelmat
          `
        },
        archival_organization: {
          label: 'Archival organization',
          description: `
            Archival organization
          `
        },
        digital_edition: {
          label: 'Digitaalinen editio',
          description: `
            Digitaalisiin editioihin sisältyvät kirjekokoelmat (kun tieto on saatavilla).
          `
        },
        fondsLabel: {
          label: 'Fonds',
          description: `
            Fonds
          `
        },
        number_of_letters: {
          label: 'Kirjeiden lukumäärä',
          description: ``
        },
        creator: {
          label: 'Arkistonmuodostaja',
          description: `
            Luettelo lähdedatassa mainituista arkistonmuodostajista. Suluissa oleva numero kertoo kuinka monessa arkistokokonaisuudessa /               kokoelmassa kyseinen toimija on arkistonmuodostajana. 
          `
        },
        creator_type: {
          label: 'Records creator, type',
          description: `
            Type of the records creator.
          `
        },
        creator_gender: {
          label: 'Arkistonmuodostajan sukupuoli',
          description: `
            Toimijoiden sukupuoli on tunnistettu koneellisesti ja jaottelussa on edelleen virheitä. 

            Mies: etunimen perusteella mieheksi tunnistetut henkilöt. Jos etunimestä on tiedossa vain kirjain tai kirjaimet, henkilö on laskettu             mieheksi. Tämä perustuu käsin läpikäytyyn otokseen. 
            Nainen: etunimen perusteella naiseksi tunnistetut henkilöt. 
            Tuntematon: toimija jonka sukupuolta ei ole tunnistettu lainkaan (pelkkä sukunimi; etunimi harvinainen; lähtödatassa “tuntematon”,              “tunnistamaton”, “okänd” jne.) 
            Nainen & mies: usein avioparien tai sisaruksien lähettämiä kirjeitä.
            Ei käytössä: organisaatio, järjestö, seura, yhtiö, lehti tai muu ryhmittymä tai yhteenliittymä.
          `
        },
        creator_occupation: {
          label: 'Arkistonmuodostajan ammatti',
          description: `
             Ammattitieto on saatavilla ainoastaan toimijoista, joista on tietoa ulkopuolisissa tietolähteissä. 
          `
        },
        creator_external: {
          label: 'Arkistonmuodostajat ulkoisissa datalähteissä',
          description: `
            Ulkoinen tietolähde, jonka avulla datasetin toimijatietoja on rikastettu. Ei tietoa -ryhmä sisältää kaikki toimijat, joista ei löydy         tietoa ulkoisista datalähteistä.
          `
        },
        related: {
          label: 'Ulkoiset linkit',
          description:  ``
        },
        sender: {
          label: 'Lähettäjät',
          description: `
          Arkistokokonaisuudessa / kokoelmassa esiintyvät kirjeiden lähettäjät. Suluissa oleva luku kertoo kyseiseltä toimijalta saapuneiden                kirjeiden kokonaismäärän.
          `
        },
        recipient: {
          label: 'Vastaanottajat',
          description: `
          Arkistokokonaisuudessa / kokoelmassa esiintyvät kirjeiden vastaanottajat. Suluissa oleva luku kertoo kyseisen toimijan vastaanottamien             kirjeiden kokonaismäärän
          `
        },
        letter: {
          label: 'Kirjeet',
          description: `
          Arkistokokonaisuudessa / kokoelmassa olevat kirjeet. Klikkaamalla kirjeen otsikkoa pääset Kirje-instanssisivulle.
          `
        }
      }
    },
    contributors: {
      label: 'Yhteistyökumppanit',
      facetResultsType: 'contributors',
      shortDescription: '',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tästä näkymästä löydät kootusti tietoa kirjeaineistojen kuvailutietoja luovuttaneista organisaatioista.<br>         
      
      Datasetin kuvaus -dokumenteista löytyy kunkin organisaation itsensä laatima kuvaus organisaation kokoelmaprofiilista ja                            arkistokokonaisuuksista / kirjekokoelmista. Lisäksi mukana on Aalto-yliopiston ja Helsingin yliopiston tutkijoiden tuottamaa tietoa             siitä, missä muodoissa aineistoa saatiin ja miten sitä käsiteltiin ja muokattiin linkitetyksi avoimeksi dataksi.
      </p>
      `,
      properties: {
        uri: {
          label: 'URI',
          description: 'Tiedot linkitettynä avoimena datana'
        },
        prefLabel: {
          label: 'Yhteistyökumppani',
          description: 'Organisaation tai muun toimijan nimi'
        },
        datasource: {
          label: 'Data source',
          description: `
            The data source of the letter.
          `
        },
        dataset_description: {
          label: 'Datasetin kuvaus',
          description: `
          Tietoa organisaation kirjekokoelmista ja aineiston käsittelystä.
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
          description: ``
        },
        letter: {
          label: 'Letters',
          description: `
          Letters in this fonds.
          `
        },
        location: {
          label: 'Kotipaikka',
          description: ``
        },
        external: {
          label: 'Nettisivu',
          description: ``
        }
      }
    },
    places: {
      label: 'Paikat',
      facetResultsType: 'Places',
      shortDescription: '',
      longDescription: `
      
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tämä näkymän avulla voit tarkastella aineistossa esiintyviä paikkatietoja. Tiedot perustuvat paikkaontologiaan, joka sisältää esimerkiksi         maita, maakuntia, läänejä, kaupunkeja, kaupunginosia ja kyliä, mutta myös rakennuksia, kuten kirkkoja, sairaaloita ja kouluja.<br>
      
      Aineisto (otsikot, koordinaatit, maantieteellinen hierarkia) perustuu ulkopuolisiin tietolähteisiin kuten Wikidataan ja YSO:hon.<br> 
      
      Huomaa, että aineisto koskee vain pientä osaa Kirjesampon kokonaisaineistosta ja sisältää kirjeiden lähettämis- ja joissain harvoissa             tapauksissa vastaanottamispaikkoja sekä digitaalisten editioiden osalta kirjeissä mainittuja paikkoja. Aineistossa on lisäksi paikkoja,         joita vaaditaan maantieteellisen hierarkian rakentumiseen.<br>
      
      Suuri osa tiedoista on tuotettu laskennallisesti. Mukana saattaa olla virheellisiä tai toistuvia tietueita, jotka johtuvat joko                   lähdedatasta tai prosessoinnissa tapahtuneista virheistä.<br>
      
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Ohjeet <a target="_" href="https://docs.google.com/document/d/e/2PACX                                                   -1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> filttereiden käyttämiseen.
          </p>
      
        Tuloksia voit visualisoida seuraavilla välilehdillä: 
      
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TAULUKKP</STRONG>-välilehti listaa aineiston kaikki paikat. Taulukon yksi rivi sisältää yhteen paikkaan liittyvät                           maantieteelliset tiedot sekä tiedon paikassa tapahtuneiden “kirjeenvaihtotapahtumien” kokonaismäärästä (lähetettyjen kirjeiden määrä             ja kyseisen paikan maininnat kirjeissä). Paikan valitseminen vie kyseisen paikan yksityiskohtaisemmalle instanssisivulle.
      </li>
     <li>
        <strong>CSV</strong>-välilehdeltä voit ladata tuloksia taulukkomuodossa omalle koneellesi.
      </li>
      <li>
       <strong>SPARQL</strong>-välilehdeltä voit seurata linkkiä Yasgui-palveluun ja nähdä kyselyn, jolla tulokset haetaan tietokannasta.
      </li>
      <li>
        <strong>JAA</strong>-välilehdeltä löydät pysyvän linkin tekemääsi hakuun. Voit käyttää sitä haun myöhempään löytämiseen ja aineistoon viittaamiseen.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Paikka',
        description: `
        <ul class="MuiTypography-root MuiTypography-body1">
        Tuloksia voit tarkastella seuraavilla välilehdillä:
          <li>
            <strong>TAULUKKO</STRONG>-välilehdellä on yksityiskohtaista tietoa kustakin aineistossa esiintyvästä paikasta.
          </li>
          <li>
            <strong>KIRJEET JA TOIMIJAT</strong>-välilehti listaa muun muassa toimijat, jotka ovat lähettäneet kirjeen tietystä paikasta tai                maininneet paikan kirjeessä. 
          </li>
          <li>
            <strong>AIKAJANA</strong>visualisoi kyseiseen paikkaan liittyviä tapahtumia (kirjeen lähettäminen, maininta) viivakaaviona. Oikeassa                      yläkulmassa olevilla zoomaus-työkaluilla pystyt tarkastelemaan tarkempia ajanjaksoja kaaviolla. 
          </li>
          <li>
            <strong>EXPORT</strong>-välilehdeltä voit siirtyä tarkastelemaan Taulukko-välilehden tietokantakyselyä Yasgui-palvelussa ja                     tutkimaan paikkoihin liittyvää digitaalista aineistoa Saha-editorissa. 
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Tiedot linkitettynä avoimena datana'
        },
        prefLabel: {
          label: 'Nimi',
          description: `
            Paikan nimi.
          `
        },
        country: {
          label: 'Maa',
          description: `
            Maa johon paikka liittyy
          `
        },
        location: {
          label: 'Koordinaatit',
          description: `
            Leveys- ja pituusasteet
          `
        },
        broader: {
          label: 'Liittyy paikkaan',
          description: `
          Kaupunginosa, maakunta tai muu laajempi maantieteellinen yksikkö
          `
        },
        narrower: {
          label: 'Sisältää paikat',
          description: `
            Tiettyyn paikkaan liittyvät pienemmät maantieteelliset yksiköt. Suluissa oleva numero kertoo tapahtumien määrän. 
          `
        },
        place: {
          label: 'Paikka',
          description: `
            Tapahtumaan liittyvä paikka.
          `
        },
        altLabel: {
          label: 'Vaihtoehtoiset nimet',
          description: `Aineistossa esiintyvät muut nimimuodot`
        },
        external: {
          label: 'Ulkoiset linkit',
          description: ``
        },
        related: {
          label: 'Liittyvät toimijat',
          description: `
          Henkilöt tai organisaatiot, jotka ovat lähettäneet kirjeen kyseisestä paikasta
          `
        },
        number_of_events: {
          label: 'Tapahtumien määrä',
          description: `
          Lähetetyt kirjeet ja maininnat; ks. myös KIRJEET JA TOIMIJAT -instanssisivu
          `
        },
        born: {
          label: 'Syntymäpaikka',
          description: `
          Henkilöt, jotka syntyneet kyseisessä paikassa. Huomaa, että tieto on vain datasettiin liittyvistä henkilöistä, jotka löytyvät                     ulkopuolisista tietolähteistä.
          `
        },
        deceased: {
          label: 'Kuolinpaikka',
          description: `
          Henkilöt, jotka kuolleet kyseisessä paikassa. Huomaa, että tieto on vain datasettiin liittyvistä henkilöistä, jotka löytyvät                      ulkopuolisista tietolähteistä.
          `
        },
        type: {
          label: 'Place type',
          description: `
            The type of the specific place(s) associated with the event.
          `
        },
        from: {
          label: 'Lähetetyt kirjeet',
          description: `
         Kyseisestä paikasta lähetetyt kirjeet
          `
        },
        to: {
          label: 'Saapuneet kirjeet',
          description: `
          Kirjeen vastaanottopaikka
          `
        },
        mentioningletter: {
          label: 'Mainittu kirjeessä',
          description: `
            Luettelo kirjeistä, joissa paikka mainitaan
          `
        },
        image: {
          label: 'Kuva',
          description: `
            Lähde: Wikimedia Commons.
          `
        },
        source: {
          label: 'Lähde',
          description: `
            Tietokanta (Schoenberg, Bibale ja Bodleian) josta saadaan tapahtumaan liittyvää tietoa.
          `
        }
      }
    },
    ties: {
      instancePage: {
        label: 'Kirjeenvaihto',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Tuloksia voit tarkastella seuraavilla välilehdillä:
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</STRONG>-välilehti antaa yksityiskohtaista tietoa kahden toimijan välisestä kirjeenvaihdosta.
            </li>
            <li>
              <strong>AIKAJANA</strong>visualisoi kirjoittajien välisen kirjeenvaihdon vuosittaista määrää viivakaaviona. Oikeassa yläkulmassa                  olevilla zoomaus-työkaluilla pystyt tarkastelemaan tarkempia ajanjaksoja kaaviolla.
            </li>
            <li>
              <strong>KIRJEIDEN VERKOSTO</strong> visualisoi tarkastelun kohteena olevaa kirjeenvaihtoa ja siihen liittyviä muita                           kirjeenvaihtoja verkostona. 
            </li>
            <li>
              <strong>EXPORT</strong>-välilehdeltä voit siirtyä tarkastelemaan Taulukko-välilehden tietokantakyselyä Yasgui-palvelussa ja                   tutkimaan kirjeenvaihtojen digitaalista aineistoa Saha-editorissa. 
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        node: {
          label: 'Henkilöt tai organisaatiot',
          description: `
            Toimijoiden nimet lähdedatassa tai ulkopuolisessa tietolähteessä. Hakasuluissa oleva luku kertoo kyseisten toimijoiden välisen                kirjeenvaihdon määrän per toimija.
          `
        },
        num_letters: {
          label: 'Kirjeiden kokonaismäärän',
          description: `
            Toimijoiden välisen kirjeenvaihdon kokonaismäärä
          `
        },
        letter: {
          label: 'Kirjeet',
          description: `
            Kaikki toimijoiden väliset kirjeet 
          `
        },
        other: {
          label: 'Liittyvät toimijat',
          description: `
          Henkilöt tai organisaatiot jotka ovat olleet kirjeenvaihdossa sekä lähettäjän että vastaanottajan kanssa
          `
        }
      }
    },
    metrics: {
      instancePage: {
        label: 'Verkostotunnusluvut',
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
        num_letters: {
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
              <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
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
              <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
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
        Use this perspective to access the J. V. Snellman letter data, source <a target="_" href="https://snellman.kootutteokset.fi/">J. V. Snellman - kootut teokset</a>.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
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
        <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
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
          label: 'Keyword',
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
        nlpKeyword: {
          label: 'Keyword (automatically)',
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
          Select the type of sender: Person, Group, Family or Unidentified.
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
          Filter the recipients by their type: Person, Group, Family or Unidentified.
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
          label: 'Extracted record data',
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
        Use this perspective to access the Zacharias Topelius letter data, source <a target="_" href="https://topelius.sls.fi/fi/">Zacharias Topelius Skrifter</a>.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
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
        <strong>EXPORT</strong> view the SPARQL query used to generate the result table view into YASGUI query editor and examine the letter data in the Saha editor.
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
          Select the type of sender: Person, Group, Family or Unidentified.
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
          Filter the recipients by their type: Person, Group, Family or Unidentified.
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
          label: 'Extracted record data',
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
        Use this perspective to access the Elias Lönnrot letter data, source <a target="_" href="http://lonnrot.finlit.fi/omeka/">Elias Lönnrotin kirjeenvaihto</a>.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
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
          Select the type of sender: Person, Group, Family or Unidentified.
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
          Filter the recipients by their type: Person, Group, Family or Unidentified.
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
          label: 'Extracted record data',
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
        Use this perspective to access the Albert Edelfelt letter data, source <a target="_" href="https://edelfelt.fi/">Albert Edelfelts brev</a>.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        See <a target="_" href="https://docs.google.com/document/d/e/2PACX-1vSe9eS4HrlH3iHZtXEFVoKAzUEYiURdLwWQUad3wBprr2fGrI3P2eiH5S2gOu1XvZlCXJ_HY0b_mttW/pub">instructions</a> for using the
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
          Select the type of sender: Person, Group, Family or Unidentified.
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
          Filter the recipients by their type: Person, Group, Family or Unidentified.
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
          label: 'Extracted record data',
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
    digitaleditions: {
      label: 'Digital editions',
      facetResultsType: 'digital editions',
      shortDescription: '',
      longDescription: ``,
      instancePage: {
        label: 'Letter',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
          Page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              The <strong>TABLE</strong> view displays the results in a list.
            </li>
            <li>
              The <strong>SOURCE DATA</strong> tab allows you to view the original record and the data fields processed from it.            Here you will also find a link to any external data sources. 
            </li>
            <li>
              On the <strong>DIGITAL EDITION</strong> tab, you can view the letter on the site of the original producer of the data.         Note: this tab only works for data published on their own websites. 
            </li>
            <li>
              <strong>EXPORT</strong> view the SPARQL query used to generate the results, open the table view in the YASGUI query           editor, and examine the letter data in the Saha editor.
            </li>
          </ul>
        `
      },
      externalSite: {
        loadingFailed: 'Embedding the content failed',
        openInNewTab: 'Open original source directly in a new tab',
        notAvailable: 'No external data source available'
      },
      properties: {
        uri: {
          label: 'URI',
          description: `
            Link to the information of the letter as linked open data
          `
        },
        
        prefLabel: {
          label: 'Title',
          description: `
            The title of the individual letter
          `    
        },
        language_facet: {
          label: 'Language',
          description: `
            The writing language of the letter indicated in the source data. This information is available in about 34% of the total data (the Åbo Akademi Library collection is marked as Swedish if no other language information was available             ).
          `
        },
        language: {
          label: 'Language',
          description: `
            The writing language of the letter indicated in the source data.
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
            Comment in the source data.
          `
        },
        productionTimespan: {
          label: 'Date',
          description: `
            The date of writing the letter or the beginning and end year of the correspondence. The 1840-1870 time limit gives             all correspondence that falls in those decades (including, for example, 1784-1840 and 1870-1893).
          `
        },
        productionDate: {
          label: 'Date',
          description: `
            The start and end year of correspondence or the timing of a single letter.
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
            Organisation to which the letter belongs 
          `
        },
        digital_edition: {
          label: 'Digital Edition',
          description: `
            Digital edition of which the letter is a part 
          `
        },
        original_record: {
          label: 'Alkuperäinen tietue',
          description: ``
        },
        fonds: {
          label: 'Fonds',
          description: `
            A collection or set of records to which a letter belongs. 
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
          The name of the sender of the letter and the year of birth and death, if available. The name may be in the same                 format as in the source data or may have been retrieved from other sources.
          `
        },
        target: {
          label: 'Recipient',
          description: `
             The name of the recipient of the letter and the year of birth and death, if available. The name may be in the                same format as in the source data or may have been retrieved from other sources.
          `
        },
        mentioned_person: {
          label: 'Mentioned actors',
          description: `
          The (automatically identified) actors mentioned in the letter.
          `
        },
        mentioned_place: {
          label: 'Mentioned places',
          description: `
          The (automatically identified) places mentioned in the letter.
          `
        },
        tie: {
          label: 'Correspondence',
          description: `
          Correspondence to which a single letter belongs.
          `
        },
        from: {
          label: 'Place: Sending',
          description: `
          Place indicated on the letter. This information is only present in about 2% of the total data.
          `
        },
        to: {
          label: 'Place: Receiving',
          description: `
          The reception location indicated in the source data. This information is only present in about 0.07% of the total               data.
          `
        },
        lettertype: {
          label: 'Type of letter',
          description: `
          The list is based on the letter type ontology, which is compiled on the basis of the letter types indicated in the          source data. 
          `
        },
        record_value: {
          label: 'Extracted record data',
          description: ``
        },
        created_letter: {
          label: 'Related letters',
          description: `
            All letters mentioned in the same metadata record 
          `
        },
        metadata: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        external: {
          label: 'External link',
          description: `
            Link to the letter published in one of the digital editions 
          `
        },
        source_url: {
          label: 'External data source',
          description: ` `
        }
      }
    }
  },
  statistics: `
  <h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\">Data Overview</h1>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"><i>The data analysis on this page is based on data from <strong>2025-05-18</strong>.<br />Some numbers may differ from the portal if the data has been updated after this date.</i></p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The LetterSampo Finland contains metadata for over 1 million letters and 100000 actors. The data is collected from multiple data sources belonging to different cultural heritage organizations. Although the data is harmonized between different data sources, the completeness and accuracy of the data varies as this brief overview of the data demonstrates. The quality of the letter metadata depends on the availability of the information in the original letters or biographies, how the letters are digitized and linked data transformation.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The table below shows the number of letters and actors in each data source. The five largest data sources contribute to over 97% of the letters in the LetterSampo Finland data. Actors can have type Person, Family or Organization. Most of the actors are letter senders and receivers. Some actors have also had the role of \"Records creator\", and in the case of Albert Edelfelt Letters and J. V. Snellman Letters actors mentioned in the letters have a \"Referenced in letter content\" role which explains the relatively high number of actors compared to the number of letters.</p>

  <img src=${fig_num_letters_actors} style=\"max-width:100%\" alt=\"Number of letters and actors per data source\">

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The figure below shows the proportion of letters in each data source that have information about date, language, sending and receiving place. Almost all letters have some estimate about the time of sending but the exact sending date is rarely known. Availability to the language of the letter differs from source to source. The place of sending is known better in the smaller data sources, and the place of receiving the letter is usually not known. The sending places vary from residence of the sender to country, but is usually a village, town or city.</p>

  <img src=${fig_letter_metadata} style=\"max-width:100%\" alt=\"Available metadata fields in each data source.\">

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">The data has estimated sending years of the letters available, but the original descriptions of the sending dates vary a lot in terms of accuracy and formats and have to be extracted using e.g. regular expressions. The sending date is rarely completely missing. The sending date descriptions that do not fit other categories or are uncertain are included in the type \"OTHER\". The five largest data sources have mostly a year or a range of years assigned to the sending date. In the smaller data sources, the exact sending date is usually known with some exceptions.</p>

  <img src=${fig_letter_dates} style=\"max-width:100%\" alt=\"The accuracy of the sending dates.\">

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">Each letter is assigned only to one data source. Because the information about the sending dates and places are lacking, it is difficult to say if there are possible duplicate letters between the data sources. There is possibly one shared letter between Albert Edelfelt Letters and Finnish National Gallery, and 18 between Elias Lönnrot Letters and J.V. Snellman Letters, where the sender and the receiver of the letter, and the sending date and place match.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">Actors on the other hand can be present in multiple data sources, and the information about them is combined to the LetterSampo Finland data using also external data sources like AcademySampo, BiographySampo and Wikidata. The number of possible actor duplicates depends on how well linking actors to themselves across data sources has succeeded. In many cases, there was not enough information to say with confidence if two actors in different sources are actually the same person. Actors who have more letters in the data appear more likely in multiple data sources.</p>

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">In the figure below, each row shows the percentage of Person type actors who have sent and/or received  at least a certain amount of letters and have the metadata corresponding to the column available. The gender is usually known, but as the number of letters grows actors are more likely to have links to external sources and more detailed metadata.</p>

  <img src=${fig_actor_metadata} style=\"max-width:100%\" alt=\"Available metadata for Person type actors with respect to the number of letters an actor has.\">

  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">In general, data sources have a quite big proportion of the actors unique to the source. For the Finnish National Gallery and larger data sources, over 70% of the actors are unique. There are a lot of actors who are associated with one or two letters and appear only in one source, whereas people who are associated with many letters are more likely shared between data sources. Especially letters the actor has sent might have ended up in different data sources. Figure below shows how actors are shared between data sources.</p>

  <img src=${fig_shared_actors} style=\"max-width:100%\" alt=\"Shared actors between data sources.\">
  `,
  exportLink: {
      viewLabel: "Välilehti",
      viewInstructions: "Valitse välilehti, jossa haku avautuu",
      fieldLabel: "Luotu linkki (kirjoitussuojattu)",
      infoBody: "Voit jakaa tekemäsi haun alla olevan linkin avulla. Linkki luodaan sen perusteella, mitä olet valinnut eri fasetteja käyttäen, ja se avaa tämän näkymän hakunäkymän näillä valinnoilla valitulla välilehdellä. Voit vaihtaa avattavan välilehden mihin tahansa tuettuun välilehtivaihtoehtoon käyttäen alla olevaa pudotusvalikkoa. Jos teet uusia valintoja ollessasi tällä sivulla, linkki päivittyy automaattisesti sisältämään ne.", 
      warningTitle: "Luotu linkki saattaa olla liian pitkä joillekin selaimille",
      warningBody: "Luodun linkin tämänhetkinen pituus on päälle 2 000 merkkiä. Selaimilla on vaihtelevia rajoja niillä toimivien linkkien enimmäispituuksille. <strong>Tämä linkki ei välttämättä toimi kaikilla selaimilla</strong> — voit lyhentää linkin pituutta poistamalla joitakin valitsemiasi fasettivalintoja.",
      errorTitle: "Luotu linkki on liian pitkä",
      errorBody: "Luodun linkin tämänhetkinen pituus on päälle 15 800 merkkiä. <strong>Palvelin kieltäytyy käsittelemästä pyyntöjä, jotka ylittävät tietyt pituusrajat</strong> — voit lyhentää linkin pituutta poistamalla joitakin valitsemiasi fasettivalintoja.",
      copyLinkToClipboard: "Kopioi linkki leikepöydälle"
  }
}