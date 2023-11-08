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
  ?id cocos:was_authored_by ?source__id . 
  ?source__id skos:prefLabel ?source__prefLabel . 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  ?id cocos:letter/cocos:was_addressed_to ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel ; a [] .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  ?id crm:P4_has_time-span ?productionTimespan__id .
  
  OPTIONAL { ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel }
  OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
  OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
}
UNION
{
  ?id cocos:was_sent_from ?from__id .
    ?from__id skos:prefLabel ?from__prefLabel ; a [] .
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
  OPTIONAL {
    ?from__id crm:P89_falls_within+ ?countryfrom__id .
    ?countryfrom__id a cocos:Country .
    ?countryfrom__id skos:prefLabel ?countryfrom__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?countryfrom__id), "^.*\\\\/(.+)", "$1")) AS ?countryfrom__dataProviderUrl)
  }
}
UNION 
{ 
  ?id cocos:letter ?uri__id .
  {
    ?uri__id cocos:fonds ?fonds__id .
    ?fonds__id skos:prefLabel ?fonds__prefLabel ; a [] .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
  }
  UNION
  { 
    ?uri__id dct:language ?language__id . 
      ?language__id skos:prefLabel ?language__prefLabel ; a [] .
    BIND (?language__id AS ?language__dataProviderUrl)
  }
  UNION
  {
    ?uri__id cocos:series ?series__id .
    ?series__id skos:prefLabel ?series__prefLabel ; a [] .
    BIND(CONCAT("/series/page/", REPLACE(STR(?series__id), "^.*\\\\/(.+)", "$1")) AS ?series__dataProviderUrl)
  }
  UNION
  { # Metadata values
    ?uri__id cocos:metadata ?_metadata .

    ?_metadata dct:source ?datasource__id .
    ?datasource__id skos:prefLabel ?datasource__prefLabel .
    BIND(CONCAT("/sources/page/", REPLACE(STR(?datasource__id), "^.*\\\\/(.+)", "$1")) AS ?datasource__dataProviderUrl)
  }
}
`

export const letterPropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
}
UNION
{
  ?id cocos:was_authored_by ?source__id . 
  ?source__id skos:prefLabel ?source__prefLabel . 
  # FILTER (!REGEX(STR(?source__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION 
{
  ?id crm:P4_has_time-span ?productionTimespan__id .
  OPTIONAL { ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel }
  OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
  OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
}
UNION
{
  ?id cocos:was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel ; a [] .
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
}
UNION
{
  ?id cocos:webpage ?related__id . 
  BIND(?related__id AS ?related__prefLabel)
  BIND(URI(?related__id) AS ?related__dataProviderUrl)
}
UNION
{
  ?id cocos:in_tie ?tie__id .
  ?tie__id skos:prefLabel ?tie__prefLabel .
  BIND(CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
}
UNION
{
  ?id cocos:letter ?uri__id .
  BIND(STR(?uri__id) as ?uri__prefLabel)
  BIND(?uri__id as ?uri__dataProviderUrl)
  {
    ?uri__id cocos:was_addressed_to ?target__id . 
    ?target__id skos:prefLabel ?target__prefLabel ;
    FILTER (!REGEX(STR(?target__prefLabel), 'unknown', 'i'))
    BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
  }
  UNION 
  {
    ?uri__id cocos:referenced_actor ?mentioned_person__id . 
    ?mentioned_person__id skos:prefLabel ?mentioned_person__prefLabel . 
    BIND(CONCAT("/actors/page/", REPLACE(STR(?mentioned_person__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_person__dataProviderUrl)
  }
  UNION
  {
    ?uri__id cocos:referenced_place ?mentioned_place__id . 
    ?mentioned_place__id skos:prefLabel ?mentioned_place__prefLabel . 
    BIND(CONCAT("/places/page/", REPLACE(STR(?mentioned_place__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_place__dataProviderUrl)
  }
  UNION
  { 
    ?uri__id dct:language ?language__id . 
    ?language__id a [] ; skos:prefLabel ?language__prefLabel .
    BIND (?language__id AS ?language__dataProviderUrl)
  }
  UNION
  {
    ?uri__id cocos:fonds ?fonds__id .
    ?fonds__id skos:prefLabel ?fonds__prefLabel .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
  }
  UNION
  {
    ?uri__id cocos:series ?series__id .
    ?series__id skos:prefLabel ?series__prefLabel .
    BIND(CONCAT("/series/page/", REPLACE(STR(?series__id), "^.*\\\\/(.+)", "$1")) AS ?series__dataProviderUrl)
  }    
  UNION
  {
    ?uri__id cocos:archival_organization ?archival_organization__id .
    ?archival_organization__id skos:prefLabel ?archival_organization__prefLabel .
    BIND(CONCAT("/fonds/page/", REPLACE(STR(?archival_organization__id), "^.*\\\\/(.+)", "$1")) AS ?archival_organization__dataProviderUrl)
  }
  UNION
  { # Metadata values
    ?uri__id cocos:metadata ?_metadata .
    {
      ?_metadata cocos:original_record ?original_record 
    }
    UNION
    { 
      ?_metadata foaf:homepage ?related__id . 
      BIND(?related__id AS ?related__prefLabel)
      BIND(?related__id AS ?related__dataProviderUrl)
    }
    UNION
    {
        VALUES (?prop ?prop_label) {
          # (cocos:recipient_as_interpreted 'recipient as interpreted')
          # (cocos:sender_as_interpreted 'sender as interpreted')
          (cocos:archival_location 'archival location')
          (cocos:fonds_as_recorded 'fonds as recorded')
          (cocos:number_of_letters 'number of letters')
          # (cocos:original_record 'original record')
          # (cocos:recipient 'recipient')
          (cocos:recipient_as_recorded 'recipient as recorded')
          # (cocos:sender 'sender')
          (cocos:sender_as_recorded 'sender as recorded')
          (cocos:sending_date 'date of sending as recorded')
          (cocos:type_as_recorded 'type as recorded')
          (cocos:sender_class 'sender class')
          (cocos:sender_familyname 'sender familyname')
          (cocos:sender_firstname 'sender firstname')
          (cocos:source_api_url 'source api url')
          (cocos:sending_place 'place of sending as recorded')
          (cocos:summary 'summary')
          (cocos:type 'type')
          (cocos:recipient_class 'recipient class')
          (cocos:recipient_familyname 'recipient familyname')
          (cocos:recipient_familyname_prev 'recipient familyname prev')
          (cocos:recipient_firstname 'recipient firstname')
          (cocos:sender_familyname_prev 'sender familyname prev')
          (cocos:note 'note')
          (cocos:archival_organization_as_recorded 'archival organization as recorded')
          (cocos:series_as_recorded 'series as recorded')
          (cocos:referenced_actor_as_recorded 'referenced actor as recorded')
          (cocos:referenced_place_as_recorded 'referenced place as recorded')
        }
        ?_metadata ?prop ?v .
        BIND(CONCAT(?prop_label, ': ', STR(?v)) AS ?record_value ) 
    }
  }
}
`

