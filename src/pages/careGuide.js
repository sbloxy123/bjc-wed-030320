import React from "react";
import Layout from "../components/Layout";
import "../css/careGuide.css";
import { Link } from "gatsby";
import LearnMore from "../components/LearnMore";
import SEO from "../components/SEO";

import Image from "gatsby-image";
import { graphql } from "gatsby";

export const query = graphql`
  {
    strapiCareGuidePage {
      page_title
    }

    allStrapiCareGuides {
      edges {
        node {
          title
          id
          summary_text
          information
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
const careGuide = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" description="about flowerhorns" />

      <div className="container">
        <h1 className="care-guide-page-title">
          {data.strapiCareGuidePage.page_title}
        </h1>
        <div className="guide">
          <div className="care-guide-cards">
            {data.allStrapiCareGuides.edges.map((document) => (
              <button className="card" key={document.node.id}>
                <Link to={`/careGuide/${document.node.slug}`}>
                  <Image
                    className="card-img-top"
                    fluid={document.node.image.childImageSharp.fluid}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="card-text">
                      <h5>{document.node.title}</h5>
                      <p>{document.node.summary_text}</p>
                    </div>
                  </div>
                </Link>
              </button>
            ))}
          </div>
        </div>
        <br />
        <Link to="/imports/">
          <LearnMore label="Imports and Flowerhorn info..." />
        </Link>
        <br />
      </div>
    </Layout>
  );
};

export default careGuide;
