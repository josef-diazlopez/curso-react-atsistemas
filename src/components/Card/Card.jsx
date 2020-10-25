import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import { Link, useHistory } from "react-router-dom";

export const Card = ({ name, id, children }) => {
  const history = useHistory();
  const url = `/user2/${id}`;

  return (
    <div className="card">
      <div className="float-btn">boton flotante</div>
      <div className="card-header">
        <Link to={url}>
          <h1>{name}</h1>
        </Link>
      </div>
      <div
        className="card-body"
        onClick={() => {
          window.confirm("¿Está seguro?") && history.push(url);
        }}
      >
        {children}
      </div>
      <div className="card-footer">
        <FooterSocial></FooterSocial>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
