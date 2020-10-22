import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import { Link } from "react-router-dom";

export const Card = ({ name, id, children }) => {
  return (
    <div className="card">
      <div className="float-btn">boton flotante</div>
      <div className="card-header">
        <Link to={`/user/${id}`}>
          <h1>{name}</h1>
        </Link>
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
  id: PropTypes.number.isRequired
};
