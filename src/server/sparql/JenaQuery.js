import { runSelectQuery } from './SparqlApi'
import { fullTextQuery } from './SparqlQueriesGeneral'
import { makeObjectList } from './Mappers'

export const queryJenaIndex = async ({
  backendSearchConfig,
  queryTerm,
  resultClass,
  resultFormat
}) => {
  let q = fullTextQuery
  const perspectiveConfig = backendSearchConfig[resultClass]
  const { endpoint, propertiesQueryBlock } = perspectiveConfig
  // q = q.replace('<QUERY>', `(?id ?score ?literal) text:query ('${queryTerm.toLowerCase()}' 10000) .`)
  // q = q.replace('<QUERY>', `(?id ?score ?literal) text:query ('${queryTerm.toLowerCase()}' 10000000) .`)
  q = q.replace('<QUERY>', `
  { SELECT DISTINCT ?id (MAX(?score) AS ?maxScore) WHERE {
    (?id ?score ?literal) text:query ('${queryTerm.toLowerCase()}' 10000000) .
    }
    GROUP BY ?id ?maxScore
    ORDER by DESC(?maxScore)
  }
  `)
  q = q.replace('<RESULT_SET_PROPERTIES>', propertiesQueryBlock)
  // console.log(endpoint.prefixes + q)
  const results = await runSelectQuery({
    query: endpoint.prefixes + q,
    endpoint: endpoint.url,
    useAuth: endpoint.useAuth,
    resultMapper: makeObjectList,
    resultFormat
  })
  return results
}
