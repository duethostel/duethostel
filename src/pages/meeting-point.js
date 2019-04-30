import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const MeetingPointPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "photos/meeting-point.jpg" }) {
          childImageSharp { fluid { ...GatsbyImageSharpFluid } }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Meeting point" keywords={[]} />
        <Header photo={data.placeholderImage.childImageSharp.fluid}>Meeting point</Header>
      </Layout>
    )}
  />
)

export default MeetingPointPage
