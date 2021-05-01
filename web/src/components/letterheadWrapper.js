import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LetterheadWrapper = ({children, padding}) => (
  <Wrapper style={{'--padding': padding + 'px'}}>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: linear-gradient(180deg, rgba(234, 57, 138, 0.22) 0%, #B2F9E2 100%);
  padding: var(--padding);
`

LetterheadWrapper.propTypes = {
  padding: PropTypes.number
}

LetterheadWrapper.defaultProps = {
  padding: 0
}

export default LetterheadWrapper