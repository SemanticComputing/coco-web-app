export const letterProperties = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/letters/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  BIND(?id as ?uri__id)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id portal:sender ?source__id . 
  ?source__id skos:prefLabel ?source__prefLabel . 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  ?id portal:recipient ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel ; a [] .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  ?id :has_time-span ?productionTimespan__id .
  ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel ;
    crm:P82a_begin_of_the_begin ?productionTimespan__start ;
    crm:P82b_end_of_the_end ?productionTimespan__end 
}
UNION
{
  ?id :fonds ?fonds__id .
  ?fonds__id a [] ; skos:prefLabel ?fonds__prefLabel.
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
}
UNION
{
  ?id dct:source ?datasource__id .
  ?datasource__id skos:prefLabel ?datasource__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?datasource__id), "^.*\\\\/(.+)", "$1")) AS ?datasource__dataProviderUrl)
}
UNION
{
  ?id :archival_organization ?archival_organization__id .
  ?archival_organization__id a [] ; skos:prefLabel ?archival_organization__prefLabel .
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
}
`

export const letterPropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id portal:sender ?source__id .
  ?source__id skos:prefLabel ?source__prefLabel . 
  # FILTER (!REGEX(STR(?source__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  ?id :has_time-span ?productionTimespan__id .
  ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel .
  OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
  OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
}
UNION
{
  ?id :was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel ; a [] .
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
}
UNION
{
  ?id :in_tie ?tie__id .
  ?tie__id skos:prefLabel ?tie__prefLabel .
  BIND(CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
}
UNION
{
  ?id portal:recipient ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel ;
  FILTER (!REGEX(STR(?target__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION 
{
  ?id :referenced_actor/:proxy_for ?mentioned_person__id . 
  ?mentioned_person__id skos:prefLabel ?mentioned_person__prefLabel . 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?mentioned_person__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_person__dataProviderUrl)
}
UNION
{
  ?id :referenced_place ?mentioned_place__id . 
  ?mentioned_place__id skos:prefLabel ?mentioned_place__prefLabel . 
  BIND(CONCAT("/places/page/", REPLACE(STR(?mentioned_place__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_place__dataProviderUrl)
}
UNION
{ 
  ?id dct:language ?language__id . 
  ?language__id a [] ; skos:prefLabel ?language__prefLabel .
  BIND (?language__id AS ?language__dataProviderUrl)
}
UNION
{
  ?id :type [ a [] ; skos:prefLabel ?lettertype ]
}
UNION
{
  ?id dct:source ?datasource__id .
  ?datasource__id skos:prefLabel ?datasource__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?datasource__id), "^.*\\\\/(.+)", "$1")) AS ?datasource__dataProviderUrl)
}
UNION
{
  ?id :fonds ?fonds__id .
  ?fonds__id a [] ; skos:prefLabel ?fonds__prefLabel .
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
}
UNION
{
  ?id :archival_organization ?archival_organization__id .
  ?archival_organization__id a [] ; skos:prefLabel ?archival_organization__prefLabel .
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
}
UNION
{ # Metadata values
  ?id :metadata ?_metadata .
  {
    ?other__id :metadata ?_metadata ;
    	skos:prefLabel ?other__prefLabel .
      BIND(CONCAT("/letters/page/", REPLACE(STR(?other__id), "^.*\\\\/(.+)", "$1")) AS ?other__dataProviderUrl)
  }
  UNION
  { 
    ?_metadata foaf:page ?related__id . 
    BIND(?related__id AS ?related__prefLabel)
    BIND(?related__id AS ?related__dataProviderUrl)
  }
  UNION
  { 
    ?_metadata :source_url|:source_api_url ?source_url__id . 
    BIND(?source_url__id AS ?source_url__prefLabel)
    BIND(?source_url__id AS ?source_url__dataProviderUrl)
  }
}
`

