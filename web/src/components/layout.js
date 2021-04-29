import React from "react";

import GlobalStyles from '../styles/globalStyles'


const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
    <footer>
      <div>
        &copy; {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  </>
);

export default Layout;
