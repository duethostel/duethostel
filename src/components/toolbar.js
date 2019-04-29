import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import DrawerToggle from "./drawerToggle"

const Toolbar = ({ drawerStateToggleHandler }) => (
  <div>
    <div>
      <Logo />
    </div>
    <div>
      <Navigation />
    </div>
    <div>
      <DrawerToggle stateToggleHandler={drawerStateToggleHandler} />
    </div>
  </div>
)

Toolbar.propTypes = {
  drawerStateToggle: PropTypes.node.isRequired
}

export default Toolbar
