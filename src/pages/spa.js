import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const SpaPage = () => (
  <Layout>
    <SEO title="Spa" keywords={[]} />
    <Header photo="home.jpg">Spa</Header>
  </Layout>
)

export default SpaPage
