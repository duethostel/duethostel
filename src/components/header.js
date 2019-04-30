import React from "react"
import Img from "gatsby-image"

import classes from "../styles/header.module.css"

const Header = ({ children, height, photo }) => {
  const style = {}
  let photoOutput = null

  if (height) {
    style.height = `${height}vh`
  }

  if (photo)  {
    photoOutput = (
      <Img
        style={{ position: "absolute" }}
        className={classes.Photo}
        fluid={photo} />
    )
  }

  return (
    <header
      className={classes.Header}
      style={style}>
      {photoOutput}
      <h1>{children}</h1>
    </header>
  )
}

export default Header