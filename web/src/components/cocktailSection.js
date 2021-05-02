import React from 'react'

import Header from '../components/sectionHeader'
import Name from '../components/itemName'

const CocktailSection = ({list}) => (
  <Wrapper>
    <Header>Cocktails</Header>
    {list.map(({id, ingredients, name, price}) => (
      <Cocktail key={id}>
        <NamePriceWrapper>
          <Name name={name} />
          <Price>{price}</Price>
        </NamePriceWrapper>
        <IngredientsWrapper>
          {ingredients.map(ingredient =>(
            <Ingredient>{ingredient}</Ingredient>
          ))}
        </IngredientsWrapper>
      </Cocktail>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`

`

const Cocktail = styled.article`
  font-family: 'Work Sans', sans-serif;
`

const NamePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`

const IngredientsWrapper = styled.div`
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`

const Ingredient = styled.p`
  
`