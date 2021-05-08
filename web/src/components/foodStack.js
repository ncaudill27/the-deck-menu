import React from 'react'
import styled from 'styled-components'
import FoodItem from './foodItem'

const FoodStack = ({list}) => (
  <Wrapper>
    {list.map(item => (
      <FoodItem key={item.id} {...item} />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default FoodStack