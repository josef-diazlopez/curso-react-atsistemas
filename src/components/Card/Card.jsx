import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import { Link, useHistory } from "react-router-dom";
import { Card as CardBootstrap } from "react-bootstrap";

export const Card = ({ name, id, img, children }) => {
  const history = useHistory();
  const url = `/user2/${id}`;

  return (
    <CardBootstrap>
      <div className="float-btn">boton flotante</div>

      <CardBootstrap.Img variant="top" src={img} />

      <CardBootstrap.Header>
        <Link to={url}>
          <h4>{name}</h4>
        </Link>
      </CardBootstrap.Header>

      <CardBootstrap.Body
        onClick={() => {
          window.confirm("¿Está seguro?") && history.push(url);
        }}
      >
        {children}
      </CardBootstrap.Body>

      <CardBootstrap.Footer>
        <FooterSocial></FooterSocial>
      </CardBootstrap.Footer>
    </CardBootstrap>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
