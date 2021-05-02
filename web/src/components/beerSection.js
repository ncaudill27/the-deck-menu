import React from 'react'
import styled from 'styled-components'

import Name from '../components/itemName'
import Context from '../components/itemContext'

const BeerSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery, price}) => (
      <Beer key={id}>
        <NamePriceWrapper>
          <Name name={name} />
          <Price>{price.split('.')[0]}</Price>
        </NamePriceWrapper>
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

const NamePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Price = styled.p`
  margin: 0;
`

export default BeerSection