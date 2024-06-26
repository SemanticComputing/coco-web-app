const perspectiveID = 'actors'

export const actorPropertiesFacetResults = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)

  {
  ?id a ?type__id .
  ?type__id skos:prefLabel ?type__prefLabel .
  BIND (?type__id as ?type_dataProviderUrl)
  }
  UNION
  {
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id :birthDate ?birthDateTimespan__id .
    ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
    OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
    OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
  }
  UNION
  { 
    ?id :deathDate ?deathDateTimespan__id .
    ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
    OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
    OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
  }
  UNION
  { 
    ?id :flourished ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  { ?id :is_related_to ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
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
    ?id bioc:has_gender ?gender__id . 
    ?gender__id skos:prefLabel ?gender__prefLabel .
    BIND(?gender__id as ?gender__dataProviderUrl)
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=300") as ?image__url)
  }
  UNION
  {
    ?id dct:source/skos:prefLabel ?datasource
  }

`

export const actorPropertiesInstancePage = `
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__prefLabel)
  BIND(?id as ?uri__dataProviderUrl)

  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  {
    ?id a ?type__id .
    ?type__id skos:prefLabel ?type__prefLabel .
    BIND (?type__id as ?type_dataProviderUrl)
  }
  UNION
  {
    ?id bioc:has_gender ?gender . 
    ?gender skos:prefLabel ?gender__prefLabel .
    BIND(?gender as ?gender__dataProviderUrl)
  }
  UNION 
  { ?id skos:altLabel ?altLabel }
  UNION
  { ?id bioc:has_occupation/skos:prefLabel ?occupation }
  UNION
  { ?id :is_related_to ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    ?id :birthDate ?birthDateTimespan__id .
    ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
    OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
    OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
  }
  UNION
  {
    ?id :was_born_in_location ?birthPlace__id .
    ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
    FILTER(LANG(?birthPlace__prefLabel) = 'fi')
  }
  UNION
  {
    ?id :deathDate ?deathDateTimespan__id .
    ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
    OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
    OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
  }
  UNION
  {
    ?id :died_at_location ?deathPlace__id .
    ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
    FILTER(LANG(?deathPlace__prefLabel) = 'fi')
  }
  UNION
  { 
    ?id :flourished ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  {
    SELECT ?id ?knownLocation__id 
	    (CONCAT(?_label, ' (', STR(COUNT(DISTINCT ?_evt)), ')') AS ?knownLocation__prefLabel)
    	(CONCAT("/places/page/", REPLACE(STR(?knownLocation__id), "^.*\\\\/(.+)", "$1")) AS ?knownLocation__dataProviderUrl) 
    WHERE {
    	?_evt :was_authored_by ?id ; :was_sent_from ?knownLocation__id . 
    	?knownLocation__id a [] ; skos:prefLabel ?_label . 
    } 
    GROUPBY ?id ?_label ?knownLocation__id 
    ORDERBY DESC(COUNT(DISTINCT ?_evt))
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
    ?id dct:description ?description
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
      BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600") as ?image__url)
    }
  UNION
  {
    ?id dct:source/skos:prefLabel ?datasource
  }
  UNION
  {
    ?id bioc:has_family_relation [ bioc:inheres_in ?relative__id ; skos:prefLabel ?relative__prefLabel ]
    FILTER(LANG(?relative__prefLabel)='en')
    BIND(CONCAT("/actors/page/", REPLACE(STR(?relative__id), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
  }
  UNION
  {
    ?id bioc:has_person_relation [ bioc:inheres_in ?acquaintance__id ; skos:prefLabel ?acquaintance__prefLabel ]
    FILTER(LANG(?acquaintance__prefLabel)='en')
    BIND(CONCAT("/actors/page/", REPLACE(STR(?acquaintance__id), "^.*\\\\/(.+)", "$1")) AS ?acquaintance__dataProviderUrl)
  }
`

export const actorLettersInstancePageQuery = `
  SELECT * 
  WHERE {
    BIND(<ID> as ?id)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__prefLabel)
    BIND(?id as ?uri__dataProviderUrl)
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND (?prefLabel__id as ?prefLabel__prefLabel)
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
        BIND(CONCAT("/metrics/page/", REPLACE(STR(?metrics__id), "^.*\\\\/(.+)", "$1")) AS ?metrics__dataProviderUrl)
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
      BIND(CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
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
      ?id :flourished/skos:prefLabel ?floruit
    }
    UNION
    {
      ?id :receiving_time/skos:prefLabel ?receiving_time
    }
    UNION
    {
      SELECT DISTINCT ?id ?in_fonds__id  
    (CONCAT(?_label, COALESCE(SAMPLE(?_org2), ''), ' (', STR(COUNT(DISTINCT ?_evt)), '+', STR(COUNT(DISTINCT ?_evt2)), ')') AS ?in_fonds__prefLabel)
        (CONCAT("/fonds/page/", REPLACE(STR(?in_fonds__id), "^.*\\\\/(.+)", "$1")) AS ?in_fonds__dataProviderUrl)
      WHERE {
        {
          ?_evt :was_authored_by ?id ; :fonds ?in_fonds__id 
        }
        UNION
        {
          ?_evt2 :was_addressed_to ?id ; :fonds ?in_fonds__id 
        }
        ?in_fonds__id skos:prefLabel ?_label ; a [] .
      OPTIONAL { ?in_fonds__id :archival_organization/skos:prefLabel ?_org . 
        BIND(CONCAT(' (', str(?_org), ') ') AS ?_org2)
      }
      }
      GROUPBY ?id ?_label ?in_fonds__id 
      ORDERBY DESC(COUNT(DISTINCT ?_evt))
    }
    UNION
    {
      ?created_fonds__id :records_creator ?id ;
                        skos:prefLabel ?created_fonds__prefLabel .
      BIND (CONCAT("/fonds/page/", REPLACE(STR(?created_fonds__id), "^.*\\\\/(.+)", "$1")) AS ?created_fonds__dataProviderUrl)
    }
    UNION
    {
      ?id (^:was_authored_by)/:archival_organization [ a [] ; skos:prefLabel ?archival_organization ]
    }
    UNION
    {
      ?id (^:was_addressed_to)/:archival_organization [ a [] ; skos:prefLabel ?archival_organization ]
    }
    UNION
    { 
      SELECT DISTINCT ?id ?sentletter__id ?sentletter__prefLabel ?sentletter__dataProviderUrl
      WHERE {
        ?id ^:was_authored_by ?sentletter__id .
          ?sentletter__id a :Letter ;
            skos:prefLabel ?sentletter__prefLabel .
        BIND(CONCAT("/letters/page/", REPLACE(STR(?sentletter__id), "^.*\\\\/(.+)", "$1")) AS ?sentletter__dataProviderUrl)
        OPTIONAL { ?sentletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
      } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?sentletter__prefLabel))
    }
    UNION
    { SELECT DISTINCT ?id ?mentioningletter__id ?mentioningletter__prefLabel ?mentioningletter__dataProviderUrl
      WHERE {
        ?id ^:referenced_actor ?mentioningletter__id .
          ?mentioningletter__id a :Letter ;
            skos:prefLabel ?mentioningletter__prefLabel .
        BIND(CONCAT("/letters/page/", REPLACE(STR(?mentioningletter__id), "^.*\\\\/(.+)", "$1")) AS ?mentioningletter__dataProviderUrl)
        OPTIONAL { ?mentioningletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
      } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?mentioningletter__prefLabel))
    }
    UNION 
    { SELECT DISTINCT ?id ?receivedletter__id ?receivedletter__prefLabel ?receivedletter__dataProviderUrl
      WHERE {
      ?receivedletter__id :was_addressed_to ?id ;
        a :Letter ;
        skos:prefLabel ?receivedletter__prefLabel .
      BIND(CONCAT("/letters/page/", REPLACE(STR(?receivedletter__id), "^.*\\\\/(.+)", "$1")) AS ?receivedletter__dataProviderUrl)
      OPTIONAL { ?receivedletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
      } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?receivedletter__prefLabel))
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
  
  ?id a crm:E53_Place ; geo:lat ?lat ; geo:long ?long .

  { ?person ^:was_authored_by/:was_sent_from ?id }
  UNION
  { ?person :was_born_in_location ?id }
  UNION
  { ?person :died_at_location ?id }

} GROUP BY ?id ?lat ?long
`

export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    { ?related__id ^:was_authored_by/:was_sent_from ?id }
    UNION
    { ?related__id :was_born_in_location ?id }
    UNION
    { ?related__id :died_at_location ?id }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  } 
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND(COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
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

export const correspondenceTimelineQuery = `SELECT DISTINCT ?id ?source ?source__label ?target ?target__label ?date ?type ?year
WHERE 
{
VALUES ?node { <ID> } 
{
  ?node ^:was_authored_by ?letter .
  ?letter a :Letter ;
    :was_addressed_to ?target .
  ?target skos:prefLabel ?_target__label . 
  BIND(?node AS ?source)
} UNION {
  ?letter :was_addressed_to ?node ;
    a :Letter .
  ?source ^:was_authored_by ?letter ;
    skos:prefLabel ?_source__label . 
  BIND(?node AS ?target)
}
?target skos:prefLabel ?target__label .
?source skos:prefLabel ?source__label .
?letter :has_time-span/crm:P82a_begin_of_the_begin ?date .
BIND(year(?date) AS ?year)
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
    ?letter :was_authored_by ?node ;
      a :Letter ;
      :was_addressed_to ?target .
  
    BIND(?node AS ?source)
  } UNION {
    ?letter :was_addressed_to ?node ;
      a :Letter ;
      :was_authored_by ?source .
    BIND(?node AS ?target)
  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
} `

export const networkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?class ?href
    (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
  WHERE {
    VALUES ?class { crm:E21_Person crm:E74_Group :Family }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
      skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }

    BIND(REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND(CONCAT("../../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const networkNodesFacetQuery = `
 SELECT DISTINCT ?id ?prefLabel ?class ?href
 (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
 WHERE {
   VALUES ?class { crm:E21_Person crm:E74_Group :Family }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
    skos:prefLabel ?_label .
    OPTIONAL { ?id :out_degree ?_out }
    OPTIONAL { ?id :in_degree ?_in }
    
    BIND(REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND(CONCAT("../../actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const topCorrespondenceInstancePageQuery = `
SELECT DISTINCT ?id 
  (?source__label AS ?from__label)
  (?target__label AS ?to__label)
  (xsd:date(CONCAT(STR(?year), '-01-01')) AS ?date) 
  ?type
  ?year
  (COUNT(DISTINCT ?letter) AS ?count)
WHERE
{
  VALUES ?id { <ID> }
  {
    ?letter :was_authored_by ?id ;
      a :Letter ;
      :was_addressed_to ?target .
    ?target skos:prefLabel ?_target__label .

    BIND ("to" AS ?type)
    BIND(?id AS ?source)
  }
  UNION
  {
    ?letter :was_addressed_to ?id ;
      a :Letter ;
      :was_authored_by ?source .
    ?source skos:prefLabel ?_source__label .

    BIND(?id AS ?target)
    BIND ("from" AS ?type)

  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter :estimated_year ?year .

  OPTIONAL {
    ?id :birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND(year(?birth_end) AS ?birth)
  }
  FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

  OPTIONAL {
    ?id :deathDate/crm:P82b_end_of_the_end ?death_end .
    BIND(year(?death_end) AS ?death)
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
    ?sent_letter :was_authored_by ?id ; 
                 :estimated_year ?year
  } 
  UNION 
  {
    ?received_letter :was_addressed_to ?id ;
	                 :estimated_year ?year
  }
  FILTER (BOUND(?year))

  OPTIONAL {
    ?id :birthDate/crm:P82a_begin_of_the_begin ?_birth .
    BIND(year(?_birth) AS ?birth)
  }
  FILTER ((bound(?birth) && ?birth<?year) || !bound(?birth))

  OPTIONAL {
    ?id :deathDate/crm:P82b_end_of_the_end ?_death .
    BIND(year(?_death) AS ?death)
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
    BIND(<ID> as ?id)
    {
      ?sent_letter :was_authored_by ?id ; 
        a :Letter ;
        :estimated_year ?year .
    } 
    UNION 
    {
      ?received_letter :was_addressed_to ?id ;
        a :Letter ;
        :estimated_year ?year .
    }
    FILTER (BOUND(?year))

    OPTIONAL {
      ?id :birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND(year(?birth_end) AS ?birth)
    }
    FILTER (!bound(?birth) || (bound(?birth) && ?birth<?year))

    OPTIONAL {
        ?id :deathDate/crm:P82b_end_of_the_end ?death_end .
      BIND(year(?death_end) AS ?death)
    }
    FILTER (!bound(?death) || (bound(?death) && ?year<=?death))
  }
  GROUP BY ?year
  ORDER BY ?year
`
