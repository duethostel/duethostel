import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" keywords={[]} />
    <Header photo="photos/home.jpg">Not found</Header>
  </Layout>
)

export default NotFoundPage
