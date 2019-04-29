import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const MeetingPointPage = () => (
  <Layout>
    <SEO title="Meeting point" keywords={[]} />
    <Header photo="meeting-point.jpg">Meeting point</Header>
  </Layout>
)

export default MeetingPointPage
