import React from "react";
import "../css/galleryLinks.css";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";

const galleryButtonContent = graphql`
  {
    gallery: strapiGalleryLinksHomepage {
      imports_link_header
      imports_link_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      previous_sales_link_title
      previous_sales_link_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const GalleryLinks = () => {
  const data = useStaticQuery(galleryButtonContent);
  return (
    <div>
      <div className="galleries">
        <h2>Galleries</h2>
        <div className="container">
          <div className="gallery-links-cards">
            <Link to="/gallery/for-sale">
              {/* renamed gallery/instagram/ to gallery/instagram/ using 'gatsby-plugin-rename-routes' */}
              <div className="card">
                <Image
                  className="card-img-top"
                  fluid={data.gallery.imports_link_image.childImageSharp.fluid}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="card-text">
                    <h4>{data.gallery.imports_link_header}</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/gallery/sold-flowerhorns">
              {/* renamed gallery/instagram/ to gallery/instagram/ using 'gatsby-plugin-rename-routes' */}
              <div className="card">
                <Image
                  className="card-img-top"
                  fluid={
                    data.gallery.previous_sales_link_image.childImageSharp.fluid
                  }
                  alt="Card image cap"
                />

                <div className="card-body">
                  <div className="card-text">
                    <h4>{data.gallery.previous_sales_link_title}</h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLinks;
