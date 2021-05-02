import React from 'react'
import styled from 'styled-components'

const DraftSection = ({list}) => (
  <Wrapper>
    {list.map(({id, name, brewery}) => (
      <Draft key={id}>
        <Name>{name}</Name>
        <Brewery>{brewery}</Brewery>
      </Draft>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
`

const Draft = styled.article`
  
`

const Name = styled.h6`
  font-size: 1rem;
  margin: 0;
`

const Brewery = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`

export default DraftSection