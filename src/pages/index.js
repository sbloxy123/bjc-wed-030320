import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import GalleryLinks from "../components/GalleryLinks.js";
import DeliveryInfo from "../components/DeliveryInfo";
import ContactForm from "../components/ContactForm.js";
import SEO from "../components/SEO";

const index = () => {
  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />

      <Hero />
      <AboutSection />
      <GalleryLinks />
      <ContactForm />
      <DeliveryInfo />
    </Layout>
  );
};

export default index;
