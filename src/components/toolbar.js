import React, { useEffect, useRef } from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import DrawerToggle from "./drawerToggle"

import classes from "../styles/toolbar.module.css"

const Toolbar = ({ drawerStateToggleHandler, solidAt }) => {
  const toolbar = useRef(null)

  useEffect(() => {
    const logoHeight = toolbar.current.querySelector(`.${classes.Logo}`).offsetHeight
    const toolbarHeight = toolbar.current.offsetHeight

    window.onscroll = event => {
      const solitAtPixels = solidAt
        ? window.innerHeight / 100 * solidAt
        : 400

      if (window.scrollY > logoHeight) {
        toolbar.current.classList.add(classes.SemiSolid)

        if (window.scrollY > solitAtPixels - toolbarHeight) {
          toolbar.current.classList.add(classes.Solid)
        }
        else {
          toolbar.current.classList.remove(classes.Solid)
        }
      }
      else {
        toolbar.current.classList.remove(classes.SemiSolid)
      }
    }
  }, [])

  return (
    <div className={classes.Toolbar} ref={toolbar}>
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
