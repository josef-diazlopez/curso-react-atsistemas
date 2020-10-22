import React from "react";
import "./Body.css";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";


export const Body = ({ id,texts }) => {
  const history = useHistory();
  const modal = () =>{
  if(window.confirm('Página de datos')){
    history.push(`/user/${id}`);
  }
  }

  return (
    <>
      {texts.map((text, index) => (
        <div className="card-paragrah" key={index} onClick={modal}>
          {text}
        </div>
      ))}
    </>
  );
};

Body.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
