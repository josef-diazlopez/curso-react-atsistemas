import React from "react";
import "./ButtonSocial.css";
import PropTypes from "prop-types";
import { FaBehance } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';

// Constantes
export const BEHANCE = 'behance';
export const FACEBOOK = 'facebook';
export const TWITTER = 'twitter';
export const LINKEDIN = 'linkedin';

const ICONOS = {
  [BEHANCE]: <FaBehance></FaBehance>,
  [FACEBOOK]: <ImFacebook></ImFacebook>,
  [TWITTER]: <AiOutlineTwitter></AiOutlineTwitter>,
  [LINKEDIN]: <AiFillLinkedin></AiFillLinkedin>
};


export const ButtonSocial = ({ icon }) => {
  const social = ICONOS[icon] || <FaBehance></FaBehance>;
  console.log(social, icon);
  return (
    social
  );
};

ButtonSocial.propTypes = {
  icon: PropTypes.oneOf([BEHANCE, FACEBOOK, TWITTER, LINKEDIN])
};
