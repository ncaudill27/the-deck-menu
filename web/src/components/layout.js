import React from "react";
import styled from "styled-components";

import GlobalStyles from '../styles/globalStyles'
import MaxWidthWrapper from '../components/maxWidthWrapper'

const Layout = ({ children }) => (
  <MaxWidthWrapper>
    <GlobalStyles />
    <Main>{children}</Main>
  </MaxWidthWrapper>
);

const Main = styled.main`

`

export default Layout;
