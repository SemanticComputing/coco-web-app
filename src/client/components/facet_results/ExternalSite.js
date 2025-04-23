import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import intl from 'react-intl-universal'

/**
 * A component for showing an external site through an embedded object.
 */
class ExternalSite extends React.Component {
  constructor (props) {
    super(props)
  }

  renderSpinner () {
    if (this.props.resultUpdateID === 0) {
      const spinnerContainerStyle = {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }
      return (
        <div style={spinnerContainerStyle}>
          <CircularProgress />
        </div>
      )
    }
    return null
  }

  componentDidMount = () => {
    if (this.props.fetchResultsWhenMounted) {
      this.props.fetchResults({
        perspectiveID: this.props.perspectiveConfig.id,
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass,
        uri: this.props.uri
      })
    }
  }

  render = () => {
    const { data, properties, screenSize, perspectiveConfig } = this.props

    const loadingFailed = intl.get(`perspectives.${perspectiveConfig.id}.externalSite.loadingFailed`)
    const openInNewTab = intl.get(`perspectives.${perspectiveConfig.id}.externalSite.openInNewTab`)
    const notAvailable = intl.get(`perspectives.${perspectiveConfig.id}.externalSite.notAvailable`)

    return (
      <>
        {this.renderSpinner()}
        {data ?
          <Box sx={{ m: 2, height: 'inherit', minHeight: '50cqh', border: '1px solid #bdbdbd', backgroundColor: '#e8e8e8' }}>
            <object
              id="embedObject"
              data={data.url}
              width="100%"
              style={{ height: '100%' }}
              type="text/html"
            >
              <Box sx={{ height: 'inherit', fontFamily: 'Roboto', textAlign: 'center',  alignContent: 'center' }}>
                <i>{loadingFailed ? loadingFailed : 'Embedding the content failed'}</i><br/><br/>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <Button variant='contained' color='primary'>
                    {openInNewTab ? openInNewTab : 'Open original source directly in a new tab'}
                  </Button>
                </a>
              </Box>
            </object>
          </Box>
          :
          <Box sx={{ p: 2, height: 'inherit', fontFamily: 'Roboto', textAlign: 'center' }}>
            <i>{notAvailable ? notAvailable : 'No external data source available'}</i>
          </Box>}
      </>
    )
  }
}

ExternalSite.propTypes = {
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  properties: PropTypes.array.isRequired
}

export default ExternalSite
