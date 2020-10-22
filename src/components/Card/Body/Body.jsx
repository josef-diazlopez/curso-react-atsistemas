import React from "react";
import "./Body.css";
import PropTypes from "prop-types";

export const Body = ({ texts }) => {
  return (
    <>
      {texts.map((text, index) => (
        <div className="card-paragrah" key={index}>
          {text}
        </div>
      ))}
    </>
  );
};

Body.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
