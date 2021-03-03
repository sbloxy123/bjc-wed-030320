import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const DeliveryInfo = () => {
  const data = useStaticQuery(graphql`
    {
      strapiDeliveries {
        title
        details
      }
    }
  `);
  return (
    <div className="container delivery-info">
      <h2>{data.strapiDeliveries.title}</h2>
      <p>{data.strapiDeliveries.details}</p>
    </div>
  );
};

export default DeliveryInfo;
