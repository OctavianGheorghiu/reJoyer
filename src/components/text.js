import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <span className="navbar-link">{props.text}</span>
    </div>
  )
}

Text.defaultProps = {
  text: 'SHOP',
}

Text.propTypes = {
  text: PropTypes.string,
}

export default Text
