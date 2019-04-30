import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const ContactsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "photos/contacts.jpg" }) {
          childImageSharp { fluid { ...GatsbyImageSharpFluid } }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Contacts" keywords={[]} />
        <Header photo={data.placeholderImage.childImageSharp.fluid}>Contacts</Header>
      </Layout>
    )}
  />
)

export default ContactsPage
