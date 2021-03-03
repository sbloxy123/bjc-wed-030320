import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/ContactForm"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="About" description="contact me" />

      <Contact />
    </Layout>
  )
}

export default contact
