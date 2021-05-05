import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LetterheadWrapper = React.forwardRef(({children, padding, top, ...props}, ref) => (
  <Wrapper
    ref={ref}
    style={{
      '--padding': padding + 'px',
      '--top': top + 'px'
    }}
  >
    {children}
  </Wrapper>
))

const Wrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: var(--padding);
  padding-top: var(--top);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  font-size: 1.1rem;
  background: linear-gradient(
    180deg,
    hsla(333, 81%, 57%, 0.22) 0%,
    hsla(161, 86%, 84%, 1) 100%
  );
`

LetterheadWrapper.propTypes = {
  padding: PropTypes.number
}

LetterheadWrapper.defaultProps = {
  padding: 0
}

export default LetterheadWrapper