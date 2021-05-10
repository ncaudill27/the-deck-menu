import React from "react";
import styled from "styled-components";

import GlobalStyles from '../styles/globalStyles'

const Layout = ({ children, ...props }) => (
    <div {...props}>
      <GlobalStyles />
      <Main>{children}</Main>
    </div>
);

const Main = styled.main`

`

export default Layout;
