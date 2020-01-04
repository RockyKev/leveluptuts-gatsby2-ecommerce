import React from "react"
import { Link } from "gatsby"
import CONFIG from "../../config"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe(CONFIG.stripe.testId)
  // debugger

  const placeOrder = sku => {
    stripe.redirectToCheckout({
      //typically generated in local state
      items: [
        {
          sku: sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/",
      cancelUrl: "http://localhost:8000/",
    })
  }

  // console.log(window.Stripe)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Rocky Store</h1>
      <div>
        <article>
          <img src="https://picsum.photos/340/400" alt="Rocky T-shirt" />
          <h3> Rocky T-shirt </h3>
          <button onClick={() => placeOrder("sku_GUJfuYVpscOG5r")}>
            Buy me
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
