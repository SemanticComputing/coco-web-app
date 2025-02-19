const perspectiveID = 'actors'

export const actorPropertiesFacetResults = `
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__dataProviderUrl)
  BIND (?id as ?uri__prefLabel)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (CONCAT("/actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id :out_degree ?numSent
  }
  UNION
  {
    ?id :in_degree ?numReceived
  }
  UNION
  { 
    ?id :floruit ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  {
    ?id bioc:has_gender/skos:prefLabel ?gender
  }
  UNION
    { ?id foaf:page ?external__id . 
      OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
      OPTIONAL { ?external__id skos:prefLabel ?external__label }
      BIND (COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
      BIND (?external__id AS ?external__dataProviderUrl)
    }
  UNION
  {
    ?prx :proxy_for ?id .
    {
      ?prx a/skos:prefLabel ?type
    }
    UNION
    {
      ?prx :birthDate ?birthDateTimespan__id .
      ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
      OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
      OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
    }
    UNION
    { 
      ?prx :deathDate ?deathDateTimespan__id .
      ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
      OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
      OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
    }
    UNION
    {
      ?prx sch:image ?image__id ;
        skos:prefLabel ?image__description ;
        skos:prefLabel ?image__title .
      BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=300") as ?image__url)
    }
    UNION
    {
      ?prx dct:source/skos:prefLabel ?datasource
    }
}
`

export const actorPropertiesInstancePage = `
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__prefLabel)
  BIND (?id as ?uri__dataProviderUrl)

  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND (CONCAT("/actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  { ?id :out_degree ?numSent }
  UNION
  { ?id :in_degree ?numReceived }
  UNION
  { 
    ?id :floruit ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  { ?id bioc:has_gender/skos:prefLabel ?gender }
  UNION
  { 
    ?id foaf:page ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND (COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id
      ?similar__id
      ?similar__prefLabel
      (CONCAT("/actors/page/", REPLACE(STR(?similar__id), "^.*\\\\/(.+)", "$1")) AS ?similar__dataProviderUrl)
      WHERE {
      [] :proxy_for ?id ;
        (skosxl:prefLabel|skosxl:altLabel)/skos:closeMatch? ?_label .
      [] skosxl:prefLabel|skosxl:altLabel ?_label ;
        :proxy_for ?similar__id .
      FILTER (?similar__id != ?id)
      ?similar__id skos:prefLabel ?similar__prefLabel 
    }
  }
  UNION
  { 
    ?prx :proxy_for ?id .
    { ?prx a/skos:prefLabel ?type }
    UNION 
    { 
      GRAPH ?g { ?prx skos:prefLabel ?altLabel__id }
      BIND (?altLabel__id AS ?altLabel__prefLabel)
      BIND (?altLabel__id AS ?altLabel__dataProviderUrl)
      
      ?g skos:altLabel ?altLabel__source__prefLabel
      BIND (?prx AS ?altLabel__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?altLabel__source__dataProviderUrl)
    }
    UNION
    {
      GRAPH ?g { ?prx bioc:has_occupation ?occupation__id }
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      BIND (CONCAT("/occupations/page/", REPLACE(STR(?occupation__id), "^.*\\\\/(.+)", "$1")) AS ?occupation__dataProviderUrl)
      
      ?g skos:altLabel ?occupation__source__prefLabel .
      BIND (?prx AS ?occupation__source__id)
      # BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?occupation__source__dataProviderUrl)
    }
    UNION
    {
      GRAPH ?g { ?prx :birthDate ?birthDateTimespan__id }
      ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
      OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
      OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
      
      ?g skos:altLabel ?birthDateTimespan__source__prefLabel .
      BIND (?prx AS ?birthDateTimespan__source__id)
      # BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?birthDateTimespan__source__dataProviderUrl)
    }
    UNION
    {
      GRAPH ?g { ?prx :was_born_in_location ?birthPlace__id }
      ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
      FILTER (LANG(?birthPlace__prefLabel) = 'fi')
      
      ?g skos:altLabel ?birthPlace__source__prefLabel .
      BIND (?prx AS ?birthPlace__source__id)
      # BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__source__dataProviderUrl)
    }
    UNION
    {
      GRAPH ?g { ?prx :deathDate ?deathDateTimespan__id }
      ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
      OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
      OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
      
      ?g skos:altLabel ?deathDateTimespan__source__prefLabel .
      BIND (?prx AS ?deathDateTimespan__source__id)
      # BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?deathDateTimespan__source__dataProviderUrl)
      
    }
    UNION
    {
      GRAPH ?g { ?prx :died_at_location ?deathPlace__id }
      ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
      FILTER (LANG(?deathPlace__prefLabel) = 'fi')
      BIND (CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
      
      ?g skos:altLabel ?deathPlace__source__prefLabel .
      BIND (?prx AS ?deathPlace__source__id)
      #  BIND (CONCAT("/proxies/page/", REPLACE(STR(?prx), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__source__dataProviderUrl)
      
    }
    UNION
    {
      SELECT ?prx ?knownLocation__id 
          (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?knownLocation__prefLabel)
          (CONCAT("/places/page/", REPLACE(STR(?knownLocation__id), "^.*\\\\/(.+)", "$1")) AS ?knownLocation__dataProviderUrl)
      WHERE {
          ?_evt :was_authored_by ?prx ; :was_sent_from ?knownLocation__id . 
          ?knownLocation__id a [] ; skos:prefLabel ?_label . 
      } 
      GROUPBY ?prx ?_label ?knownLocation__id
      ORDERBY DESC(COUNT(DISTINCT ?_evt))
    }
    UNION
    {
      ?prx dct:description ?description
    }
    UNION
    {
      ?prx sch:image ?image__id ;
        skos:prefLabel ?image__description ;
        skos:prefLabel ?image__title .
        BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
      }
    UNION
    {
      ?prx dct:source/skos:prefLabel ?datasource
    }
    UNION
    {
      GRAPH ?g {
        ?prx bioc:has_family_relation [ bioc:inheres_in/:proxy_for ?relative__id ; skos:prefLabel ?relative__prefLabel ]
      }
      FILTER (LANG(?relative__prefLabel)='en')
      BIND (CONCAT("/actors/page/", REPLACE(STR(?relative__id), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
      
      ?g skos:altLabel ?relative__source__prefLabel 
      BIND (?relative__id as ?relative__source__id)
      BIND (?relative__dataProviderUrl as ?relative__source__dataProviderUrl)
    }
    UNION
    {
      GRAPH ?g {
        ?prx bioc:has_person_relation [ bioc:inheres_in/:proxy_for ?acquaintance__id ; skos:prefLabel ?acquaintance__prefLabel ]
      }
      FILTER (LANG(?acquaintance__prefLabel)='en')
      BIND (CONCAT("/actors/page/", REPLACE(STR(?acquaintance__id), "^.*\\\\/(.+)", "$1")) AS ?acquaintance__dataProviderUrl)
      
      ?g skos:altLabel ?acquaintance__source__prefLabel .
      BIND (?acquaintance__id as ?acquaintance__source__id)
      BIND (?acquaintance__dataProviderUrl as ?acquaintance__source__dataProviderUrl)
    }
  }
`

