import React from 'react'
import styled from 'styled-components'

const CoffeeWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  top: 50px;
  height: 8in;
  width: calc(100% - 32px);
  padding: 75px 40px 0;
  background-color: white;
  justify-self: center;
`

export default CoffeeWrapper