import React from 'react'
import styled from 'styled-components'

const Subheader = ({children}) => (
  <StyledSubheader>
    {children}
  </StyledSubheader>
)

const StyledSubheader = styled.h3`
  font-size: 1.4rem;
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  margin-bottom: 8px;
  text-transform: uppercase;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`

export default Subheader