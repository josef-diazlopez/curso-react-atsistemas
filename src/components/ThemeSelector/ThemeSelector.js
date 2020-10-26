import React,{useState} from "react";
import PropTypes from "prop-types";
import {ThemeProvider } from '../../Themee/Theme';

export const ThemeSelector = ({children}) =>{
    const [dark, setdark] = useState(true);

    const handleInputChange=()=>{
            setdark(!dark);
    }

    return (
        <>
        <input
            id="dark"
            name="dark"
            type="checkbox"
            checked={dark}
            onChange={handleInputChange} />
            <label>Modo</label>
        <ThemeProvider value={{dark:dark}}>
            {children}
        </ThemeProvider>
        </>
    )
}