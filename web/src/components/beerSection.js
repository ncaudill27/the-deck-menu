import React from 'react'
import styled from 'styled-components'

const BeerSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery, price}) => (
      <Beer key={id}>
        <NamePriceWrapper>
          <Name>{name}</Name>
          <Price>{price.split('.')[0]}</Price>
        </NamePriceWrapper>
        <Brewery>{brewery}</Brewery>
      </Beer>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`  
  font-family: 'Work Sans', sans-serif;
`

const Beer = styled.article`
  
`

const NamePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Name = styled.h6`
  font-size: 1rem;
  margin: 0;
`

const Brewery = styled.caption`
  display: block;
  text-align: left;
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`

const Price = styled.p`
  margin: 0;
`

export default BeerSection