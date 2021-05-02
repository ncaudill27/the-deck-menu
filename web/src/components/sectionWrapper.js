import React from 'react'
import styled from 'styled-components'

const Wrapper = ({children}) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem; 
`

export default Wrapper