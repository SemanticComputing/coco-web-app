export const letterProperties = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)

  OPTIONAL { ?id :metadata/foaf:page ?_external }
  BIND(CONCAT(IF(BOUND(?_external), "/digitaleditions/page/", "/letters/page/"), REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  # BIND(CONCAT("/letters/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

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
  ?id :original_data_provider ?data_provider__id .
  ?data_provider__id skos:prefLabel ?data_provider__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?data_provider__id), "^.*\\\\/(.+)", "$1")) AS ?data_provider__dataProviderUrl)
}
`

export const letterPropertiesQLever = `
{
  <SUBQUERY>
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)

  OPTIONAL { ?id :metadata/foaf:page ?_external }
  BIND(CONCAT(IF(BOUND(?_external), "/digitaleditions/page/", "/letters/page/"), REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  BIND(?id as ?uri__id)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  <SUBQUERY>
  ?id portal:sender ?source__id .
  ?source__id skos:prefLabel ?source__prefLabel . 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  <SUBQUERY>
  ?id portal:recipient ?target__id .
  ?target__id skos:prefLabel ?target__prefLabel ; a [] .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  <SUBQUERY>
  ?id :has_time-span ?productionDate__id .
  ?productionDate__id skos:prefLabel ?productionDate__prefLabel ;
    crm:P82a_begin_of_the_begin ?productionDate__start ;
    crm:P82b_end_of_the_end ?productionDate__end 
}
UNION
{
  <SUBQUERY>
  ?id :fonds ?fonds__id .
  ?fonds__id a [] ; skos:prefLabel ?fonds__prefLabel.
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
}
UNION
{
  <SUBQUERY>
  ?id :original_data_provider ?data_provider__id .
  ?data_provider__id skos:prefLabel ?data_provider__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?data_provider__id), "^.*\\\\/(.+)", "$1")) AS ?data_provider__dataProviderUrl)
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
  ?id :has_time-span ?productionDate__id .
  ?productionDate__id skos:prefLabel ?productionDate__prefLabel .
  OPTIONAL { ?productionDate__id crm:P82a_begin_of_the_begin ?productionDate__start }
  OPTIONAL { ?productionDate__id crm:P82b_end_of_the_end ?productionDate__end }
}
UNION
{
  ?id :was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel ; a [] .
  FILTER (LANG(?from__prefLabel)='<LANG>')
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
}
UNION
{
  ?id :was_sent_to ?to__id .
  ?to__id skos:prefLabel ?to__prefLabel ; a [] .
  FILTER (LANG(?to__prefLabel)='<LANG>')
  BIND(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
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
  ?mentioned_place__id skos:prefLabel ?mentioned_place__prefLabel
  FILTER (LANG(?mentioned_place__prefLabel)='<LANG>')
  BIND(CONCAT("/places/page/", REPLACE(STR(?mentioned_place__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_place__dataProviderUrl)
}
UNION
{ 
  ?id dct:language ?language__id .
  ?language__id a [] ; skos:prefLabel ?language__prefLabel .
  FILTER (LANG(?language__prefLabel)='<LANG>')
  BIND (?language__id AS ?language__dataProviderUrl)
}
UNION
{
  ?id :type [ a [] ; skos:prefLabel ?lettertype ]
  FILTER (LANG(?lettertype)='<LANG>')
}
UNION 
{
  ?id :original_data_provider ?data_provider__id .
  ?data_provider__id skos:prefLabel ?data_provider__prefLabel .
  FILTER (LANG(?data_provider__prefLabel)='<LANG>')
  BIND(CONCAT("/sources/page/", REPLACE(STR(?data_provider__id), "^.*\\\\/(.+)", "$1")) AS ?data_provider__dataProviderUrl)
}
UNION
{
  ?id :fonds ?fonds__id .
  ?fonds__id a [] ; skos:prefLabel ?fonds__prefLabel .
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
}
UNION
{ # Metadata values
  ?id :metadata ?_metadata
  OPTIONAL {
    ?_metadata rdfs:comment ?comment .
  }
}
`

export const letterPropertiesInstancePageQLever = `
{
  BIND(<ID> as ?id)
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id portal:sender ?source__id .
  ?source__id skos:prefLabel ?source__prefLabel . 
  # FILTER (!REGEX(STR(?source__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :has_time-span ?productionDate__id .
  ?productionDate__id skos:prefLabel ?productionDate__prefLabel .
  OPTIONAL { ?productionDate__id crm:P82a_begin_of_the_begin ?productionDate__start }
  OPTIONAL { ?productionDate__id crm:P82b_end_of_the_end ?productionDate__end }
}
UNION
{
  BIND(<ID> as ?id)
  ?id :was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel ; a [] .
  FILTER (LANG(?from__prefLabel)='<LANG>')
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
}
UNION
{
  ?id :was_sent_to ?to__id .
  ?to__id skos:prefLabel ?to__prefLabel ; a [] .
  FILTER (LANG(?to__prefLabel)='<LANG>')
  BIND(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :in_tie ?tie__id .
  ?tie__id skos:prefLabel ?tie__prefLabel .
  BIND(CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id portal:recipient ?target__id .
  ?target__id skos:prefLabel ?target__prefLabel ;
  FILTER (!REGEX(STR(?target__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :referenced_actor/:proxy_for ?mentioned_person__id .
  ?mentioned_person__id skos:prefLabel ?mentioned_person__prefLabel .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?mentioned_person__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_person__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :referenced_place ?mentioned_place__id .
  ?mentioned_place__id skos:prefLabel ?mentioned_place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?mentioned_place__id), "^.*\\\\/(.+)", "$1")) AS ?mentioned_place__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id dct:language ?language__id .
  ?language__id a [] ; skos:prefLabel ?language__prefLabel
  FILTER (LANG(?language__prefLabel)='<LANG>')
  BIND (?language__id AS ?language__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :type [ a [] ; skos:prefLabel ?lettertype ]
  FILTER (LANG(?lettertype)='<LANG>')
}
UNION
{
  BIND(<ID> as ?id)
  ?id :original_data_provider ?data_provider__id .
  ?data_provider__id skos:prefLabel ?data_provider__prefLabel .
  FILTER (LANG(?data_provider__prefLabel)='<LANG>')
  BIND(CONCAT("/sources/page/", REPLACE(STR(?data_provider__id), "^.*\\\\/(.+)", "$1")) AS ?data_provider__dataProviderUrl)
}
UNION
{
  BIND(<ID> as ?id)
  ?id :fonds ?fonds__id .
  ?fonds__id a [] ; skos:prefLabel ?fonds__prefLabel .
  BIND(CONCAT("/fonds/page/", REPLACE(STR(?fonds__id), "^.*\\\\/(.+)", "$1")) AS ?fonds__dataProviderUrl)
}
UNION
{ # Metadata values
  BIND(<ID> as ?id)
  ?id :metadata ?_metadata
  OPTIONAL {
    ?_metadata rdfs:comment ?comment .
  }
  OPTIONAL {
    ?_metadata foaf:page ?external__id .
    BIND(?external__id AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
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
    ?id :metadata ?metadata__id .
    BIND (?metadata__id AS ?metadata__prefLabel)
    BIND (?metadata__id AS ?metadata__dataProviderUrl)
      {
        ?metadata__id :original_record ?original_record 
      }
      UNION
      { 
        ?metadata__id :source_url|:source_api_url ?source_url__id . 
        BIND(?source_url__id AS ?source_url__prefLabel)
        BIND(?source_url__id AS ?source_url__dataProviderUrl)
      }
      UNION
      {
        ?created_letter__id :metadata ?metadata__id ;
          skos:prefLabel ?created_letter__prefLabel ;
          :digital_edition ?edition .
        BIND(CONCAT(IF(?edition = <http://ldf.fi/schema/coco/not_in_editions>, "/letters/page/", "/digitaleditions/page/"), REPLACE(STR(?created_letter__id), "^.*\\\\/(.+)", "$1")) AS ?created_letter__dataProviderUrl)
        # BIND(CONCAT("/letters/page/", REPLACE(STR(?created_letter__id), "^.*\\\\/(.+)", "$1")) AS ?created_letter__dataProviderUrl)
      }
      UNION
      {     
        VALUES (?prop ?prop_label) {
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
          (:source_filename 'source filename')
          (:sending_place 'place of sending as recorded')
          (:receiving_place 'place of receiving as recorded')
          (:summary 'summary')
          (:type 'type')
          (:recipient_class 'recipient class')
          (:recipient_familyname 'recipient familyname')
          (:recipient_familyname_prev 'recipient familyname prev')
          (:recipient_firstname 'recipient firstname')
          (:recipient_comment 'comment about recipient')
          (:records_creator_as_recorded 'records creator')
          (:sender_familyname_prev 'sender familyname prev')
          (:note 'note')
          (rdfs:comment 'comment')
          (:archival_organization_as_recorded 'archival organization as recorded')
          (:series_as_recorded 'series as recorded')
          (:referenced_actor_as_recorded 'referenced actor as recorded')
          (:referenced_place_as_recorded 'referenced place as recorded')
          (dct:language 'language')
        }
      ?metadata__id ?prop ?v .
      BIND(CONCAT(?prop_label, ': ', STR(?v)) AS ?record_value ) 
    }
  }
}
`

export const letterMetadataInstancePageQueryQLever = `
SELECT * 
  WHERE { 
  BIND (<ID> as ?id)
    BIND (?id as ?uri__id)
    BIND (STR(?id) as ?uri__prefLabel)
    BIND (?id as ?uri__dataProviderUrl)
    {
    BIND (<ID> as ?id)
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
    }
    UNION
    {
    BIND (<ID> as ?id)
    ?id :metadata ?metadata__id .
    BIND (?metadata__id AS ?metadata__prefLabel)
    BIND (?metadata__id AS ?metadata__dataProviderUrl)
      {
    BIND (<ID> as ?id)
    ?id :metadata ?metadata__id .
        ?metadata__id :original_record ?original_record 
      }
      UNION
      { 
      BIND (<ID> as ?id)
      ?id :metadata ?metadata__id .
        ?metadata__id :source_url|:source_api_url ?source_url__id . 
        BIND(?source_url__id AS ?source_url__prefLabel)
        BIND(?source_url__id AS ?source_url__dataProviderUrl)
      }
      UNION
      {
        BIND (<ID> as ?id)
        ?id :metadata ?metadata__id .
        ?created_letter__id :metadata ?metadata__id ;
          skos:prefLabel ?created_letter__prefLabel .
        
        OPTIONAL { ?metadata__id foaf:page ?_external }
        BIND (CONCAT(IF(BOUND(?_external), "/digitaleditions/page/", "/letters/page/"), REPLACE(STR(?created_letter__id), "^.*\\\\/(.+)", "$1")) AS ?created_letter__dataProviderUrl)
        # BIND(CONCAT("/letters/page/", REPLACE(STR(?created_letter__id), "^.*\\\\/(.+)", "$1")) AS ?created_letter__dataProviderUrl)
      }
      UNION
      {
      BIND (<ID> as ?id)
      ?id :metadata ?metadata__id .
        VALUES (?prop ?prop_label) {
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
          (:source_filename 'source filename')
          (:sending_place 'place of sending as recorded')
          (:receiving_place 'place of receiving as recorded')
          (:summary 'summary')
          (:type 'type')
          (:recipient_class 'recipient class')
          (:recipient_familyname 'recipient familyname')
          (:recipient_familyname_prev 'recipient familyname prev')
          (:recipient_firstname 'recipient firstname')
          (:recipient_comment 'comment about recipient')
          (:records_creator_as_recorded 'records creator')
          (:sender_familyname_prev 'sender familyname prev')
          (:note 'note')
          (rdfs:comment 'comment')
          (:archival_organization_as_recorded 'archival organization as recorded')
          (:series_as_recorded 'series as recorded')
          (:referenced_actor_as_recorded 'referenced actor as recorded')
          (:referenced_place_as_recorded 'referenced place as recorded')
          (dct:language 'language')
        }
      ?metadata__id ?prop ?v .
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
  (REPLACE(?_from__label, ' [(][fl. 0-9-]+[)]$', '') AS ?from__label)
  (REPLACE(?_to__label, ' [(][fl. 0-9-]+[)]$', '') AS ?to__label)
  ?type
  ?year
  (xsd:date(CONCAT(STR(?year),'-01-01')) AS ?date)
  (COUNT(DISTINCT ?id) AS ?count)
WHERE {

  { SELECT DISTINCT ?id WHERE {
      { 
        SELECT DISTINCT ?actor WHERE {
          ?id a :Letter .
          <FILTER>
          
          ?id portal:recipient|portal:sender ?actor
        }
        GROUP BY ?actor
        ORDER BY DESC(COUNT(?id))
        LIMIT 25
      }
      ?id portal:recipient|portal:sender ?actor
    } LIMIT 400000
  }

  <FILTER>

  ?id portal:recipient/skos:prefLabel ?_to__label ; 
      :estimated_year ?year ;
      portal:sender/skos:prefLabel ?_from__label .

  VALUES ?type { "from" "to" }
} 
GROUP BY ?_from__label ?_to__label ?type ?year
ORDER BY DESC(?count)
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
  
  ?letter :was_sent_from|:was_sent_to ?id .
  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .

} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  FILTER (LANG(?_label)='<LANG>')
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const peopleRelatedTo = `
{ 
  SELECT DISTINCT ?id ?person__id
  (CONCAT(?_plabel, ' (', STR(COUNT(DISTINCT ?sent_letter)), '+', STR(COUNT(DISTINCT ?received_letter)), ')') AS ?person__prefLabel) 
  (CONCAT("/actors/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  WHERE {

      BIND (<ID> as ?id)
      <FILTER>
	    
      { 
        ?letter_id :was_sent_from ?id ; portal:sender ?person__id .
        BIND (?letter_id AS ?sent_letter)
      }
      UNION
      { 
        ?letter_id :was_sent_to ?id ; portal:recipient ?person__id .
        BIND (?letter_id AS ?received_letter)
      }
     	
      ?person__id skos:prefLabel ?_plabel
      
    } GROUP BY ?id ?person__id ?_plabel
    ORDER BY DESC( COUNT(DISTINCT ?sent_letter)+ COUNT(DISTINCT ?received_letter))
  }
`

export const csvQueryLetters = `
  SELECT DISTINCT ?id ?label 
  (GROUP_CONCAT(STR(?sender_id); separator="|") AS ?sender_ids)
  (GROUP_CONCAT(?sender; separator="|") AS ?senders)
  (GROUP_CONCAT(STR(?recipient_id); separator="|") AS ?recipient_ids)
  (GROUP_CONCAT(?recipient; separator="|") AS ?recipients)
  (GROUP_CONCAT(?timespan; separator="|") AS ?timespans)
  ?datasource ?fonds
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
      ?id :original_data_provider/skos:prefLabel ?datasource .
      FILTER(LANG(?datasource)='en')
    }
  }
  GROUP BY ?id ?label ?datasource ?fonds
  # ORDER BY ?label
  LIMIT 50000`

export const sendingPlacesHeatmapQuery = `
  SELECT DISTINCT ?id ?lat ?long (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>

    ?id :was_sent_from [ geo:lat ?lat ; geo:long ?long ]
  }
`

export const letterEmbedInstancePageQuery = `
SELECT ?id ?url 
  WHERE { 
  BIND (<ID> as ?id)
  {
    ?id :metadata ?_metadata .
    {
      ?_metadata foaf:page ?url .
    }
  }
}
`