export const actorLettersInstancePageQuery = `
SELECT * 
  WHERE {
    BIND (<ID> as ?id)
    BIND (?id as ?uri__id)
    BIND (?id as ?uri__prefLabel)
    BIND (?id as ?uri__dataProviderUrl)
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
    }
    UNION
    {
      ?id :out_degree ?numSent 
    }
    UNION
    {
      ?id :in_degree ?numReceived
    }
    UNION
    {
      ?id :num_correspondences ?numCorrespondences
    }
    UNION
    {
      ?id :floruit/skos:prefLabel ?floruit
    }
    UNION
    {
      ?id :receiving_time/skos:prefLabel ?receiving_time
    }
    UNION
    {
      SELECT DISTINCT ?id ?metrics__id ?metrics__dataProviderUrl ?metrics__prefLabel
      WHERE {
        ?id :has_statistic [
          :value ?stat_value ;
          :rank ?stat_rank ;
          a ?metrics__id ] .
        ?metrics__id skos:prefLabel ?stat_label .
        BIND (CONCAT(?stat_label, ': ', STR(?stat_value), ' (#', STR(?stat_rank),")") AS ?metrics__prefLabel)
        BIND (CONCAT("/metrics/page/", REPLACE(STR(?metrics__id), "^.*\\\\/(.+)", "$1")) AS ?metrics__dataProviderUrl)
      }
    }
    UNION
    {
      { SELECT ?id ?tie__id ?tie__count ?tie__prefLabel WHERE {
        { ?tie__id :actor1 ?id }
        UNION
        { ?tie__id :actor2 ?id }
        ?tie__id :num_letters ?tie__count ;
                   skos:prefLabel ?_lbl .
        BIND (CONCAT(?_lbl, ' (', STR(?tie__count), ')') AS ?tie__prefLabel)
        } ORDER BY DESC(?tie__count) }
      FILTER (BOUND(?tie__id))
      BIND (CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
    }
    UNION
    {
    	?prx :proxy_for ?id
      {
        SELECT DISTINCT ?prx ?in_fonds__id
      (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), '+', STR(COUNT(DISTINCT ?_evt2)), ')') AS ?in_fonds__prefLabel)
          (CONCAT("/fonds/page/", REPLACE(STR(?in_fonds__id), "^.*\\\\/(.+)", "$1")) AS ?in_fonds__dataProviderUrl)
        WHERE {
          {
            ?_evt :was_authored_by ?prx ;
              :fonds ?in_fonds__id
          }
          UNION
          {
            ?_evt2 :was_addressed_to ?prx ; 
              :fonds ?in_fonds__id
          }
          UNION
          {
            ?in_fonds__id :archival_organization ?prx ; a :Fonds .
          }
          ?in_fonds__id skos:prefLabel ?_label ;
            a [] .
          OPTIONAL { ?in_fonds__id :archival_organization/:proxy_for/skos:prefLabel ?_org . 
            BIND (CONCAT(' (', str(?_org), ') ') AS ?_org2)
          }
        }
        GROUPBY ?prx ?_label ?in_fonds__id
        ORDERBY DESC(COUNT(DISTINCT ?_evt))
      }
      UNION
      {
        ?created_fonds__id :records_creator ?prx ;
                          skos:prefLabel ?created_fonds__prefLabel .
        BIND (CONCAT("/fonds/page/", REPLACE(STR(?created_fonds__id), "^.*\\\\/(.+)", "$1")) AS ?created_fonds__dataProviderUrl)
      }
      UNION
      {
        ?prx (^:was_authored_by)/:archival_organization [ 
          a [] ;
          :proxy_for/skos:prefLabel ?archival_organization ]
      }
      UNION
      {
        ?prx (^:was_addressed_to)/:archival_organization [ 
          a [] ; 
          :proxy_for/skos:prefLabel ?archival_organization ]
      }
      UNION
      { 
        SELECT DISTINCT ?prx ?sentletter__id ?sentletter__prefLabel ?sentletter__dataProviderUrl
        WHERE {
          ?prx ^:was_authored_by ?sentletter__id .
            ?sentletter__id a :Letter ;
              skos:prefLabel ?sentletter__prefLabel .
          BIND (CONCAT("/letters/page/", REPLACE(STR(?sentletter__id), "^.*\\\\/(.+)", "$1")) AS ?sentletter__dataProviderUrl)
          OPTIONAL { ?sentletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
        } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?sentletter__prefLabel))
      }
      UNION
      { SELECT DISTINCT ?prx ?mentioningletter__id ?mentioningletter__prefLabel ?mentioningletter__dataProviderUrl
        WHERE {
          ?prx ^:referenced_actor ?mentioningletter__id .
            ?mentioningletter__id a :Letter ;
              skos:prefLabel ?mentioningletter__prefLabel .
          BIND (CONCAT("/letters/page/", REPLACE(STR(?mentioningletter__id), "^.*\\\\/(.+)", "$1")) AS ?mentioningletter__dataProviderUrl)
          OPTIONAL { ?mentioningletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
        } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?mentioningletter__prefLabel))
      }
      UNION 
      { SELECT DISTINCT ?prx ?receivedletter__id ?receivedletter__prefLabel ?receivedletter__dataProviderUrl
        WHERE {
        ?receivedletter__id :was_addressed_to ?prx ;
          a :Letter ;
          skos:prefLabel ?receivedletter__prefLabel .
        BIND (CONCAT("/letters/page/", REPLACE(STR(?receivedletter__id), "^.*\\\\/(.+)", "$1")) AS ?receivedletter__dataProviderUrl)
        OPTIONAL { ?receivedletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
        } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?receivedletter__prefLabel))
      } 
  }
}
`

