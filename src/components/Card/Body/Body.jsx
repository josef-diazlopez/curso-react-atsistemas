import React from "react";
import "./Body.css";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export const Body = ({ texts }) => {
  return (
    <>
      {texts.map((text, index) => (
        <Card.Text key={index}>{text}</Card.Text>
      ))}
    </>
  );
};

Body.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
