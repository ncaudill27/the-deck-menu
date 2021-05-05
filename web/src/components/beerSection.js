import React from 'react'
import styled from 'styled-components'

import Header from '../components/sectionHeader'
import Spread from '../components/spread'
import Name from '../components/itemName'
import Context from '../components/itemContext'
import Price from '../components/itemPrice'
import DrinkSection from './drinkSection'
import DrinkHeader from './drinkHeader'

const BeerSection = ({list}) => (
  <DrinkSection>
    <DrinkHeader>Bottle &amp; Can Beer</DrinkHeader>
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
  </DrinkSection>
)

const ListWrapper = styled.div`
  
`

const Beer = styled.article`
  
`

export default BeerSection