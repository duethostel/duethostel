import React from "react"
import { Link } from "gatsby"

import classes from "../styles/navigation.module.css"

const Navigation = () => (
  <ul className={classes.Navigation}>
    <li>
      <Link activeClassName={classes.Active} to="/">Home</Link>
    </li>
    <li>
      <Link activeClassName={classes.Active} to="/accommodations">Accommodations</Link>
    </li>
    <li>
      <Link activeClassName={classes.Active} to="/meeting-point">Meeting point</Link>
    </li>
    <li>
      <Link activeClassName={classes.Active} to="/spa">Spa</Link>
    </li>
    <li>
      <Link activeClassName={classes.Active} to="/contacts">Contacts</Link>
    </li>
  </ul>
)

export default Navigation