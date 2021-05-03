import React from 'react'

import Spread from '../components/spread'
import Name from '../components/itemName'
import Price from '../components/itemPrice'

const WineList = ({list}) => (
  <>
    {list.map(({
      id,
      name,
      price_bottle,
      price_glass,
    }) => (
      <Spread as='article' key={id}>
        <Name>{name}</Name>
        <Price>{`${price_glass}/${price_bottle}`}</Price>
      </Spread>
    ))}
  </>
)

export default WineList