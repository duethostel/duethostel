import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <SEO title="Spa" keywords={[]} />
    <Header photo={data.headerPhoto.childImageSharp.fluid}>Spa</Header>
  </Layout>
)

export const query = graphql`
  query {
    headerPhoto: file(relativePath: { eq: "photos/home.jpg" }) {
      childImageSharp { fluid { ...GatsbyImageSharpFluid } }
    }
  }
`