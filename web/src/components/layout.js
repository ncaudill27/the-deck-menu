import React from "react";
import styled from "styled-components";

import GlobalStyles from '../styles/globalStyles'
import MaxWidthWrapper from '../components/maxWidthWrapper'

const Layout = ({ children }) => (
  <MaxWidthWrapper width={1000}>
    <GlobalStyles />
    <Main>{children}</Main>
    <Footer>
      <div>
        &copy; {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </Footer>
  </MaxWidthWrapper>
);

const Main = styled.main`
  height: 95vh;
  padding-top: 50px;
`

const Footer = styled.footer`
  font-family: 'Work Sans', sans-serif;
`

export default Layout;
