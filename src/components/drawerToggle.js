import React from "react"

import classes from "../styles/drawerToggle.module.css"

function DrawerToggle({ stateToggleHandler }) {
  return (
    <button className={classes.DrawerToggle} onClick={stateToggleHandler}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default DrawerToggle