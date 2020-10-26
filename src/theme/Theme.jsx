import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';

export const themeContext = React.createContext({ isDark: false });

export const ThemeProvider = themeContext.Provider;

export const ThemeConsumer = themeContext.Consumer;


export const withTheme = (Component) => {
    return React.forwardRef((props, ref) => (
        <ThemeConsumer>
            {
                (value) => ( <Component ref={ref} {...props} theme={value}></Component> )
            }
        </ThemeConsumer>
    ))
}