//  outdated: https://api.triplydb.com/s/U-6MA_haY
export const letterLinksQuery = `
SELECT DISTINCT ?source ?target 
  ?weight 
  (STR(?weight) AS ?prefLabel)
WHERE 
{
  { 
    SELECT DISTINCT ?actor WHERE 
      { 
        { 
          SELECT DISTINCT ?id2 WHERE { 
            VALUES ?id { <ID> }
            [] :actor1|:actor2 ?id ; :actor1|:actor2 ?id2 
        }
      }
  	  [] :actor1|:actor2 ?id2 ; :actor1|:actor2 ?actor 
    }
  }
    
  ?tie (:actor1|:actor2) ?actor ;
      :actor1 ?source ;
      :actor2 ?target ;
      :num_letters ?weight .
  
  # no self links
  FILTER (?source!=?target && ?weight>0)
} 
`

export const peopleEventPlacesQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?person) AS ?instanceCount)
WHERE {
  <FILTER>
  {
    ?person portal:known_location ?id 
  }
  UNION
  { 
    [] :proxy_for ?person ;
    :was_born_in_location ?id 
  }
  UNION
  { 
    [] :proxy_for ?person ;
    :died_at_location ?id 
  }
  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .

} GROUP BY ?id ?lat ?long
`

export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    { [] :proxy_for ?related__id .
      ?related__id portal:known_location ?id 
    }
    UNION
    { [] :proxy_for ?related__id ;
      :was_born_in_location ?id 
    }
    UNION
    { [] :proxy_for ?related__id ;
      :died_at_location ?id 
    }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/actors/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  } 
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND (COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  BIND (CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

//  TODO: add href to tie
//  query on people facet page tab 'Network'
export const networkLinksQuery_OLD = `
SELECT DISTINCT (?actor as ?source) ?target ?weight (str(?weight) as ?prefLabel)
  WHERE {
    <FILTER>
    ?_tie :actor1 ?actor ;
      :actor2 ?target ;
    :num_letters ?weight .
}
`

export const networkLinksQuery = `
SELECT DISTINCT ?source ?target ?weight (str(?weight) as ?prefLabel)
  WHERE {
    
  { SELECT DISTINCT ?id WHERE {
    
    <FILTER>
  
   [] :actor1|:actor2 ?actor ;
      :actor1|:actor2 ?id .
    } LIMIT 5000 
  }
   [] :actor1|:actor2 ?id ;
      :actor2 ?source ;
      :actor1 ?target ;
    :num_letters ?weight .
}`

export const correspondenceTimelineQuery = `
SELECT DISTINCT ?id ?source ?source__label ?target ?target__label ?date ?type ?year
WHERE 
{
VALUES ?node { <ID> } 
{
  ?node ^portal:sender ?letter .
  ?letter a :Letter ;
    portal:recipient ?target .
  ?target skos:prefLabel ?_target__label . 
  BIND (?node AS ?source)
} UNION {
  ?letter portal:recipient ?node ;
    a :Letter .
  ?source ^(portal:sender) ?letter ;
    skos:prefLabel ?_source__label . 
  BIND (?node AS ?target)
}
?target skos:prefLabel ?target__label .
?source skos:prefLabel ?source__label .
?letter :has_time-span/crm:P82a_begin_of_the_begin ?date .
BIND (year(?date) AS ?year)
} ORDER BY ?date
`

export const socialSignatureQuery = `
SELECT (?source AS ?id) (?source__label as ?id__label)
  ?target ?target__label
  ?time_0
