import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "../css/about.css";
import LearnMore from "./LearnMore";
import { Link } from "gatsby";

const getStrapiImportsAndCareGuideInfo = graphql`
  {
    info: strapiImportsAndCareGuideHomepage {
      importsTitle
      importsSummary
      importsImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      careGuideTitle
      careGuideSummary
      careGuideImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const AboutSection = () => {
  const data = useStaticQuery(getStrapiImportsAndCareGuideInfo);

  return (
    <div className="about container">
      <div className="about-desktop-tablet">
        <div className="img-section ">
          <Image
            fluid={data.info.importsImage.childImageSharp.fluid}
            className="fish"
          />
        </div>
        <div className="text">
          <h4>{data.info.importsTitle}</h4>
          <p>{data.info.importsSummary}</p>
          <Link to="/imports/">
            <LearnMore label="learn More..." />
          </Link>
        </div>
        <div className="text">
          <h4>{data.info.careGuideTitle}</h4>
          <p>{data.info.careGuideSummary}</p>
          <Link to="/careGuide/">
            <LearnMore label="Learn More..." />
          </Link>
        </div>
        <div className="img-section">
          <Image
            fluid={data.info.careGuideImage.childImageSharp.fluid}
            className="fish"
          />
        </div>
      </div>
      {/* mobile view content */}
      <div className="about-mobile-cards">
        <Link to="/imports/">
          <div className="card">
            <Image
              className="card-img-top"
              fluid={data.info.importsImage.childImageSharp.fluid}
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="card-text">
                <h4>{data.info.importsTitle}</h4>
                <p>{data.info.importsSummary}</p>

                <LearnMore label="Learn more..." />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/instagram">
          <div className="card">
            <Image
              className="card-img-top"
              fluid={data.info.careGuideImage.childImageSharp.fluid}
              alt="Card image cap"
            />

            <div className="card-body">
              <div className="card-text">
                <h4>{data.info.careGuideTitle}</h4>
                <p>{data.info.careGuideSummary}</p>
                <LearnMore label="Learn more..." />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
