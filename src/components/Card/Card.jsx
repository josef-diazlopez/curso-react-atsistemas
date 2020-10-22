import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";

export const Card = ({ name, children }) => {
  return (
    <div className="card">
      <div className="float-btn">boton flotante</div>
      <div className="card-header">
        <h1>{name}</h1>
      </div>
      <div className="card-body">{children}</div>
      <div className="card-footer">
        <FooterSocial></FooterSocial>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};