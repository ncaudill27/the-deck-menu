import React from 'react'
import styled from 'styled-components'

const CoffeeWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 0 40px;
  background-color: white;
  justify-self: center;
`

export default CoffeeWrapper