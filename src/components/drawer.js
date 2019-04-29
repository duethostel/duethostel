import React from "react"

import Backdrop from "./backdrop"
import Logo from "./logo"
import Navigation from "./navigation"

import classes from "../styles/drawer.module.css"

const Drawer = ({ state, stateToggleHandler }) => {
  return (
    <div className={classes.Drawer}>
      <Backdrop
        state={state}
        toggleHandler={stateToggleHandler} />
      <div className={[classes.Content, state ? classes.Open : classes.Closed].join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.Navigation}>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Drawer