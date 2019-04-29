import React from "react"

import classes from "../styles/backdrop.module.css"

const Backdrop = ({ state, toggleHandler }) => (
  <div
    className={[classes.Backdrop, state ? classes.Open : classes.Closed].join(' ')}
    onClick={toggleHandler}></div>
)

export default Backdrop