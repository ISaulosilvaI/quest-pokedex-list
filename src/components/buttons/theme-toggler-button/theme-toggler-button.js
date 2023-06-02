import React, {useContext} from "react";
import {ThemeImg, ThemeButtonStyle} from './style'
import themeIcon from '../../../images/theme-icon.png'
import { ThemeContext } from "../../../context/theme-context";

export const ThemeTogglerButton= ()=> {
    const { togglerTheme }= useContext(ThemeContext)

    return(
        <ThemeButtonStyle onClick={togglerTheme}>
            <ThemeImg src={themeIcon} alt="light theme icon" />
        </ThemeButtonStyle>
    )
}