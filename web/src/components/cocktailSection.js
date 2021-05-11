import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Spread from '../components/spread'
import Name from '../components/itemName'
import Price from '../components/itemPrice'
import Context from '../components/itemContext'
import DrinkSection from './drinkSection'
import DrinkHeader from './drinkHeader'

const CocktailSection = ({list}) => (
  <DrinkSection>
    <DrinkHeader>Cocktails</DrinkHeader>
    {list.map(({id, ingredients, name, price}) => (
      <Cocktail key={id}>
        <Spread>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </Spread>
        <Context>
          {ingredients.join(', ')}
        </Context>
      </Cocktail>
    ))}
  </DrinkSection>
)

const Cocktail = styled.article`
  
`

CocktailSection.propTypes = {
  list: PropTypes.array.isRequired
}

export default CocktailSection