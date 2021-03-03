import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDesc, siteTitle, siteUrl, image } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />

      {/* twitter cards */}
      <meta name="og:card" content="summary_large_image" />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDesc} />
      <meta name="og:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
