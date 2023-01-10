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
  # FILTER (!REGEX(STR(?source__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  ?id cocos:letter/cocos:was_addressed_to ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel . 
  # FILTER (!REGEX(STR(?target__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  { ?id crm:P4_has_time-span ?productionTimespan__id }
  UNION
  { ?id cocos:inferredDate ?productionTimespan__id }

  OPTIONAL { ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel }
  OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
  OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
}
UNION
{ 
  ?id cocos:letter/dct:language ?language__id . 
  ?language__id skos:prefLabel ?language__prefLabel .
  BIND (?language__id AS ?language__dataProviderUrl)
}
UNION 
{ 
  ?id cocos:letter/cocos:metadata/dct:source ?datasource__id .
  ?datasource__id skos:prefLabel ?datasource__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?datasource__id), "^.*\\\\/(.+)", "$1")) AS ?datasource__dataProviderUrl)
}
UNION 
{
  ?id cocos:was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
  
  OPTIONAL {
    ?from__id crm:P89_falls_within+ ?countryfrom__id .
    ?countryfrom__id a cocos:Country .
    ?countryfrom__id skos:prefLabel ?countryfrom__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?countryfrom__id), "^.*\\\\/(.+)", "$1")) AS ?countryfrom__dataProviderUrl)
  }
}
`

export const letterPropertiesInstancePage = `

{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)

  BIND(?id as ?uri__id)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id cocos:letter/cocos:metadata/rdfs:comment ?comment .
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
  ?id cocos:letter/cocos:was_addressed_to ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel . 
  FILTER (!REGEX(STR(?target__prefLabel), 'unknown', 'i'))
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  { ?id crm:P4_has_time-span ?productionTimespan__id }
  UNION
  { ?id cocos:inferredDate ?productionTimespan__id }

  OPTIONAL { ?productionTimespan__id skos:prefLabel ?productionTimespan__prefLabel }
  OPTIONAL { ?productionTimespan__id crm:P82a_begin_of_the_begin ?productionTimespan__start }
  OPTIONAL { ?productionTimespan__id crm:P82b_end_of_the_end ?productionTimespan__end }
}
UNION
{ 
  ?id cocos:letter/dct:language ?language__id . 
  ?language__id skos:prefLabel ?language__prefLabel .
  BIND (?language__id AS ?language__dataProviderUrl)
}
UNION
{ 
  ?id cocos:letter/cocos:metadata/dct:source ?datasource__id .
  ?datasource__id skos:prefLabel ?datasource__prefLabel .
  BIND(CONCAT("/sources/page/", REPLACE(STR(?datasource__id), "^.*\\\\/(.+)", "$1")) AS ?datasource__dataProviderUrl)
}
UNION 
{
  ?id cocos:was_sent_from ?from__id .
  ?from__id skos:prefLabel ?from__prefLabel .
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
`

// # https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
//  in yasgui: https://api.triplydb.com/s/rcZVxZsHf
export const lettersMigrationsQuery = `
  SELECT DISTINCT ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  (COUNT(DISTINCT ?letter) as ?instanceCount)
    WHERE {
      <FILTER>
      ?letter cocos:was_sent_from ?from__id ;
              cocos:was_sent_to ?to__id ;
              a cocos:Production .   
      ?from__id skos:prefLabel ?from__prefLabel ; 
                geo:lat ?from__lat ;
                geo:long ?from__long .
      BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
      ?to__id skos:prefLabel ?to__prefLabel ;
              geo:lat ?to__lat ;
              geo:long ?to__long .
      BIND(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
      BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1") )) as ?id)
      FILTER(?from__id != ?to__id)
    }
    GROUP BY ?id 
    ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
    ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
    ORDER BY desc(?instanceCount)
`

export const lettersMigrationsDialogQuery = `
  SELECT * {
    <FILTER>
    ?id cocos:was_sent_from <FROM_ID> ;
        cocos:was_sent_to <TO_ID> ;
        skos:prefLabel ?prefLabel .
    BIND(CONCAT("/letters/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
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
