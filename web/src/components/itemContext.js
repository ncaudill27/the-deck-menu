import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemContext = ({children}) => (
  <Context>{children}</Context>
)

const Context = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`
ItemContext.propTypes = {
  context: PropTypes.string.isRequired
}

export default ItemContext