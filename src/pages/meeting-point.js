import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <SEO title="Meeting point" keywords={[]} />
    <Header photo={data.headerPhoto.childImageSharp.fluid}>Meeting point</Header>
  </Layout>
)

export const query = graphql`
  query {
    headerPhoto: file(relativePath: { eq: "photos/meeting-point.jpg" }) {
      childImageSharp { fluid { ...GatsbyImageSharpFluid } }
    }
  }
`
