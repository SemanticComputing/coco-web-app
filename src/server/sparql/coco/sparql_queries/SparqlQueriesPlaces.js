const perspectiveID = 'places'

export const placePropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  {
    ?id skos:broader ?broader__id .
    FILTER (?broader__id != ?id)
    ?broader__id skos:prefLabel ?broader__prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  }
  UNION
  {
    ?id :country ?country__id .
    ?country__id skos:prefLabel ?country__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?country__id), "^.*\\\\/(.+)", "$1")) AS ?country__dataProviderUrl)
  }
  UNION
  {
    ?id :number_of_events ?number_of_events
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "^https*:", ""), "?width=300")) as ?image__url)
  }
`

export const placePropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    ?id a ?type__id .
    ?type__id skos:prefLabel ?type__prefLabel .
    BIND (?type__id as ?type_dataProviderUrl)
  }
  UNION
  {
    ?id skos:broader ?broader__id .
    FILTER (?broader__id != ?id)
    ?broader__id skos:prefLabel ?broader__prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  }
  UNION
  {
      ?id :country ?country__id .
      ?country__id skos:prefLabel ?country__prefLabel .
      BIND(CONCAT("/places/page/", REPLACE(STR(?country__id), "^.*\\\\/(.+)", "$1")) AS ?country__dataProviderUrl)
  }
  UNION
  { SELECT 
      ?id 
      ?narrower__id 
      (CONCAT(?_label, IF(BOUND(?_num),CONCAT(" (",STR(?_num),")"), "")) AS ?narrower__prefLabel)
      (CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
    WHERE {
    ?narrower__id skos:broader ?id ;
      skos:prefLabel ?_label .
    FILTER (?narrower__id != ?id)
      OPTIONAL { ?narrower__id :number_of_events ?_num }
    } ORDER BY DESC(COALESCE(?_num)) ?_label 
  }
  UNIoN
  { ?id :is_related_to ?external__id .
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  { ?id skos:altLabel ?altLabel .
    # FILTER (STR(?prefLabel__prefLabel) != STR(?altLabel)) 
  }
  UNION
  {
    ?id geo:lat ?lat ; geo:long ?long .
    BIND (CONCAT('lat ', STR(xsd:decimal(?lat)), ', long ',STR(xsd:decimal(?long))) as ?location)
  }
  UNION
  {
    ?id :number_of_events ?number_of_events
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "^https*:", ""), "?width=600")) as ?image__url)
  }
  `

export const placeLettersInstancePageQuery = `
SELECT * 
WHERE {
  BIND(<ID> as ?id)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    SELECT ?id ?from__id ?from__prefLabel 
    	(CONCAT("/letters/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
    WHERE {
	    ?id ^:was_sent_from ?from__id .
    	?from__id skos:prefLabel ?from__prefLabel .
      OPTIONAL { ?from__id :has_time-span/crm:P82a_begin_of_the_begin ?_time }
    } ORDERBY COALESCE(year(?_time), 9999)
  } 
  UNION
  {
    ?id ^:referenced_place ?mentioningletter__id .
          ?mentioningletter__id a :Letter ;
            skos:prefLabel ?mentioningletter__prefLabel .
        BIND(CONCAT("/letters/page/", REPLACE(STR(?mentioningletter__id), "^.*\\\\/(.+)", "$1")) AS ?mentioningletter__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id ?related__id
    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_sent)), ')') AS ?related__prefLabel)
    (CONCAT("/actors/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    WHERE {

      ?id ^:was_sent_from ?_sent . ?_sent :was_authored_by ?related__id .
      ?related__id skos:prefLabel ?_label .
    }
    
    GROUPBY ?id ?related__id ?_label
    ORDER BY DESC(COUNT(DISTINCT ?_sent)) ?_label
  }
  UNION
  {
    ?born__id :was_born_in_location ?id ;
      skos:prefLabel ?born__prefLabel .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?born__id), "^.*\\\\/(.+)", "$1")) AS ?born__dataProviderUrl)
  }
  UNION{
    ?deceased__id :died_at_location ?id ;
      skos:prefLabel ?deceased__prefLabel .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?deceased__id), "^.*\\\\/(.+)", "$1")) AS ?deceased__dataProviderUrl)
  }
}
`

export const eventPlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?event) as ?instanceCount)
  WHERE {
    <FILTER>
    ?event crm:P7_took_place_at ?id .
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
  GROUP BY ?id ?lat ?long
`

//  TODO add subplaces to counts
// https://api.triplydb.com/s/gYYySP446
export const sentReceivedByPlaceQuery = `
  SELECT DISTINCT (STR(?year) as ?category)
      (count(distinct ?evt) AS ?count)
  WHERE {
      BIND(<ID> as ?id)
      ?sub skos:broader* ?id .
      ?evt :was_sent_from ?sub ;
        a :Letter ;
        :has_time-span/crm:P82a_begin_of_the_begin ?time .
      BIND (STR(year(?time)) AS ?year)
  } GROUP BY ?year ORDER BY ?year 
`