export const topCorrespondenceFacetPageQuery = `
SELECT DISTINCT ?from__label ?to__label (xsd:date(?_date) AS ?date) ?type (year(?_date) AS ?year)
WHERE {
  ?id a cocos:Production .

  <FILTER>

  ?id cocos:letter/cocos:was_addressed_to/skos:prefLabel ?to__label ;
    crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?_date ;
    cocos:was_authored_by/skos:prefLabel ?from__label .

  VALUES ?type { "to" "from" }
}
`

//  https://api.triplydb.com/s/JJ8pW_uH3
export const lettersByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?letter) AS ?count)
WHERE {
  <FILTER>
  ?letter cocos:was_authored_by ?id ;
    cocos:letter/cocos:was_addressed_to ?target ;
    crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (STR(year(?time_0)) AS ?category)
  FILTER (BOUND(?category))
} 
GROUP BY ?category ORDER BY ?category
`

export const yearlyLettersFacetPageQuery = `
SELECT DISTINCT (STR(?year) as ?category) (count(distinct ?id) AS ?letterCount)
WHERE {
  <FILTER>
  
  ?id a cocos:Production ;
      crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
  BIND (year(?time_0) AS ?year)
} 
GROUP BY ?year
ORDER BY ?year
`

export const sendingPlacesHeatmapQuery = `
  SELECT DISTINCT ?id ?lat ?long
  (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>
      
    ?id cocos:was_sent_from ?sending_place .
      ?sending_place skos:prefLabel ?locationLabel ;
        geo:lat ?lat ;
        geo:long ?long .
  }
`

