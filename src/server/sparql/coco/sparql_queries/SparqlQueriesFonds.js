const perspectiveID = 'fonds'

export const fondsPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)

  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  {
    ?id :number_of_letters ?number_of_letters
  }
  UNION
  {
    ?id :archival_organization ?archival_organization__id .
    ?archival_organization__id a :Organization ; skos:prefLabel ?archival_organization__prefLabel .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
  }
  UNION
  {
    ?series__id :fonds ?id .
    ?series__id a :Series ; skos:prefLabel ?series__prefLabel .
    BIND(CONCAT("/series/page/", REPLACE(STR(?series__id), "^.*\\\\/(.+)", "$1")) AS ?series__dataProviderUrl)
  }
`

export const fondsPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id :number_of_letters ?number_of_letters
  }
  UNION
  {
    ?id :archival_organization ?archival_organization__id .
    ?archival_organization__id a :Organization ; skos:prefLabel ?archival_organization__prefLabel .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
  }
  UNION
  {
    ?series__id :fonds ?id .
    ?series__id a :Series ; skos:prefLabel ?series__prefLabel .
    BIND(CONCAT("/series/page/", REPLACE(STR(?series__id), "^.*\\\\/(.+)", "$1")) AS ?series__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id ?sender__id  
	    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?sender__prefLabel)
    	(CONCAT("/actors/page/", REPLACE(STR(?sender__id), "^.*\\\\/(.+)", "$1")) AS ?sender__dataProviderUrl)
    WHERE {
      ?_evt :letter/:fonds ?id ; :was_authored_by ?sender__id .
      ?sender__id skos:prefLabel ?_label ; a [] .
  	}
    GROUPBY ?id ?sender__id ?_label
    ORDERBY DESC(COUNT(DISTINCT ?_evt))
  }
  UNION
  {
    SELECT DISTINCT ?id ?recipient__id  
	    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?recipient__prefLabel)
    	(CONCAT("/actors/page/", REPLACE(STR(?recipient__id), "^.*\\\\/(.+)", "$1")) AS ?recipient__dataProviderUrl)
    WHERE {
      ?_evt :letter [ :fonds ?id ; :was_addressed_to ?recipient__id ;  ] .  
      ?recipient__id skos:prefLabel ?_label ; a [] .
  	}
    GROUPBY ?id ?recipient__id ?_label
    ORDERBY DESC(COUNT(DISTINCT ?_evt))
  }  
  UNION
  { 
    SELECT DISTINCT ?id ?letter__id ?letter__prefLabel 
      (CONCAT("/letters/page/", REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
	    # ?person__id ?person__prefLabel 
    	# (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    WHERE {
      ?id ^:fonds ?_letter .
      ?letter__id :letter ?_letter ;
            a :Production ;
            skos:prefLabel ?letter__prefLabel .
      
      OPTIONAL { ?letter__id crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time }
      
      # { ?letter__id :was_authored_by ?person__id }
    	# UNION
      # { ?_letter :was_addressed_to ?person__id }
      # 	UNION
      # { ?_letter :referenced_actor ?person__id }
    
      # ?person__id skos:prefLabel ?person__prefLabel .
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?letter__prefLabel))
  } 
`

export const archivePlacesQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?event) AS ?instanceCount)
WHERE {
  <FILTER>
  ?event :letter/:fonds ?fonds ; :was_sent_from ?id .
  ?id geo:lat ?lat ; geo:long ?long .
} GROUP BY ?id ?lat ?long
`

export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    { SELECT ?id ?related__id ?person__id (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?person__prefLabel) (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
      WHERE {
    ?_evt :fonds ?related__id ; ^:letter [ :was_sent_from ?id ; :was_authored_by ?person__id ] .
    ?person__id skos:prefLabel ?_plabel .
      } GROUPBY ?id ?related__id ?person__id ?_plabel ORDERBY DESC(COUNT(?_evt)) ?_plabel
    }
  } 
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const archiveByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?letter) AS ?count)
WHERE {
  <FILTER>
  ?letter :letter/:fonds ?fonds ; 
    a :Production ;
    crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (STR(year(?time_0)) AS ?category)
  FILTER (BOUND(?category))
} 
GROUP BY ?category ORDER BY ?category
`