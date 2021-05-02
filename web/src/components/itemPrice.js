import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemPrice = ({price}) => (
  <Price>{price}</Price>
)

const Price = styled.p`
  font-size: inherit;
  margin: 0;
`
ItemPrice.propTypes = {
  price: PropTypes.string.isRequired
}

export default ItemPrice