import React from "react";
import styled from "styled-components";

import GlobalStyles from '../styles/globalStyles'

const Layout = ({ children }) => (
    <>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
);

const Main = styled.main`

`

export default Layout;
