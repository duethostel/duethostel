import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const AccommodationsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "photos/accommodations.jpg" }) {
          childImageSharp { fluid { ...GatsbyImageSharpFluid } }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Accommodations" keywords={[]} />
        <Header photo={data.placeholderImage.childImageSharp.fluid}>Accommodations</Header>
      </Layout>
    )}
  />
)

export default AccommodationsPage
