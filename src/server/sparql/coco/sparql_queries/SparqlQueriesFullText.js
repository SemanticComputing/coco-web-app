export const fullTextSearchProperties = `
VALUES (?type__id ?type__label ?pagetype ?value_prop)
{
  (:ProvidedActor "Actor" "/actors" :out_degree)
  #(crm:E21_Person "Person" "/actors" :out_degree)
  #(crm:E74_Group "Group" "/actors" :out_degree)
  #(:Family "Family" "/actors" :out_degree)
  (crm:E53_Place "Place" "/places" :number_of_events)
  (:Fonds "Fonds" "/fonds" :number_of_letters)
}

?id a ?type__id .
OPTIONAL { ?id :proxy_for ?provided }
BIND (COALESCE(?provided, ?id) AS ?match)

OPTIONAL { ?match portal:portal_class/skos:prefLabel ?type__class }
BIND (COALESCE(?type__class, ?type__label) AS ?type__prefLabel)

?match skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?match), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL { 
  ?match ?value_prop ?_num .
  BIND(REPLACE(CONCAT("     ", str(?_num)), "^.*(.{5})$", "$1")  AS ?number_of_activities)
}

OPTIONAL {
  ?match ^:proxy_for? [ 
        sch:image ?image__id ;
    	skos:prefLabel ?image__description ;
    	skos:prefLabel ?image__title 
    ]
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}
`
