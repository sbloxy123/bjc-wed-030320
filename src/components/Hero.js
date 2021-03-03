import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import "../css/hero.css";

const getImageAndText = graphql`
  {
    strapiHeroSection {
      heroText
      subheading
      heroImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(getImageAndText);

  return (
    <BackgroundImage
      className="hero-image"
      fluid={data.strapiHeroSection.heroImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="container">
          <div className="hero-text">
            <h1 className="heading">{data.strapiHeroSection.heroText}</h1>
            <h2 className="subheading">{data.strapiHeroSection.subheading}</h2>
          </div>
          <div className="action-buttons">
            <Link to="/gallery/">
              <button type="button" className="btn btn-danger">
                Galleries
              </button>
            </Link>
            <Link to="/careGuide/">
              <button type="button" className="btn btn-outline-secondary">
                Care Guide
              </button>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
