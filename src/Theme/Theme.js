import React from "react";
import PropTypes from "prop-types";

const themeContext = React.createContext({ dark: true });

const provider = themeContext.Provider;
const consumer = themeContext.Consumer;

export const ThemeContext = themeContext;

export const ThemeProvider = themeContext.Provider;

export const ThemeConsumer = themeContext.Consumer;

export const withTheme = (Component) => {
  return (props) => (
    <ThemeConsumer>
      {(value) => <Component theme={value} {...props}></Component>}
    </ThemeConsumer>
  );
};
