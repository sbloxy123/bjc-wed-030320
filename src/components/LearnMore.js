import React from "react";
import "../css/learnMore.css";

const LearnMore = (props) => {
  return (
    <div>
      <div className="learn-more-link">
        <div className="button__text">{props.label}</div>

        <div className="button__wrapper">
          <div className="button__arrow"></div>
          <div className="button__border-circle"></div>
          <div className="button__mask-circle">
            <div className="button__small-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
