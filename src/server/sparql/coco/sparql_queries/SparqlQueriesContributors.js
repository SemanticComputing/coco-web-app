const perspectiveID = 'contributors'

export const contributorPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND ("(Under construction)" AS ?prefLabel__prefLabel)
    BIND ("#" AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=300") as ?image__url)
  }

  BIND ("TBA" AS ?letter_view)
  BIND ("TBA" AS ?dataset_description)

`