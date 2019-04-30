import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
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
        <SEO title="Page not found" keywords={[]} />
        <Header photo={data.placeholderImage.childImageSharp.fluid}>Page not found</Header>
      </Layout>
    )}
  />
)

export default NotFoundPage
