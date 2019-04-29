import React from "react"

import classes from "../styles/header.module.css"

const Header = ({ children, height, backgroundImage, backgroundPosition }) => {
  const style = {}

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`
    style.backgroundSize = 'cover'
    style.backgroundPosition = backgroundPosition ? backgroundPosition : 'center'
  }

  if (height) {
    style.height = `${height}vh`
  }

  return (
    <h1 className={classes.Header} style={style}>
      {children}
    </h1>
  )
}

export default Header