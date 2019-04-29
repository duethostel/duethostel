import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>Page not found</Header>
  </Layout>
)

export default NotFoundPage
