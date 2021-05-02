import React from 'react'
import styled from 'styled-components'

const WineList = ({list}) => (
  <>
    {list.map(({
      id,
      name,
      price_bottle,
      price_glass,
    }) => (
      <Wine key={id}>
        <Name>{name}</Name>
        <Price>{price_glass}/{price_bottle}</Price>
      </Wine>
    ))}
  </>
)

const Wine = styled.article`
  display: flex;
  justify-content: space-between;
  font-family: 'Work Sans', sans-serif;
`

const Name = styled.h6`
  margin: 0;
  font-size: 1rem;
`

const Price = styled.p`
  margin: 0;
  font-size: 1rem;
`

export default WineList