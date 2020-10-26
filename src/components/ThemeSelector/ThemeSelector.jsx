import React, { useState } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "../../Theme/Theme";

export const ThemeSelector = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleChange = (event) => {
    setDark(event.target.checked);
  };

  return (
    <>
      <form>
        <div>
          <input
            id="themeSelector"
            name="themeSelector"
            type="checkbox"
            value={dark}
            onChange={handleChange}
          ></input>
          Tema oscuro
        </div>
      </form>

      <ThemeProvider value={{ dark }}>{children}</ThemeProvider>
    </>
  );
};
