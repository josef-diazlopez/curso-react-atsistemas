import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { FooterSocial } from "./FooterSocial/FooterSocial";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Card = ({ name, children, id }) => {
  const history = useHistory();
  const navigateRoute = () => {
    if (window.confirm("Do you really want to leave?")) {
      history.push(`/user/${id}`);
    }
  };
  return (
    <div className="card">
      <div className="float-btn">boton flotante</div>
      <div className="card-header">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/user/${id}`}
        >
          <h1>{name}</h1>
        </Link>
      </div>
      <div className="card-body" onClick={navigateRoute}>
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
