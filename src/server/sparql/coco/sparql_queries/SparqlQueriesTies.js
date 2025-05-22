// const perspectiveID = 'ties'
export const sahaUrl = '"http://demo.seco.tkk.fi/saha/project/resource.shtml?uri="'
export const sahaModel = '"&model=coco"'

//  http://demo.seco.tkk.fi/saha/project/resource.shtml?uri=http%3A%2F%2Femlo.bodleian.ox.ac.uk%2Fid%2F822ba92b-3ccf-4f1e-b776-e87aca45c866&model=emlo
//  TODO: add suitable letter properties, e.g. subject etc.
//  TODO: fix node links, e.g. copy and change url in networkNodesQuery
export const tiePropertiesInstancePage = `
?id a :Tie .

{
  ?id skos:prefLabel ?prefLabel
}
UNION
{
  ?id :num_letters ?num_letters
}
UNION
{ 
  SELECT DISTINCT ?id ?node__id 
    (CONCAT(?_label, 
      ' [', 
      (STR(COUNT(DISTINCT ?_sent))),
      ']') AS ?node__prefLabel)
    
    (CONCAT("/actors/page/", REPLACE(STR(?node__id), "^.*\\\\/(.+)", "$1")) AS ?node__dataProviderUrl)
    WHERE {
  	?id :actor1|:actor2 ?node__id .
  	?node__id skos:prefLabel ?_label 
    OPTIONAL {
        ?_sent :in_tie ?id ; portal:sender ?node__id
    }
  } GROUPBY ?id ?node__id ?_label
}
UNION
{ 
  ?id :actor1|:actor2 ?node__id .
  ?node__id skos:prefLabel ?node__prefLabel 
  BIND(CONCAT("/actors/page/", REPLACE(STR(?node__id), "^.*\\\\/(.+)", "$1")) AS ?node__dataProviderUrl)
}
UNION
{
  {
    SELECT DISTINCT ?id ?letter__id ?letter__prefLabel  
    (CONCAT(IF(?edition = <http://ldf.fi/schema/coco/not_in_editions>, "/letters/page/", "/digitaleditions/page/"), REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
    # (CONCAT("/letters/page/", REPLACE(STR(?letter__id), "^.*\\\\/(.+)", "$1")) AS ?letter__dataProviderUrl)
    WHERE {

      ?letter__id :in_tie ?id ;
                  skos:prefLabel ?letter__prefLabel ;
                  :digital_edition ?edition .

      OPTIONAL { ?letter__id :has_time-span/crm:P82a_begin_of_the_begin ?letter__timespan }

    } 
    ORDER BY COALESCE(STR(?letter__timespan), CONCAT("9999", ?letter__prefLabel))
  }
}
UNION
{
  ?id :actor1 ?ego__id ; :actor2 ?alter__id .
  [] :actor1|:actor2 ?ego__id ; :actor1|:actor2 ?other__id .
  [] :actor1|:actor2 ?alter__id ; :actor1|:actor2 ?other__id .
  FILTER (?other__id!=?ego__id && ?other__id!=?alter__id)

  ?other__id skos:prefLabel ?other__prefLabel .
  BIND(CONCAT("/actors/page/", REPLACE(STR(?other__id), "^.*\\\\/(.+)", "$1")) AS ?other__dataProviderUrl)
}
`

export const tieTimelineQuery = `
SELECT DISTINCT 
  ?id 
  ?sender1__label 
  ?sender2__label 
  ?year 
  (xsd:date(CONCAT(STR(?year), '-01-01')) AS ?date)  
  ?type
  (COUNT(DISTINCT ?letter) AS ?count)
  WHERE {
  
  BIND(<ID> as ?id)
  
  ?letter :in_tie ?id ;
          :estimated_year ?year .
  
  {
    ?id :actor1 [ ^portal:sender ?letter ; skos:prefLabel ?sender1__label ]
    BIND ("sender1" AS ?type)
  }
  UNION
  {
    ?id :actor2 [ ^portal:sender ?letter ; skos:prefLabel ?sender2__label ]
    BIND ("sender2" AS ?type)
  }
} GROUPBY ?id ?sender1__label ?sender2__label ?year ?type
`

export const tieTimelineYearsQuery = `
SELECT DISTINCT (STR(?year) as ?category) ?label 
(count(distinct ?letter) AS ?count)
  WHERE {
  
  BIND(<ID> as ?id)
  
  ?letter :in_tie ?id ;
          :estimated_year ?year .
 
  ?id (:actor1|:actor2) [ ^portal:sender ?letter ; skos:prefLabel ?label ]
  
  }
  GROUP BY ?year ?label
  ORDER BY ?year 
`

export const tieLinksQuery = `
SELECT DISTINCT ?source ?target 
  ?weight (STR(?weight) AS ?prefLabel)
WHERE {
  { VALUES ?id { <ID> }
    VALUES ?class { :ProvidedActor }
    ?id a ?class .
  } UNION { 
    VALUES ?_tie { <ID> }
    ?_tie :actor1|:actor2 ?id 
  } 
      
  FILTER (BOUND(?id))
  
  {
    ?tie :actor1 ?id ;
      :actor2 ?target
    BIND(?id AS ?source)
  } UNION {
    ?tie :actor1 ?source ; 
    :actor2 ?id
    BIND(?id AS ?target)
  }
  ?tie :num_letters ?weight .

  # filter 'unknown' etc entries
  ?source skos:prefLabel ?source__label . 
  ?target skos:prefLabel ?target__label . 

  FILTER (?source!=?target)
}
`

export const tieNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?class ?href
  WHERE {
    VALUES ?class { :ProvidedActor }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
     skos:prefLabel ?_label .
    BIND(REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND(CONCAT("../../../actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`
