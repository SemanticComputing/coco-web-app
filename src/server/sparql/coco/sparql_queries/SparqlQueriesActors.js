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
    ?id lssc:birthDate ?birthDateTimespan__id .
    ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
    OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
    OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
  }
  UNION
  { 
    ?id lssc:deathDate ?deathDateTimespan__id .
    ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
    OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
    OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
  }
  UNION
  { 
    ?id lssc:flourished ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  { ?id lssc:is_related_to ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    ?id lssc:out_degree ?numSent
  }
  UNION
  {
    ?id lssc:in_degree ?numReceived
  }
  UNION
  {
    ?id foaf:gender ?gender__id . 
    ?gender__id skos:prefLabel ?gender__prefLabel .
    BIND(?gender__id as ?gender__dataProviderUrl)
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "^https*:", ""), "?width=600")) as ?image__url)
  }
`

export const topCorrespondenceFacetPageQuery = `
SELECT ?id (?source__label AS ?from__label) (?target__label AS ?to__label)  (xsd:date(?_date) AS ?date) ?type (year(?_date) AS ?year)
WHERE 
{
    <FILTER>
  {
    ?id lssc:created ?letter .
    ?letter a lssc:Letter ;
      lssc:was_addressed_to ?target .
    ?target skos:prefLabel ?_target__label .
    BIND ("from" AS ?type)
  
    BIND(?id AS ?source)
  } UNION {
    ?letter lssc:was_addressed_to ?id ;
      a lssc:Letter .
    ?source lssc:created ?letter ;
      skos:prefLabel ?_source__label .

    BIND(?id AS ?target)
    BIND ("to" AS ?type)

  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?_date .
} 
`

export const sentReceivedFacetPageQuery = `
  SELECT DISTINCT (STR(?year) as ?category)
    (count(distinct ?sent_letter) AS ?letterCount)
  WHERE {  
    <FILTER>
    
    ?id lssc:created ?sent_letter .
    ?sent_letter a lssc:Letter ;
                  crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
    BIND (year(?time_0) AS ?year)
    
    OPTIONAL {
      ?id lssc:birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND(year(?birth_end) AS ?birth)
    }
    FILTER ((bound(?birth) && ?birth<?year) || !bound(?birth))

    OPTIONAL {
        ?id lssc:deathDate/crm:P82b_end_of_the_end ?death_end .
      BIND(year(?death_start) AS ?death)
    }
    FILTER ((bound(?death) && ?year<=?death) || !bound(?death))
  } 
  GROUP BY ?year
  ORDER BY ?year
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
    ?id foaf:gender ?gender . 
    ?gender skos:prefLabel ?gender__prefLabel .
    BIND(?gender as ?gender__dataProviderUrl)
  }
  UNION 
  { ?id skos:altLabel ?altLabel }
  UNION
  { ?id lssc:occupation/skos:prefLabel ?occupation }
  UNION
  { ?id lssc:is_related_to ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND(COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND(?external__id AS ?external__dataProviderUrl)
  }
  UNION
  {
    ?id lssc:birthDate ?birthDateTimespan__id .
    ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
    OPTIONAL { ?birthDateTimespan__id crm:P82a_begin_of_the_begin ?birthDateTimespan__start }
    OPTIONAL { ?birthDateTimespan__id crm:P82b_end_of_the_end ?birthDateTimespan__end }
  }
  UNION
  {
    ?id lssc:was_born_in_location ?birthPlace__id .
    ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  UNION
  {
    ?id lssc:deathDate ?deathDateTimespan__id .
    ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
    OPTIONAL { ?deathDateTimespan__id crm:P82a_begin_of_the_begin ?deathDateTimespan__start }
    OPTIONAL { ?deathDateTimespan__id crm:P82b_end_of_the_end ?deathDateTimespan__end }
  }
  UNION
  {
    ?id lssc:died_at_location ?deathPlace__id .
    ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  UNION
  { 
    ?id lssc:flourished ?floruitTimespan__id .
    ?floruitTimespan__id skos:prefLabel ?floruitTimespan__prefLabel .
    OPTIONAL { ?floruitTimespan__id crm:P82a_begin_of_the_begin ?floruitTimespan__start }
    OPTIONAL { ?floruitTimespan__id crm:P82b_end_of_the_end ?floruitTimespan__end }
  }
  UNION
  {
    { ?id lssc:created/lssc:was_sent_from ?knownLocation__id }
      UNION
    { ?id ^lssc:was_addressed_to/lssc:was_sent_to ?knownLocation__id }
      UNION
    { ?id lssc:was_in_location ?knownLocation__id }
  ?knownLocation__id skos:prefLabel ?knownLocation__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?knownLocation__id), "^.*\\\\/(.+)", "$1")) AS ?knownLocation__dataProviderUrl)
  }
  UNION
  {
    VALUES (?rel__prop ?rel__label) {
      (lssc:member_of "Member:")
    }
    ?rel__id ?rel__prop ?id ;
      skos:prefLabel ?rel__label2
    BIND (CONCAT(?rel__label, ' ',?rel__label2) AS ?rel__prefLabel)
    BIND(CONCAT("/actors/page/", REPLACE(STR(?rel__id), "^.*\\\\/(.+)", "$1")) AS ?rel__dataProviderUrl)  
  }
  UNION
  {
    ?id lssc:out_degree ?numSent 
  }
  UNION
  {
    ?id lssc:in_degree ?numReceived
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "^https*:", ""), "?width=600")) as ?image__url)
  }
  UNION
  {
    ?id dct:source/skos:prefLabel ?datasource
  }
