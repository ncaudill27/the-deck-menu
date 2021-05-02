import React from 'react'
import styled from 'styled-components'

import Spread from '../components/spread'
import Name from '../components/itemName'

const WineList = ({list}) => (
  <>
    {list.map(({
      id,
      name,
      price_bottle,
      price_glass,
    }) => (
      <Spread as='article' key={id}>
        <Name name={name} />
        <Price>{price_glass}/{price_bottle}</Price>
      </Spread>
    ))}
  </>
)

const Price = styled.p`
  margin: 0;
  font-size: 1rem;
`

export default WineList