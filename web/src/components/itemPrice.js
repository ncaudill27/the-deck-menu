import React from 'react'
import styled from 'styled-components'

const ItemPrice = ({children}) => (
  <Price>{children}</Price>
)

const Price = styled.p`
  font-size: inherit;
  margin: 0;
`

export default ItemPrice