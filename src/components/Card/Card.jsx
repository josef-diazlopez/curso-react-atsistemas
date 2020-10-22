import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import {
  Link, useHistory
} from "react-router-dom";

export const Card = ({ name, children, idUser}) => {
  const history = useHistory()
  return (
    <div className="card">
      <div className="float-btn">boton flotante</div>
      <div className="card-header">
        <Link to={`user/${idUser}`}>
        <h1>{name}</h1>
        </Link>
      </div>
      <div className="card-body" onClick={() => {
          if(window.confirm('¿Quiere navegar al detalle del usuario?')){
            history.push(`user/${idUser}`)}
        }}
        >{children}</div>
      <div className="card-footer">
        <FooterSocial></FooterSocial>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
