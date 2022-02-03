export const fullTextSearchProperties = `
VALUES (?type__id ?type__prefLabel ?pagetype) 
{ 
  (crm:E21_Person "Person" "/actors")
  (crm:E74_Group "Group" "/actors")
  (crm:E53_Place "Place" "/places")
}

?id a ?type__id .  
?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`
