export const fullTextSearchProperties = `
VALUES (?type__id ?type__prefLabel ?pagetype ?value_prop) 
{ 
  (:ProvidedActor "Person" "/actors" :out_degree)
  #(crm:E21_Person "Person" "/actors" :out_degree)
  #(crm:E74_Group "Group" "/actors" :out_degree)
  #(:Family "Family" "/actors" :out_degree)
  (crm:E53_Place "Place" "/places" :number_of_events)
  (:Fonds "Fonds" "/fonds" :number_of_letters)
}

?id a ?type__id .  
?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  
BIND(IF (str(?literal) != str(?prefLabel__prefLabel), ?literal, '') AS ?altLabel)

OPTIONAL { 
  ?id ?value_prop ?_num .
  BIND(REPLACE(CONCAT("     ", str(?_num)), "^.*(.{5})$", "$1")  AS ?number_of_activities)
}


OPTIONAL   {
  ?id sch:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}
`
