import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const shopText = graphql`
  {
    strapiShopPage {
      page_title
      page_summary
    }
  }
`;

const Shop = () => {
  const data = useStaticQuery(shopText);
  console.log(data);
  return (
    <div className="shop-hero">
      <div className="shop-text">
        <h2>{data.strapiShopPage.page_title}</h2>
        <ReactMarkdown
          className="imports-text"
          source={data.strapiShopPage.page_summary}
        />
        <div className="shop-social">
          <a
            href="https://www.facebook.com/bry.johnston.526/"
            className="facebook socialIcon"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          <a href="mailto: s.bloxham@hotmail.com" className="email socialIcon">
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
          <a
            href="https://www.instagram.com/bryanjohnstoncichlids"
            className="instagram socialIcon"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
