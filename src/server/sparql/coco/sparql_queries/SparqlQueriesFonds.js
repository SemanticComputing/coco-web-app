const perspectiveID = 'fonds'

export const fondsPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
  {
    ?id dct:source/skos:prefLabel ?datasource 
  }
  UNION
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id :archival_organization ?archival_organization__id .
    ?archival_organization__id a :Organization ; skos:prefLabel ?archival_organization__prefLabel .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
  }
  UNION
  { 
    ?id :records_creator/:proxy_for ?creator__id .
    ?creator__id skos:prefLabel ?creator__prefLabel .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?creator__id), "^.*\\\\/(.+)", "$1")) AS ?creator__dataProviderUrl)
  }
  UNIoN  
  {
    ?id :number_of_letters ?number_of_letters
  }
`

export const fondsPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id dct:source/skos:prefLabel ?datasource 
  }
  UNION
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
    ?id :records_creator/:proxy_for ?creator__id .
    ?creator__id skos:prefLabel ?creator__prefLabel .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?creator__id), "^.*\\\\/(.+)", "$1")) AS ?creator__dataProviderUrl)
  }
  UNION
  { 
    ?id foaf:page ?related__id .
    BIND(?related__id AS ?related__prefLabel)
    BIND(?related__id AS ?related__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id ?sender__id  
	    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?sender__prefLabel)
    	(CONCAT("/actors/page/", REPLACE(STR(?sender__id), "^.*\\\\/(.+)", "$1")) AS ?sender__dataProviderUrl)
    WHERE {
      ?_evt :fonds ?id ; :was_authored_by/:proxy_for ?sender__id .
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
      ?_evt :fonds ?id ; 
        :was_addressed_to/:proxy_for ?recipient__id .  
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
      ?id ^:fonds ?letter__id .
      ?letter__id a :Letter ;
            skos:prefLabel ?letter__prefLabel .
      
      OPTIONAL { ?letter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?letter__prefLabel))
  }
`

export const archivePlacesQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?event) AS ?instanceCount)
WHERE {
  <FILTER>
  ?event :fonds ?fonds ; :was_sent_from ?id .
  ?id geo:lat ?lat ; geo:long ?long .
} GROUP BY ?id ?lat ?long
`

export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    { SELECT ?id ?related__id ?person__id (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?person__prefLabel) (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
      WHERE {
    ?_evt :fonds ?related__id ; :was_sent_from ?id ; :was_authored_by ?person__id .
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
  ?letter :fonds ?fonds ; 
    a :Letter ;
    :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (STR(year(?time_0)) AS ?category)
  FILTER (BOUND(?category))
} 
GROUP BY ?category ORDER BY ?category
`