export const letterMetadataInstancePageQuery = `
SELECT * 
  WHERE { 
  BIND (<ID> as ?id)
    BIND (?id as ?uri__id)
    BIND (STR(?id) as ?uri__prefLabel)
    BIND (?id as ?uri__dataProviderUrl)
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
    }
    UNION
    {
    ?id :metadata ?_metadata .
      {
        ?_metadata :original_record ?original_record 
      }
      UNION
      {     
        VALUES (?prop ?prop_label) {
          (:archival_location 'archival location')
          (:fonds_as_recorded 'fonds as recorded')
          (:number_of_letters 'number of letters')
          (:recipient_as_recorded 'recipient as recorded')
          (:sender_as_recorded 'sender as recorded')
          (:sending_date 'date of sending as recorded')
          (:type_as_recorded 'type as recorded')
          (:sender_class 'sender class')
          (:sender_familyname 'sender familyname')
          (:sender_firstname 'sender firstname')
          (:sender_comment 'comment about sender')
          (:source_api_url 'source api url')
          (:sending_place 'place of sending as recorded')
          (:summary 'summary')
          (:type 'type')
          (:recipient_class 'recipient class')
          (:recipient_familyname 'recipient familyname')
          (:recipient_familyname_prev 'recipient familyname prev')
          (:recipient_firstname 'recipient firstname')
          (:recipient_comment 'comment about recipient')
          (:records_creator 'records creator')
          (:sender_familyname_prev 'sender familyname prev')
          (:note 'note')
          (rdfs:comment 'comment')
          (:archival_organization_as_recorded 'archival organization as recorded')
          (:series_as_recorded 'series as recorded')
          (:referenced_actor_as_recorded 'referenced actor as recorded')
          (:referenced_place_as_recorded 'referenced place as recorded')
          (dct:language 'language')
        }
      ?id :metadata ?_metadata .
      ?_metadata ?prop ?v .
      BIND(CONCAT(?prop_label, ': ', STR(?v)) AS ?record_value ) 
    }
  }
}
`

/**
 * Notice some optimization, both TOP CORRESPONDENCES queries
 * use only the precision of one year
 * 
 * Also the number of results is limited to 100000
 */
export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT 
  (REPLACE(?_from__label, ' [(][0-9-]+[)]$', '') AS ?from__label)
  (REPLACE(?_to__label, ' [(][0-9-]+[)]$', '') AS ?to__label)
	?type
  ?year
  (xsd:date(CONCAT(STR(?year),'-01-01')) AS ?date)
  (COUNT(DISTINCT ?id) AS ?count)
WHERE {
  ?id a :Letter .

  <FILTER>

  ?id portal:recipient/skos:prefLabel ?_to__label ;
    :estimated_year ?year ;
    portal:sender/skos:prefLabel ?_from__label .

  VALUES ?type { "to" "from" }
} GROUPBY ?_from__label ?_to__label ?type ?year LIMIT 100000
`

export const lettersByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?letter) AS ?count)
WHERE {
  <FILTER>

  ?letter a :Letter ;
    :estimated_year ?category .
} 
GROUP BY ?category ORDER BY ?category
`

export const yearlyLettersFacetPageQuery = `
SELECT DISTINCT (STR(?year) as ?category) (count(distinct ?id) AS ?letterCount)
WHERE {
  <FILTER>
  
  ?id a :Letter ;
      :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (year(?time_0) AS ?year)
} 
GROUP BY ?year
ORDER BY ?year
`

export const sendingPlacesMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?letter) AS ?instanceCount)
WHERE {
  <FILTER>
  
  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .

  ?letter :was_sent_from ?id .

} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const peopleRelatedTo = `
  { SELECT DISTINCT ?id ?person__id (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?related__id)), ')') AS ?person__prefLabel) (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  WHERE {
      <FILTER>

  ?related__id :was_sent_from ?id ; portal:sender ?person__id .
  ?person__id skos:prefLabel ?_plabel .
    } GROUPBY ?id ?person__id ?_plabel ORDERBY DESC(COUNT(?related__id)) ?_plabel
  }
`

export const csvQueryLetters = `
SELECT DISTINCT ?id ?label ?sender ?sender_id ?recipient ?recipient_id ?timespan ?datasource ?archival_organization ?fonds
WHERE {

  <FILTER>

  FILTER(BOUND(?id))
  ?id a :Letter ; 
    skos:prefLabel ?label .
  OPTIONAL
  {
    ?id portal:sender ?sender_id .
    ?sender_id skos:prefLabel ?sender ; a []
  }
  OPTIONAL
  {
    ?id portal:recipient ?recipient_id . 
    ?recipient_id skos:prefLabel ?recipient ; a []
  }
  OPTIONAL
  {
    ?id :has_time-span [ skos:prefLabel ?timespan ; a [] ]
  }
  OPTIONAL
  {
    ?id :fonds [ a [] ; skos:prefLabel ?fonds ]
  }
  OPTIONAL 
  { 
    ?id dct:source/skos:prefLabel ?datasource 
  }
  OPTIONAL 
  {
    ?id :archival_organization [ a [] ; skos:prefLabel ?archival_organization ]
  }

} ORDERBY ?label `

export const sendingPlacesHeatmapQuery = `
  SELECT DISTINCT ?id ?lat ?long (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>

    ?id :was_sent_from [ geo:lat ?lat ; geo:long ?long ]
  }
`

