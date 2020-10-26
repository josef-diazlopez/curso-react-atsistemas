import React, {useState} from 'react';

import { ThemeProvider } from '../../theme/Theme';

export const ThemeSelector = ({children}) => {

    const [isDark, setState] = useState(false);
    
      const handleChange = (event) => {
        setState(!isDark);
      };

    
    return (
        <>
        <input
            id="theme"
            type="checkbox"
            name="theme"
            checked={isDark}
            onChange={handleChange}
        />
        <label for="theme">Cambiar modo</label>
        <ThemeProvider value={{dark: isDark}}>{children}</ThemeProvider>
        </>
    );

};
ThemeSelector.prototypes = {};