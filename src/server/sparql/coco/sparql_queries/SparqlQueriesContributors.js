const perspectiveID = 'contributors'

export const contributorPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    FILTER (LANG(?prefLabel__id) = '<LANG>')
    BIND (?prefLabel__id AS ?prefLabel__prefLabel)
    BIND (CONCAT('/<LANG>/letters/faceted-search/table?page=0&constraints=[{"facetId":"data_provider_facet","filterType":"uriFilter","value":{"path":[14],"node":{"id":"', STR(?id),'","prefLabel":"', STR(?prefLabel__id), '"}}}]') AS ?prefLabel__dataProviderUrl)  } 
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
  }
  UNION
  { 
    ?id foaf:page ?external__id .
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    BIND (STR(?external__id) AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    ?id portal:known_location ?location__id .
    BIND (CONCAT("/places/page/", REPLACE(STR(?location__id), "^.*\\\\/(.+)", "$1")) AS ?location__dataProviderUrl)
    ?location__id skos:prefLabel ?location__prefLabel 
  }
  BIND ("TBA" AS ?letter_view)
  BIND ("TBA" AS ?dataset_description)

`