import React from 'react'

import Spread from '../components/spread'
import Header from '../components/sectionHeader'
import Name from '../components/itemName'
import Context from '../components/itemContext'

const CocktailSection = ({list}) => (
  <Wrapper>
    <Header>Cocktails</Header>
    {list.map(({id, ingredients, name, price}) => (
      <Cocktail key={id}>
        <Spread>
          <Name name={name} />
          <Price>{price}</Price>
        </Spread>
        <Context>
          {ingredients.map(ingredient =>(
            <Ingredient>{ingredient}</Ingredient>
          ))}
        </Context>
      </Cocktail>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
`

const Ingredient = styled.p`
  
`