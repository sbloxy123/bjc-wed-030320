import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";

import Image from "gatsby-image";
import { graphql } from "gatsby";

const instagram = ({ data }) => {
  return (
    <Layout>
      <SEO title="images" description="images of sold flowerhorns" />

      <div className="container">
        <div className="gallery-title">
          <h1>{data.strapiPreviouslySoldFishGallery.gallery_page_title}</h1>
          <h5>{data.strapiPreviouslySoldFishGallery.gallery_subtitle}</h5>
          <a
            href="https://www.facebook.com/bry.johnston.526/"
            className="facebook socialIcon"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <a
            href="https://www.instagram.com/bryanjohnstoncichlids"
            className="instagram socialIcon"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
        </div>
        <div className="gallery-collection">
          {data.allInstagramContent.edges.map((thumb) => (
            <div className="insta" key={thumb.id}>
              <Zoom>
                <Image
                  className="img-thumb"
                  fluid={thumb.node.localImage.childImageSharp.fluid}
                  alt="Card image cap"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default instagram;

export const query = graphql`
  {
    allInstagramContent {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    strapiPreviouslySoldFishGallery {
      gallery_page_title
      gallery_subtitle
    }
  }
`;