`

export const actorLettersInstancePageQuery = `
  SELECT * 
  WHERE {
    BIND(<ID> as ?id)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__prefLabel)
    BIND(?id as ?uri__dataProviderUrl)
  
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
  
    {
      SELECT DISTINCT ?id ?metrics__id ?metrics__dataProviderUrl ?metrics__prefLabel
      WHERE {
        ?id lssc:has_statistic [
          lssc:value ?stat_value ;
          lssc:rank ?stat_rank ;
          a ?metrics__id ] .
        ?metrics__id skos:prefLabel ?stat_label .
        BIND (CONCAT(?stat_label, ': ', STR(?stat_value), ' (#', STR(?stat_rank),")") AS ?metrics__prefLabel)
        BIND(CONCAT("/metrics/page/", REPLACE(STR(?metrics__id), "^.*\\\\/(.+)", "$1")) AS ?metrics__dataProviderUrl)
      }
    }
    UNION
    {
      { SELECT ?id ?tie__id ?tie__count ?tie__prefLabel WHERE {
        { ?tie__id lssc:actor1 ?id }
        UNION
        { ?tie__id lssc:actor2 ?id }
        ?tie__id lssc:num_letters ?tie__count ;
                   skos:prefLabel ?_lbl .
        BIND (CONCAT(?_lbl, ' (', STR(?tie__count), ')') AS ?tie__prefLabel)
        } ORDER BY DESC(?tie__count) }
      FILTER (BOUND(?tie__id))
      BIND(CONCAT("/ties/page/", REPLACE(STR(?tie__id), "^.*\\\\/(.+)", "$1")) AS ?tie__dataProviderUrl)
    }
    UNION
    {
      ?id lssc:out_degree ?numSent 
    }
    UNION
    {
      ?id lssc:in_degree ?numReceived
    }
    UNION
    {
      ?id lssc:num_correspondences ?numCorrespondences
    }
    UNION
    {
      ?id lssc:flourished/skos:prefLabel ?floruit
    }
    UNION
    { SELECT DISTINCT ?id ?sentletter__id ?sentletter__prefLabel ?sentletter__dataProviderUrl
      WHERE {
        ?id lssc:created ?sentletter__id .
          ?sentletter__id a lssc:Letter ;
            skos:prefLabel ?sentletter__prefLabel .
        BIND(CONCAT("/letters/page/", REPLACE(STR(?sentletter__id), "^.*\\\\/(.+)", "$1")) AS ?sentletter__dataProviderUrl)
        OPTIONAL { ?sentletter__id (crm:P4_has_time-span|lssc:inferredDate|lssc:approximateDate|lssc:possibleDate)/crm:P82a_begin_of_the_begin ?time }
      } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?sentletter__prefLabel))
    }
    UNION 
    { SELECT DISTINCT ?id ?receivedletter__id ?receivedletter__prefLabel ?receivedletter__dataProviderUrl
      WHERE {
      ?receivedletter__id
        lssc:was_addressed_to ?id ;
        a lssc:Letter ;
        skos:prefLabel ?receivedletter__prefLabel .
      BIND(CONCAT("/letters/page/", REPLACE(STR(?receivedletter__id), "^.*\\\\/(.+)", "$1")) AS ?receivedletter__dataProviderUrl)
      OPTIONAL { ?receivedletter__id (crm:P4_has_time-span|lssc:inferredDate|lssc:approximateDate|lssc:possibleDate)/crm:P82a_begin_of_the_begin ?time }
      } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?receivedletter__prefLabel))
    } 
  }
