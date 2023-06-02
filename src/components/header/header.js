import { HeaderStyled, HeaderContent, Logo } from "./style";
import React, { useContext } from "react";
import logo from '../../images/logo.png'
import { ThemeTogglerButton } from '../buttons/theme-toggler-button/theme-toggler-button'
import { ThemeContext } from "../../context/theme-context";


export const Header= ()=> {
    const  {theme, togglerTheme }= useContext(ThemeContext)

    return(
        <HeaderStyled>
            <HeaderContent>
                <a href="/">
                    <Logo src={logo} alt="logo"/>
                </a>

                <ThemeTogglerButton theme={theme} togglerTheme={togglerTheme}/>
            </HeaderContent>
        </HeaderStyled>
    )
}