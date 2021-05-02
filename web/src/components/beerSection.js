import React from 'react'
import styled from 'styled-components'

import Spread from '../components/spread'
import Name from '../components/itemName'
import Context from '../components/itemContext'
import Price from '../components/itemPrice'

const BeerSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery, price}) => (
      <Beer key={id}>
        <Spread>
          <Name name={name} />
          <Price price={price.split('.')[0]} />
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

export default BeerSection