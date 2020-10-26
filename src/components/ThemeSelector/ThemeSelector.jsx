import React, { useState } from 'react'
import { ThemeProvider, themeContext } from '../../theme/theme'

export const ThemeSelector = (props) => {
    const [isDark, setDark] = useState(false)
    const handleCheckbox = () => {
        setDark(!isDark)
    }
    return (
        <>
            <input
                id="theme"
                type="checkbox"
                name="theme"
                style={{ margin: '15%' }}
                checked={isDark}
                onChange={handleCheckbox}
            />
            <ThemeProvider value={{ dark: !isDark }}>
                {props.children}
            </ThemeProvider>
        </>
    )
}
