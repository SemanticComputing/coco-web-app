export const snellmanProperties = `
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  # BIND(CONCAT("/letters/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  ?id dc:source ?prefLabel__dataProviderUrl .

  BIND(?id as ?uri__id)
  BIND(STR(?id) as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
}
UNION
{
  ?id dc:creator ?source__id . 
  ?source__id skos:prefLabel ?source__prefLabel . 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?source__id), "^.*\\\\/(.+)", "$1")) AS ?source__dataProviderUrl)
}
UNION
{
  ?id snellman:letterReceiver ?target__id . 
  ?target__id skos:prefLabel ?target__prefLabel .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
UNION
{
  ?id dc:relation ?relatedEntity__id .
  ?relatedEntity__id skos:prefLabel ?relatedEntity__prefLabel .
  #BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
  UNION
{
  ?id sns:entity_instance/^sns:instance ?nlpEntity__id .
  ?nlpEntity__id skos:prefLabel ?nlpEntity__prefLabel .
  ?nlpEntity__id owl:sameAs ?anySameAs .
  #BIND(CONCAT("/actors/page/", REPLACE(STR(?target__id), "^.*\\\\/(.+)", "$1")) AS ?target__dataProviderUrl)
}
`
