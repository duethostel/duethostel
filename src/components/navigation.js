import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <ul>
    <li>
      <Link to="/" exact>Home</Link>
    </li>
    <li>
      <Link to="/accommodations">Accommodations</Link>
    </li>
    <li>
      <Link to="/meeting-point">Meeting point</Link>
    </li>
    <li>
      <Link to="/spa">Spa</Link>
    </li>
    <li>
      <Link to="/contacts">Contacts</Link>
    </li>
  </ul>
)

export default Navigation