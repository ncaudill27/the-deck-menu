import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/sectionWrapper'
import Header from '../components/sectionHeader'
import Spread from '../components/spread'
import Name from '../components/itemName'
import Context from '../components/itemContext'
import Price from '../components/itemPrice'

const BeerSection = ({list}) => (
  <Wrapper>
    <Header>Bottle &amp; Can Beer</Header>
    {list.map(({id, name, brewery, price}) => (
      <Beer key={id}>
        <Spread>
          <Name>{name}</Name>
          <Price>{price.split('.')[0]}</Price>
        </Spread>
        <Context>
          {brewery}
        </Context>
      </Beer>
    ))}
  </Wrapper>
)

const Beer = styled.article`
  
`

export default BeerSection