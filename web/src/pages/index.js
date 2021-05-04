import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/layout";

import MaxWidthWrapper from '../components/maxWidthWrapper'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = data.site?.siteMetadata

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
      />
        <MaxWidthWrapper width={1000}>
          <Wrapper>
            <Title>{site.title}</Title>
            <StyledLink to='/coffee'>Coffee</StyledLink>
            <StyledLink to='/drinks'>Drinks</StyledLink>
          </Wrapper>
        </MaxWidthWrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Freckle Face', sans-serif;

`

const StyledLink = styled(Link)`
  margin-top: 40px;
  background-color: hsl(37, 35%, 70%);
  border: 5px solid hsl(37, 45%, 31%);
  padding: 12px 28px;
  text-decoration: none;
  font-family: 'Original Surfer', sans-serif;
  font-size: 3rem;
  border-radius: 5px;
  color: black;
  width: 100%;

  &:hover {
    background-color: hsl(37, 45%, 31%);
    color: white;
  }
`

export default IndexPage;
