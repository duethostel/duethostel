import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Toolbar from "./toolbar"
import Drawer from "./drawer"

import "../styles/styles.css";

const Layout = ({ children }) => {
  const [drawerState, drawerSetState] = useState(false);
  const drawerStateToggleHandler = _ => drawerSetState(!drawerState)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Toolbar drawerStateToggleHandler={drawerStateToggleHandler} />
          <main>{children}</main>
          <Drawer state={drawerState} stateToggleHandler={drawerStateToggleHandler} />
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout