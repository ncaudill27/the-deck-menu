import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/layout";

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

  console.log(data);

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
        <Title>{site.title}</Title>
        <Link to='/coffee'>Coffee</Link>
    </Layout>
  );
};

const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Freckle Face', sans-serif;

`

export default IndexPage;
