import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import "../css/imports.css";
import LearnMore from "../components/LearnMore";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";

export const query = graphql`
  {
    importsPage: strapiImportsInformationPage {
      header: imports_page_header
      text: imports_page_text
      typesHeader: flowerhorn_types_header

      image: main_imports_page_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    fhType: allStrapiFlowerhornType {
      nodes {
        id
        name: Specific_flowerhorn_name
        info: Specific_flowerhorn_text
        specificImage: Specific_flowerhorn_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const imports = ({ data }) => {
  return (
    <Layout>
      <SEO title="imports" description="imported flowerhorns" />

      <div className="imports-page">
        <div className="container">
          <h1 className="imports-title">{data.importsPage.header}</h1>
        </div>
        <Image
          fluid={data.importsPage.image.childImageSharp.fluid}
          className="main-imports-image"
          imgStyle={{ objectPosition: "bottom" }}
        />
        <div className="container">
          <ReactMarkdown
            className="imports-text"
            source={data.importsPage.text}
          />
          {/* below - change link to imports gallery ?? */}
          <Link to="/gallery/">
            <LearnMore label="View imports..." />
          </Link>

          <hr />
          <h2>{data.importsPage.typesHeader}</h2>
          <div>
            {data.fhType.nodes.map((fh) => (
              <div key={fh.id}>
                <h4 className="fh-name">{fh.name}</h4>
                <Image
                  fluid={fh.specificImage.childImageSharp.fluid}
                  className="fh-info-image"
                  imgStyle={{ objectPosition: "bottom" }}
                />
                <ReactMarkdown className="fh-info" source={fh.info} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default imports;
