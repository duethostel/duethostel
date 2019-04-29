import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import classes from "../styles/header.module.css"

const Header = ({ children, height, photo }) => {
  const style = {}

  if (height) {
    style.height = `${height}vh`
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          photos: allFile(filter: {relativePath: {regex: "/photos/" }}) {
            edges {
              node {
                childImageSharp { fluid { ...GatsbyImageSharpFluid } }
              }
            }
          }
        }        
      `}
      render={data => {
        let photoOutput = null

        const photoElement = data.photos.edges.find(element => {
          return (element.node.childImageSharp.fluid.src.split('/').pop() === photo)
        })
        if (photoElement)  {
          photoOutput = (
            <Img
              style={{ position: 'absolute' }}
              className={classes.Photo}
              fluid={photoElement.node.childImageSharp.fluid} />
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
      }}
    />
  )
}

export default Header