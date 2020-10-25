import React from "react";
import "./FooterSocial.css";
import PropTypes from "prop-types";
import {
  ButtonSocial,
  FACEBOOK,
  LINKEDIN,
  BEHANCE,
  TWITTER,
} from "../../Buttons/ButtonSocial";
import { ButtonGroup } from "react-bootstrap";

export const FooterSocial = () => {
  const lista = [FACEBOOK, LINKEDIN, BEHANCE, TWITTER];
  return (
    <ButtonGroup>
      {lista.map((network) => (
        <ButtonSocial icon={network} key={network}></ButtonSocial>
      ))}
    </ButtonGroup>
  );
};

FooterSocial.propTypes = {};
