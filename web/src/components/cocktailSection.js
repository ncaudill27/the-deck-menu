import React from 'react'

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
          <Name name={name} />
          <Price price={price} />
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

const Ingredient = styled.p`
  
`

export default CocktailSection