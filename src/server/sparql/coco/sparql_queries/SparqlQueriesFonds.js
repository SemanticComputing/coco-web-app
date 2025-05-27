const perspectiveID = 'fonds'

export const fondsPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
  {
    ?id :original_data_provider/skos:prefLabel ?data_provider
    FILTER (LANG(?data_provider)="en")
  }
  UNION
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
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
    ?id dct:source/skos:prefLabel ?data_provider .
    FILTER (LANG(?data_provider)="en")
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
      ?_evt :fonds ?id ; portal:sender ?sender__id .
      ?sender__id skos:prefLabel ?_label ; a [] .
  	}
    GROUP BY ?id ?sender__id ?_label
    ORDER BY DESC(COUNT(DISTINCT ?_evt))
  }
  UNION
  {
    SELECT DISTINCT ?id ?recipient__id  
	    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?recipient__prefLabel)
    	(CONCAT("/actors/page/", REPLACE(STR(?recipient__id), "^.*\\\\/(.+)", "$1")) AS ?recipient__dataProviderUrl)
    WHERE {
      ?_evt :fonds ?id ; 
        portal:recipient ?recipient__id .  
      ?recipient__id skos:prefLabel ?_label ; a [] .
  	}
    GROUP BY ?id ?recipient__id ?_label
    ORDER BY DESC(COUNT(DISTINCT ?_evt))
  }  
  UNION
  {
    SELECT DISTINCT ?id ?letter__id ?letter__prefLabel 
    (CONCAT(IF(?edition = <http://ldf.fi/schema/coco/not_in_editions>, "/letters/page/", "/digitaleditions/page/"), REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
      # (CONCAT("/letters/page/", REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
	    # ?person__id ?person__prefLabel 
    	# (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    WHERE {
      ?id ^:fonds ?letter__id .
      ?letter__id a :Letter ;
            skos:prefLabel ?letter__prefLabel ;
            :digital_edition ?edition .
      
      OPTIONAL { ?letter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?letter__prefLabel))
  }
`

export const archivePlacesQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?event) AS ?instanceCount)
WHERE {
  <FILTER>
  FILTER EXISTS { ?fonds a [] }
  ?event :fonds ?fonds ; :was_sent_from ?id .
  ?id geo:lat ?lat ; geo:long ?long .
} GROUP BY ?id ?lat ?long
`

export const peopleRelatedTo = `
  OPTIONAL {
    BIND (<ID> as ?id)
    { SELECT ?id ?person__id
      (CONCAT(?_plabel, ' (', STR(SUM(?_sent)), '+', STR(SUM(?_received)), ')') AS ?person__prefLabel)
      (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
      WHERE {
        
        BIND (<ID> as ?id)
      	<FILTER>
          
        VALUES (?_prop ?_prop2 ?_sent ?_received ) { 
          (:was_sent_from portal:sender 1 0)
          (:was_sent_to portal:recipient 0 1)
        }
         
        [] :fonds ?related__id ; ?_prop ?id ; ?_prop2 ?person__id .
    	?person__id skos:prefLabel ?_plabel .
        
      } 
      GROUP BY ?id ?person__id ?_plabel 
	    ORDER BY DESC(SUM(?_sent)+SUM(?_received))
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
  FILTER EXISTS { ?fonds a [] }
  ?letter :fonds ?fonds ; 
    a :Letter ;
    :estimated_year ?time_0 .
  BIND (STR(?time_0) AS ?category)
  FILTER (BOUND(?category))
} 
GROUP BY ?category ORDER BY ?category
`

export const csvQueryFonds = `
SELECT DISTINCT ?id ?label ?number_of_letters ?data_provider_id ?data_provider
(GROUP_CONCAT(?records_creator_id; separator="|") AS ?records_creator_ids)
(GROUP_CONCAT(?records_creator; separator="|") AS ?records_creators)
WHERE {
  
  ?id a :Fonds .

  <FILTER>

  FILTER(BOUND(?id))

  ?id skos:prefLabel ?label .

  OPTIONAL {
    ?id :number_of_letters ?number_of_letters
  }
  OPTIONAL {
    ?id :original_data_provider ?data_provider_id .
    ?data_provider_id skos:prefLabel ?data_provider .
    FILTER (LANG(?data_provider)='en')
  }
  OPTIONAL {
    ?id :records_creator/:proxy_for ?records_creator_id .
    ?records_creator_id skos:prefLabel ?records_creator 
  }
} 
GROUP BY ?id ?label ?data_provider_id ?data_provider 
?number_of_letters
ORDER BY DESC(?number_of_sent_letters) ?label
`
