import React, { useEffect, useState } from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import DrawerToggle from "./drawerToggle"

import classes from "../styles/toolbar.module.css"

const Toolbar = ({ drawerStateToggleHandler }) => {
  const toolbarClasses = [classes.Toolbar]
  const [opaque, setOpaque] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', _ => setOpaque(window.scrollY > 0))
  }, [])

  if (opaque) {
    toolbarClasses.push(classes.Opaque)
  }

  return (
    <div className={toolbarClasses.join(' ')}>
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
}

export default Toolbar
