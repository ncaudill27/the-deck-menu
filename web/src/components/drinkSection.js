import React from 'react'
import styled from 'styled-components'

const DrinkSection = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default DrinkSection