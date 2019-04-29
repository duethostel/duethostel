import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <Header height={80} photo="home.jpg">Home</Header>
  </Layout>
)

export default HomePage
