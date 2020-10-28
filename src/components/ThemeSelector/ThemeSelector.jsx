import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "../../Theme/Theme";

export const ThemeSelector = ({ children }) => {
  const [checked, setCheck] = useState(false);

  return (
    <>
      <form>
        <label htmlFor="theme">{checked ? "Oscuro" : "Claro"}</label>
        <input
          id="theme"
          type="checkbox"
          onChange={(e) => setCheck(e.target.checked)}
        />
      </form>
      <ThemeProvider value={{ dark: checked }}>{children}</ThemeProvider>
    </>
  );
};

