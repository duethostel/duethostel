import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <SEO title="Contacts" keywords={[]} />
    <Header photo={data.headerPhoto.childImageSharp.fluid}>Contacts</Header>
  </Layout>
)

export const query = graphql`
  query {
    headerPhoto: file(relativePath: { eq: "photos/contacts.jpg" }) {
      childImageSharp { fluid { ...GatsbyImageSharpFluid } }
    }
  }
`
