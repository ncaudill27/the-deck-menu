import React from 'react'
import styled from 'styled-components'

import Name from '../components/itemName'
import Context from '../components/itemContext'

const DraftSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery}) => (
      <Draft key={id}>
        <Name name={name} />
        <Context context={brewery} />
      </Draft>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
`

const Draft = styled.article`
  
`

const Brewery = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`

export default DraftSection