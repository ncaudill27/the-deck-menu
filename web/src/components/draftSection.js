import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/sectionWrapper'
import Header from '../components/sectionHeader'
import Name from '../components/itemName'
import Context from '../components/itemContext'

const DraftSection = ({list}) => (
  <Wrapper>
    <Header>Drafts</Header>
    {list.map(({id, name, brewery}) => (
      <Draft key={id}>
        <Name>{name}</Name>
        <Context>
          {brewery}
        </Context>
      </Draft>
    ))}
  </Wrapper>
)

const Draft = styled.article`
  
`

export default DraftSection