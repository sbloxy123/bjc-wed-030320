import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Image from "gatsby-image";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";
import LearnMore from "../components/LearnMore";

import "../css/careGuideTemplate.css";

const ComponentName = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.strapiCareGuides.title}
        description={data.strapiCareGuides.title}
      />

      <div className="care-guide-template">
        <Image
          fluid={data.strapiCareGuides.image.childImageSharp.fluid}
          className="guide-template-image"
        />
        <div className="container">
          <h1 className="guide-template-header">
            {data.strapiCareGuides.title}
          </h1>
          <ReactMarkdown
            className="guide-template-text"
            source={data.strapiCareGuides.information}
          />

          <hr />
          <Link to="/careGuide">
            <LearnMore label="Back to Care Guides..." />{" "}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getSingleGuide($slug: String) {
    strapiCareGuides(slug: { eq: $slug }) {
      title
      information
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ComponentName;