WHERE 
{
  VALUES ?node { <ID> }
  {
    ?letter portal:sender ?node ;
      a :Letter ;
      portal:recipient ?target .
  
    BIND (?node AS ?source)
  } UNION {
    ?letter portal:recipient ?node ;
      a :Letter ;
      portal:sender ?source .
    BIND (?node AS ?target)
  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
} `

export const networkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?class ?href
    (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
  WHERE {
    VALUES ?class { :ProvidedActor }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
      skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }

    BIND (REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND (CONCAT("../../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const networkNodesFacetQuery = `
 SELECT DISTINCT ?id ?prefLabel ?class ?href
 (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
 WHERE {
   VALUES ?class { :ProvidedActor }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
    skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }
    
    BIND (REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND (CONCAT("../../actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const topCorrespondenceInstancePageQuery = `
SELECT DISTINCT ?id 
  (REPLACE(?source__label, ' [(][0-9-]+[)]$', '') AS ?from__label)
  (REPLACE(?target__label, ' [(][0-9-]+[)]$', '') AS ?to__label)
  (xsd:date(CONCAT(STR(?year), '-01-01')) AS ?date) 
  ?type
  ?year
  (COUNT(DISTINCT ?letter) AS ?count)
WHERE
{
  VALUES ?id { <ID> }
  {
    ?letter portal:sender ?id ;
      a :Letter ;
      portal:recipient ?target .
    ?target skos:prefLabel ?_target__label .

    BIND ("to" AS ?type)
    BIND (?id AS ?source)
  }
  UNION
  {
    ?letter portal:recipient ?id ;
      a :Letter ;
      portal:sender ?source .
    ?source skos:prefLabel ?_source__label .

    BIND (?id AS ?target)
    BIND ("from" AS ?type)

  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :estimated_year ?year .

  OPTIONAL {
    [] :proxy_for ?id ;
       :birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND (year(?birth_end) AS ?birth)
  }
  FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

  OPTIONAL {
    [] :proxy_for ?id ; 
      :deathDate/crm:P82b_end_of_the_end ?death_end .
    BIND (year(?death_end) AS ?death)
  }
  FILTER (!bound(?death) || (bound(?death) && ?year<=?death))
} GROUPBY ?id ?source__label ?target__label ?year ?type
`

export const sentReceivedQuery = `
SELECT DISTINCT (STR(?year) as ?category) 
  (count(distinct ?sent_letter) AS ?sentCount) 
  (count(distinct ?received_letter) AS ?receivedCount) 
  ((?sentCount + ?receivedCount) as ?allCount)
WHERE {
  BIND (<ID> as ?id)

  {
    ?sent_letter portal:sender ?id ; 
                 :estimated_year ?year
  } 
  UNION 
  {
    ?received_letter portal:recipient ?id ;
	                 :estimated_year ?year
  }
  FILTER (BOUND(?year))

  OPTIONAL {
    [] :proxy_for ?id ;
        :birthDate/crm:P82a_begin_of_the_begin ?_birth .
    BIND (year(?_birth) AS ?birth)
  }
  FILTER ((bound(?birth) && ?birth<?year) || !bound(?birth))

  OPTIONAL {
    [] :proxy_for ?id ;
        :deathDate/crm:P82b_end_of_the_end ?_death .
    BIND (year(?_death) AS ?death)
  }
  FILTER ((bound(?death) && ?year<=?death) || !bound(?death))
} 
GROUP BY ?year ORDER BY ?year
`

export const sentReceivedInstancePageQuery = `
  SELECT DISTINCT (STR(?year) as ?category) 
    (count(distinct ?sent_letter) AS ?sentCount) 
    (count(distinct ?received_letter) AS ?receivedCount) 
    ((?sentCount + ?receivedCount) as ?allCount)
  WHERE {
    BIND (<ID> as ?id)
    {
      ?sent_letter portal:sender ?id ; 
        a :Letter ;
        :estimated_year ?year .
    } 
    UNION 
    {
      ?received_letter portal:recipient ?id ;
        a :Letter ;
        :estimated_year ?year .
    }
    FILTER (BOUND(?year))

    OPTIONAL {
      [] :proxy_for ?id ;
        :birthDate/crm:P82b_end_of_the_end ?birth_end .
      BIND (year(?birth_end) AS ?birth)
    }
    FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

    OPTIONAL {
      [] :proxy_for ?id ;
       :deathDate/crm:P82b_end_of_the_end ?death_end .
       BIND (year(?death_end) AS ?death)
    }
    FILTER (!bound(?death) || (bound(?death) && ?year<=?death))
  }
  GROUP BY ?year
  ORDER BY ?year
`

export const csvQueryActors = `
SELECT DISTINCT ?id ?label ?type ?gender 
?prefix ?family_name ?given_name
?number_of_sent_letters ?number_of_received_letters 
(SAMPLE(?birth) AS ?birth_time) ?floruit
(SAMPLE(?death) AS ?death_time)

WHERE {
  
  <FILTER> 
  FILTER(BOUND(?id))

  ?id skos:prefLabel ?label .

  OPTIONAL {
    ?id skosxl:prefLabel ?xl .
    OPTIONAL { ?xl sch:familyName ?family_name }
    OPTIONAL { ?xl sch:givenName ?given_name }
    OPTIONAL { ?xl :name_addition ?prefix }
  }
  OPTIONAL {
    ?id :out_degree ?number_of_sent_letters
  }
  OPTIONAL
  {
    ?id :in_degree ?number_of_received_letters
  }
  OPTIONAL
  { 
    ?id :floruit/skos:prefLabel ?floruit 
  }
  OPTIONAL
  {
    ?id bioc:has_gender/skos:prefLabel ?gender
  }
  
  ?proxy :proxy_for ?id ; a/skos:prefLabel ?type
  
  OPTIONAL
  {
    ?proxy :birthDate/skos:prefLabel ?birth
  }
  OPTIONAL
  {
    ?proxy :deathDate/skos:prefLabel ?death
  }
} 
GROUPBY ?id ?label ?type ?gender
  ?prefix ?family_name ?given_name
  ?number_of_sent_letters ?number_of_received_letters ?floruit 
ORDER BY DESC(?number_of_sent_letters) ?label `
