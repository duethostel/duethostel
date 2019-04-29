import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import DrawerToggle from "./drawerToggle"

import classes from "../styles/toolbar.module.css"

const Toolbar = ({ drawerStateToggleHandler }) => (
  <div className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.Navigation}>
      <Navigation />
    </div>
    <div className={classes.DrawerToggle}>
      <DrawerToggle stateToggleHandler={drawerStateToggleHandler} />
    </div>
  </div>
)

Toolbar.propTypes = {
  drawerStateToggle: PropTypes.node.isRequired
}

export default Toolbar
