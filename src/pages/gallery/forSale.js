import React from "react";
import Layout from "../../components/Layout";
import "../../css/careGuide.css";
import SEO from "../../components/SEO";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import DeliveryInfo from "../../components/DeliveryInfo";
import ContactForm from "../../components/ContactForm";
import LearnMore from "../../components/LearnMore";
import { Link } from "gatsby";

export const query = graphql`
  {
    allStrapiFlowerhornsForSale {
      nodes {
        SOLD
        Flowerhorn_Title
        About_Flowerhorn
        Flowerhorn_Price
        Delivery_Price
        Flowerhorn_Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    strapiFlowerhornsForSalePage {
      page_title
      page_info
    }
  }
`;

// used care-guide-css
const forSale = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" description="flowerhorns for sale" />

      <div className="container">
        <h1 className="care-guide-page-title">
          {data.strapiFlowerhornsForSalePage.page_title}
        </h1>
        <ReactMarkdown source={data.strapiFlowerhornsForSalePage.page_info} />
        <div className="guide">
          <div className="care-guide-cards">
            {data.allStrapiFlowerhornsForSale.nodes.map((document) => (
              <div className="card" key={document.id}>
                <Image
                  className="card-img-top"
                  fluid={document.Flowerhorn_Image.childImageSharp.fluid}
                  alt="Card image cap"
                />

                <div className="card-body">
                  <div className="card-text">
                    <h5>{document.Flowerhorn_Title}</h5>
                    <p>{document.About_Flowerhorn}</p>
                    <div
                      className={
                        document.SOLD === true || null
                          ? `show-sold`
                          : `not-sold`
                      }
                    ></div>
                    <p className="price">
                      <span>Price:</span> £ {document.Flowerhorn_Price}
                    </p>
                    <p className="delivery-price">
                      <span>Delivery:</span> £ {document.Delivery_Price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="../../imports/">
            <LearnMore label="more info on Flowerhorns here..." />
          </Link>
        </div>
      </div>
      <DeliveryInfo />
      <ContactForm />
    </Layout>
  );
};

export default forSale;
