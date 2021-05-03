import React from 'react'
import styled from 'styled-components'

const ItemName = ({children}) => (
  <Name>{children}</Name>
)

const Name = styled.h6`
  font-size: inherit;
  margin: 0;
`

export default ItemName