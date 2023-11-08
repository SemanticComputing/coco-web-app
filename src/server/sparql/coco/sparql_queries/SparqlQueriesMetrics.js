export const metricPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    SELECT ?id ?highest__id ?highest__prefLabel ?highest__dataProviderUrl {
      ?highest__id :has_statistic [
        a ?id ;
        :value ?_value 
        ] ;
          skos:prefLabel ?_label .
      BIND(CONCAT("/actors/page/", REPLACE(STR(?highest__id), "^.*\\\\/(.+)", "$1")) AS ?highest__dataProviderUrl)
      BIND (CONCAT(?_label, ': ', STR(?_value)) AS ?highest__prefLabel)
    } ORDER BY DESC(?_value) LIMIT 20
  }
  UNION 
  {
    ?id rdfs:subClassOf/^rdfs:subClassOf ?related__id .
    FILTER (?related__id != ?id)
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/metrics/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`