`

//  outdated: https://api.triplydb.com/s/U-6MA_haY
export const letterLinksQuery = `
SELECT DISTINCT ?source ?target 
  ?weight 
  (STR(?weight) AS ?prefLabel)
WHERE {
  VALUES ?id { <ID> }
  {
    ?tie lssc:actor1 ?id ;
      lssc:actor2 ?target
    BIND(?id AS ?source)
  } UNION {
    ?tie lssc:actor1 ?source ; 
    lssc:actor2 ?id
    BIND(?id AS ?target)
  }
  ?tie lssc:num_letters ?weight .

  # filter 'unknown' etc entries
  ?source skos:prefLabel ?source__label . 
  # FILTER (!REGEX(?source__label, 'unknown', 'i'))
  ?target skos:prefLabel ?target__label . 
  # FILTER (!REGEX(?target__label, 'unknown', 'i'))

  # no self links
  FILTER (?source!=?target)
} 
`

//  outdated: https://api.triplydb.com/s/lhDOivCiG
export const peopleEventPlacesQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?person) AS ?instanceCount)
WHERE {
  <FILTER>
  { ?person lssc:created/lssc:was_sent_from ?id } 
  UNION 
  { ?person ^lssc:was_addressed_to/lssc:was_sent_to ?id } 
  UNION
  { ?person lssc:was_born_in_location ?id }
  UNION
  { ?person lssc:died_at_location ?id }
  ?id geo:lat ?lat ;
    geo:long ?long .
} GROUP BY ?id ?lat ?long
`

//  outdated: https://api.triplydb.com/s/ck2-SDpCO
export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    { ?related__id lssc:created/lssc:was_sent_from ?id }
    UNION
    { ?related__id ^lssc:was_addressed_to/lssc:was_sent_to ?id }
    UNION
    { ?related__id lssc:was_born_in_location ?id }
    UNION
    { ?related__id lssc:died_at_location ?id }
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
export const networkLinksQuery = `
SELECT DISTINCT (?actor as ?source) ?target ?weight (str(?weight) as ?prefLabel)
  WHERE {
    <FILTER>
    ?_tie lssc:actor1 ?actor ;
      lssc:actor2 ?target ;
    lssc:num_letters ?weight .
}
`

export const correspondenceTimelineQuery = `SELECT DISTINCT ?id ?source ?source__label ?target ?target__label ?date ?type ?year
WHERE 
{
VALUES ?node { <ID> } # actors:p11301 p300075
{
  ?node lssc:created ?letter .
  ?letter a lssc:Letter ;
    lssc:was_addressed_to ?target .
  ?target skos:prefLabel ?_target__label .
  BIND ("to" AS ?type)
  # FILTER (!REGEX(?_target__label, '(unknown|no_recipient_given)', 'i'))

  BIND(?node AS ?source)
} UNION {
  ?letter lssc:was_addressed_to ?node ;
    a lssc:Letter .
  ?source lssc:created ?letter ;
    skos:prefLabel ?_source__label .
  # FILTER (!REGEX(?_source__label, '(unknown|no_recipient_given)', 'i'))

  BIND(?node AS ?target)
  BIND ("from" AS ?type)

}
?target skos:prefLabel ?target__label .
?source skos:prefLabel ?source__label .
?letter crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?date .
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
    ?node lssc:created ?letter .
    ?letter a lssc:Letter ;
      lssc:was_addressed_to ?target .
    ?target skos:prefLabel ?_target__label . 
    FILTER (!REGEX(?_target__label, '(unknown|no_recipient_given)', 'i'))
  
    BIND(?node AS ?source)
  } UNION {
    ?letter lssc:was_addressed_to ?node ;
      a lssc:Letter .
    ?source lssc:created ?letter ;
      skos:prefLabel ?_source__label . 
    FILTER (!REGEX(?_source__label, '(unknown|no_recipient_given)', 'i'))

    BIND(?node AS ?target)
  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
} `

