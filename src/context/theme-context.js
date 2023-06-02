import {createContext, useState } from "react";
import backgroundLight from '../images/background-Light.gif'
import backgroundDark from '../images/background-Dark.gif'

export const themes= {
    light: {
        color: '#000000',
        image: `url(${backgroundLight})`,
        background: '#eeeeee'
    },
    dark: {
        color:'#ffffff',
        image: `url(${backgroundDark})`,
        background: '#000000'
    }
}

export const ThemeContext= createContext({})

export const ThemeProvider= (props)=>{

    const [theme, setTheme]= useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}