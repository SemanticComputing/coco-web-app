export const sourcePropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  }
  UNION
  {
    SELECT ?id (COUNT(DISTINCT ?ltr) AS ?num_letters) {
      ?ltr :source ?id
    } GROUP BY ?id
  }
  UNION
  { 
    ?letter__id :source ?id .
    ?letter__id skos:prefLabel ?letter__prefLabel ;
      :digital_edition ?edition .
    BIND(CONCAT(IF(?edition = <http://ldf.fi/schema/coco/not_in_editions>, "/letters/page/", "/digitaleditions/page/"), REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
    # BIND(CONCAT("/letters/page/", REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
  }
`
