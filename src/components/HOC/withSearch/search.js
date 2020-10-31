import React from "react";
import PropTypes from "prop-types";
import styles from "./withSearch.module.scss";
import SearchIcon from '@material-ui/icons/Search';

export default function WithSearch({ Component, ...props }) {
  return (
    <div className={styles.page}>
      <button className={styles.roundBtn}><SearchIcon/></button>
      <Component {...props} />
    </div>
  );
}

WithSearch.propTypes = {
  Component: PropTypes.func.isRequired,
};