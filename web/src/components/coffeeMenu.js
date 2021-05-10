import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useReactToPrint } from 'react-to-print'

import PrintButton from './printButton'
import CoffeeList from './coffeeList'

const CoffeeWrapper = ({brewed, espresso, other, pastry}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <Wrapper ref={menuEl}>
        <CoffeeList brewed={brewed} espresso={espresso} other={other} pastry={pastry} />
        <CutLine />
        <CoffeeList brewed={brewed} espresso={espresso} other={other} pastry={pastry} />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 8.5in;
  height: 10in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  background: linear-gradient(
    180deg,
    hsla(333, 81%, 57%, 0.22) 0%,
    hsla(161, 86%, 84%, 1) 100%
  );
`

const CutLine = styled.div`
  position: absolute;
  left: 4.25in;
  width: 0;
  border: 1px dashed white;
  height: 100%;
`

CoffeeWrapper.propTypes = {
  padding: PropTypes.number,
  brewed: PropTypes.array.isRequired,
  espresso: PropTypes.array.isRequired,
  other: PropTypes.array.isRequired,
  pastry: PropTypes.array.isRequired,
}

CoffeeWrapper.defaultProps = {
  padding: 0
}

export default CoffeeWrapper