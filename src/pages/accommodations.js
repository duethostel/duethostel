import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <SEO title="Accommodations" keywords={[]} />
    <Header photo={data.headerPhoto.childImageSharp.fluid}>Accommodations</Header>
  </Layout>
)

export const query = graphql`
  query {
    headerPhoto: file(relativePath: { eq: "photos/accommodations.jpg" }) {
      childImageSharp { fluid { ...GatsbyImageSharpFluid } }
    }
  }
`

