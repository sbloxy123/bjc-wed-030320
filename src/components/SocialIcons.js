import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="social-group">
      <a
        href="https://www.facebook.com/bry.johnston.526/"
        className="facebook socialIcon"
      >
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="mailto: bryan030183@gmail.com" className="email socialIcon">
        <FontAwesomeIcon icon={faEnvelope} size="4x" />
      </a>
      <a
        href="https://www.instagram.com/bryanjohnstoncichlids"
        className="instagram socialIcon"
      >
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
  );
};

export default SocialIcons;
