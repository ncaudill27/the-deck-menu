import React from 'react'
import styled from 'styled-components'

const CoffeeWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  top: 80px;
  height: calc(10in - 80px - 48px);
  width: calc(100% - 32px);
  padding: 96px 40px 0;
  background-color: white;
  justify-self: center;
`

export default CoffeeWrapper