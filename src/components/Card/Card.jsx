import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import { Link, useHistory } from "react-router-dom";

const handleModal = (history, id) => {
  if(window.confirm('Acceder a página de usuario?')){
    history.push(`user/${id}`);
  }
}

export const Card = ({ id, name, children }) => {
  const history = useHistory();
  return (
    <div className="card" onClick={() => handleModal(history, id)}>
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
