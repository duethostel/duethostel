import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const SpaPage = () => (
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
        <SEO title="Spa" keywords={[]} />
        <Header photo={data.placeholderImage.childImageSharp.fluid}>Spa</Header>
      </Layout>
    )}
  />
)

export default SpaPage
