import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CanceledPage = () => (
  <Layout>
    <SEO title="Cancelled" />
    <h1>Hi - you cancelled the purchase</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CanceledPage