export const networkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?class ?href
    (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
  WHERE {
    VALUES ?class { crm:E21_Person crm:E39_Actor crm:E74_Group lssc:Family }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
      skos:prefLabel ?_label .
    OPTIONAL { ?id lssc:out_degree ?_out }
    OPTIONAL { ?id lssc:in_degree ?_in }

    BIND(REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND(CONCAT("../../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const networkNodesFacetQuery = `
 SELECT DISTINCT ?id ?prefLabel ?class ?href
 (COALESCE(?_out, 0)+COALESCE(?_in, 0) AS ?numLetters)
 WHERE {
   VALUES ?class { crm:E21_Person crm:E39_Actor crm:E74_Group  lssc:Family }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
    skos:prefLabel ?_label .
    OPTIONAL { ?id lssc:out_degree ?_out }
    OPTIONAL { ?id lssc:in_degree ?_in }
    
    BIND(REPLACE(?_label, ',[^,A-ZÜÅÄÖ]+$', '')AS ?prefLabel)
    BIND(CONCAT("../../actors/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/letter-network") AS ?href)
  }
`

export const topCorrespondenceInstancePageQuery = `
SELECT ?id (?source__label AS ?from__label) (?target__label AS ?to__label)  (xsd:date(?_date) AS ?date) ?type (year(?_date) AS ?year)
WHERE 
{
    VALUES ?id { <ID> }
  {
    ?id lssc:created ?letter .
    ?letter a lssc:Letter ;
      lssc:was_addressed_to ?target .
    ?target skos:prefLabel ?_target__label .
    BIND ("to" AS ?type)
  
    BIND(?id AS ?source)
  } UNION {
    ?letter lssc:was_addressed_to ?id ;
      a lssc:Letter .
    ?source lssc:created ?letter ;
      skos:prefLabel ?_source__label . 

    BIND(?id AS ?target)
    BIND ("from" AS ?type)

  }
  ?target skos:prefLabel ?target__label .
  ?source skos:prefLabel ?source__label .
  ?letter crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?_date .
} 
`

//  https://api.triplydb.com/s/N98jJ1hhJ
export const sentReceivedInstancePageQuery = `
  SELECT DISTINCT (STR(?year) as ?category) 
    (count(distinct ?sent_letter) AS ?sentCount) 
    (count(distinct ?received_letter) AS ?receivedCount) 
    ((?sentCount + ?receivedCount) as ?allCount)
  WHERE {
    BIND(<ID> as ?id)
    {
      ?id lssc:created ?sent_letter .
      ?sent_letter a lssc:Letter ;
                   crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
      BIND (year(?time_0) AS ?year)
    } 
    UNION 
    {
      ?received_letter lssc:was_addressed_to ?id ;
                       a lssc:Letter ;
                      crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?time_0 .
      BIND (year(?time_0) AS ?year)
    }
    FILTER (BOUND(?year))

    OPTIONAL {
      ?id lssc:birthDate/crm:P82b_end_of_the_end ?birth_end .
    BIND(year(?birth_end) AS ?birth)
    }
    FILTER ((bound(?birth) && ?birth<?year) || !bound(?birth))

    OPTIONAL {
        ?id lssc:deathDate/crm:P82b_end_of_the_end ?death_end .
      BIND(year(?death_start) AS ?death)
    }
    FILTER ((bound(?death) && ?year<=?death) || !bound(?death))
  } 
  GROUP BY ?year
  ORDER BY ?year
`
