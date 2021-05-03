import React from 'react'
import styled from 'styled-components'

const Subheader = ({children}) => (
  <StyledSubheader>
    {children}
  </StyledSubheader>
)

const StyledSubheader = styled.h3`
  font-size: 1.4rem;
  font-family: 'Original Surfer', sans-serif;
  margin: 0;
  margin-bottom: 8px;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`

export default Subheader