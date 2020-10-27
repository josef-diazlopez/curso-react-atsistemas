import React from 'react';
import PropTypes from 'prop-types';

/**
 * dark
 */
export const themeContext = React.createContext({ dark: true });

export const ThemeProvider = themeContext.Provider;
export const ThemeConsumer = themeContext.Consumer;

// TODO: no entiendo esto de aquí
export const withTheme = (Component) => {
    return (props) => (
        <ThemeConsumer>
            {(value) => (<Component {...props} theme={value}></Component>)}
        </ThemeConsumer>
    )
}

