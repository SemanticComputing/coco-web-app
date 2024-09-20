const perspectiveID = 'proxies'

export const proxyPropertiesInstancePage = `
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__prefLabel)
  BIND (?id as ?uri__dataProviderUrl)

  {
    GRAPH ?g { ?id skos:prefLabel ?prefLabel__id }
    ?g skos:prefLabel ?datasource
    BIND (CONCAT(?prefLabel__id, ' (', ?datasource, ')') as ?prefLabel__prefLabel)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
  	?id :proxy_for ?provided__id .
    ?provided__id skos:prefLabel ?provided__prefLabel .
    BIND (CONCAT("/actors/page/", REPLACE(STR(?provided__id), "^.*\\\\/(.+)", "$1")) AS ?provided__dataProviderUrl)
    OPTIONAL { 
      ?provided__id ^:proxy_for ?other__id .
      FILTER (?other__id != ?id)
      GRAPH ?g { ?other__id skos:prefLabel ?_label }
      ?g skos:prefLabel ?_label2 .
      BIND (CONCAT(?_label, ' (', ?_label2, ')') AS ?other__prefLabel)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?other__id), "^.*\\\\/(.+)", "$1")) AS ?other__dataProviderUrl)
    }
  }
  UNION
  {
    ?id a ?type__id .
    ?type__id skos:prefLabel ?type__prefLabel .
    BIND (?type__id as ?type_dataProviderUrl)
  }
  UNION
  { 
    ?id skos:prefLabel ?altLabel__id 
    BIND (?altLabel__id AS ?altLabel__prefLabel)
    BIND (?altLabel__id AS ?altLabel__dataProviderUrl)
    
  }
  UNION
  {
    SELECT DISTINCT ?id (COUNT(DISTINCT ?_letter) AS ?numSent)
    WHERE {
      ?_letter :was_authored_by ?id ; a :Letter 
    }
    GROUPBY ?id
  }
  UNION
  {
    SELECT DISTINCT ?id (COUNT(DISTINCT ?_letter) AS ?numReceived)
    WHERE { 
      ?_letter :was_addressed_to ?id ; a :Letter .
    } 
    GROUPBY ?id 
  }
  UNION 
  { 
    SELECT DISTINCT ?id ?_letter (GROUP_CONCAT(?_label; separator="; ") AS ?label_in_letter)
    WHERE {
      {
        ?_letter :was_authored_by ?id ;
          :metadata/:sender ?_label 
      } 
      UNION
      {
        ?_letter :was_addressed_to ?id ;
          :metadata/:recipient ?_label 
      }
    } GROUPBY ?id ?_letter ORDERBY STR(?_label)
  }
  UNION
  { 
    SELECT DISTINCT ?id ?sentletter__id ?sentletter__prefLabel ?sentletter__dataProviderUrl
    WHERE {
      ?sentletter__id :was_authored_by ?id ;
          a :Letter ;
          skos:prefLabel ?sentletter__prefLabel .
      BIND (CONCAT("/letters/page/", REPLACE(STR(?sentletter__id), "^.*\\\\/(.+)", "$1")) AS ?sentletter__dataProviderUrl)
      OPTIONAL { ?sentletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?sentletter__prefLabel))
  }
  UNION
  { SELECT DISTINCT ?id ?mentioningletter__id ?mentioningletter__prefLabel ?mentioningletter__dataProviderUrl
    WHERE {
      ?mentioningletter__id :referenced_actor ?id ;
        a :Letter ;
        skos:prefLabel ?mentioningletter__prefLabel .
      BIND (CONCAT("/letters/page/", REPLACE(STR(?mentioningletter__id), "^.*\\\\/(.+)", "$1")) AS ?mentioningletter__dataProviderUrl)
      OPTIONAL { ?mentioningletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?mentioningletter__prefLabel))
  }
  UNION 
  { SELECT DISTINCT ?id ?receivedletter__id ?receivedletter__prefLabel ?receivedletter__dataProviderUrl
    WHERE {
    ?receivedletter__id :was_addressed_to ?id ;
      a :Letter ;
      skos:prefLabel ?receivedletter__prefLabel .
    BIND (CONCAT("/letters/page/", REPLACE(STR(?receivedletter__id), "^.*\\\\/(.+)", "$1")) AS ?receivedletter__dataProviderUrl)
    OPTIONAL { ?receivedletter__id :has_time-span/crm:P82a_begin_of_the_begin ?time }
    } ORDER BY COALESCE(STR(?time), CONCAT("9999", ?receivedletter__prefLabel))
  }
  UNION
  { 
    ?id owl:sameAs ?external__id . 
    OPTIONAL { ?external__id a/skos:prefLabel ?external__classlabel }
    OPTIONAL { ?external__id skos:prefLabel ?external__label }
    BIND (COALESCE(?external__label, ?external__classlabel, ?external__id) AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
  }
`
