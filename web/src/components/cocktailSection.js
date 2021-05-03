import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from '../components/sectionWrapper'
import Header from '../components/sectionHeader'
import Spread from '../components/spread'
import Name from '../components/itemName'
import Price from '../components/itemPrice'
import Context from '../components/itemContext'

const CocktailSection = ({list}) => (
  <Wrapper>
    <Header>Cocktails</Header>
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
  </Wrapper>
)

const Cocktail = styled.article`
  
`

const Ingredient = styled.p`
  margin: 0;
`

CocktailSection.propTypes = {
  list: PropTypes.array.isRequired
}

export default CocktailSection