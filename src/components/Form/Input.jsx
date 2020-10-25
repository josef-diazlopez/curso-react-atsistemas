import React from "react";
import PropTypes from "prop-types";

export const Input = ({ label, id, name, onChange, value, type }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
};
