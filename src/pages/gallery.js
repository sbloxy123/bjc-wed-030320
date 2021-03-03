import React from "react"
import Layout from "../components/Layout"
import GalleryLinks from "../components/GalleryLinks"
import SEO from "../components/SEO"

const gallery = () => {
  return (
    <Layout>
      <SEO title="gallery" description="image galleries" />

      <GalleryLinks />
    </Layout>
  )
}

export default gallery
