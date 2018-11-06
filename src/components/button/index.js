import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => (
  <button className="c-button">{ children }</button>
)

Button.propTypes = {
  children: PropTypes.node,
}

export default Button