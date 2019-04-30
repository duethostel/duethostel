import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const HomePage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "photos/home.jpg" }) {
            childImageSharp { fluid { ...GatsbyImageSharpFluid } }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO title="Home" keywords={[]} />
          <Header height={80} photo={data.placeholderImage.childImageSharp.fluid}>Welcome!</Header>
        </Layout>
      )}
    />
  )
} 

export default HomePage
