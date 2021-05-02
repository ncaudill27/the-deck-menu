import React from 'react'
import styled from 'styled-components'

import Spread from '../components/spread'
import Name from '../components/itemName'
import Context from '../components/itemContext'

const BeerSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery, price}) => (
      <Beer key={id}>
        <Spread>
          <Name name={name} />
          <Price>{price.split('.')[0]}</Price>
        </Spread>
        <Context context={brewery} />
      </Beer>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`  
  font-family: 'Work Sans', sans-serif;
`

const Beer = styled.article`
  
`

const Price = styled.p`
  margin: 0;
`

export default BeerSection