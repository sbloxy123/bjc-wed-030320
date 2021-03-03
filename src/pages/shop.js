import React from "react"
import Layout from "../components/Layout"
import Shop from "../components/Shop"
import SEO from "../components/SEO"

const shop = () => {
  return (
    <Layout>
      <SEO title="shop" description="online store" />

      <Shop />
    </Layout>
  )
}

export default shop
