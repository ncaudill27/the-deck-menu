import React from 'react'
import styled from 'styled-components'

const Spread = ({children}) => (
  <StyledSpread>
    {children}
  </StyledSpread>
)

const StyledSpread = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Spread