import React, { useState } from 'react';

export const themeContext = React.createContext({dark: true});

export const ThemeProvider = themeContext.Provider;

export const ThemeConsumer =  themeContext.Consumer;

export const withTheme = (Component) => {
    return (props) => (
        <ThemeConsumer>
            {
            (value) => (<Component {...props} theme={value} ></Component>)
            }
        </ThemeConsumer>
    )
}

export const withThemeRef = (Component) => {
    return React.forwardRef((props,ref) => (
        <ThemeConsumer>
            {
            (value) => (<Component ref={ref} {...props} theme={value} ></Component>)
            }
        </ThemeConsumer>
    ))
}