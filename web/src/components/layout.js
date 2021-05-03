import React from "react";
import styled from "styled-components";

import GlobalStyles from '../styles/globalStyles'
import MaxWidthWrapper from '../components/maxWidthWrapper'

const Layout = ({ children }) => (
  <MaxWidthWrapper width={1000}>
    <GlobalStyles />
    <Main>{children}</Main>
  </MaxWidthWrapper>
);

const Main = styled.main`

`

export default Layout;
