import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CoffeeLetterhead = React.forwardRef(({children, padding}, ref) => (
  <Wrapper ref={ref} style={{'--padding': padding + 'px'}}>
    {children}
  </Wrapper>
))

const Wrapper = styled.div`
  width: 8.5in;
  height: 10in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: var(--padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  background: linear-gradient(
    180deg,
    hsla(333, 81%, 57%, 0.22) 0%,
    hsla(161, 86%, 84%, 1) 100%
  );
`

CoffeeLetterhead.propTypes = {
  padding: PropTypes.number
}

CoffeeLetterhead.defaultProps = {
  padding: 0
}

export default CoffeeLetterhead