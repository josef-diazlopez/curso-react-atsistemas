import React from 'react';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';

/**
 * @param {any} Component react component
 */

export default function Modal({ Component, ...props }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrap}>
        <Component {...props} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  Component: PropTypes.func.isRequired,
};
