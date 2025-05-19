import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import withStyles from '@mui/styles/withStyles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  link: {
    textDecoration: 'none'
  },
  appBarButton: {
    color: 'white !important',
    border: `1px solid ${theme.palette.primary.main}`
  }
})

class TopBarDropdownButton extends React.Component {
  state = {
    anchorEl: null
  };

  AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
  };

  renderItem = item => {
    const { classes } = this.props
    let jsx
    if (item.externalLink) {
      jsx = (
        <a
          className={classes.link}
          key={item.id}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MenuItem onClick={this.handleMenuClose}>
            {item.label}
          </MenuItem>
        </a>
      )
    } else {
      jsx = (
        <MenuItem
          key={item.id}
          component={this.AdapterLink}
          to={item.url}
          onClick={this.handleMenuClose}
        >
          {item.label}
        </MenuItem>
      )
    }
    return jsx
  }

  render () {
    const { classes, layoutConfig, buttonLabel, dropdownItems } = this.props
    return (
      <>
        <Button
          className={classes.appBarButton}
          aria-haspopup='true'
          onClick={this.handleMenuOpen}
          endIcon={<ExpandMoreIcon />}
          sx={{ textWrap: 'nowrap' }}
        >
          {buttonLabel}
        </Button>
        <Menu
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleMenuClose}
        >
          {dropdownItems.map(item => this.renderItem(item))}
        </Menu>
      </>
    )
  }
}

TopBarDropdownButton.propTypes = {
  classes: PropTypes.object.isRequired,
  rootUrl: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired
}

export default withStyles(styles)(TopBarDropdownButton)
