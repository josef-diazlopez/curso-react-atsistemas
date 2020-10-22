import React from "react";
import "./Body.css";
import PropTypes from "prop-types";
import { useHistory} from "react-router";

export const Body = ({ texts, id }) => {
  const history = useHistory();

  const modal = () => {
    const result = window.confirm(' Acceder?');
    if( result ){
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
  id: PropTypes.number.isRequired
};
