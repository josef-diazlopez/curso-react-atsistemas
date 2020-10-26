import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../../Theme/Theme';

export const ThemeSelector = ({children}) => {

  const [isDark, setDark] = useState({dark: true})
  

  const handleCheckbox = () => {
    setDark({dark:!isDark.dark});
  }

  return (
    <>
    <input
      id="theme"
      type="checkbox"
      name="theme"
      checked={isDark.dark}
      onChange={handleCheckbox}
    />
    <label for="theme">Cambiar modo</label>
    <ThemeProvider value={{dark: isDark.dark}}>{children}</ThemeProvider>
    </>
  )

}