import React from "react";
import { Header } from "../components/header/header";
import { PokemonList } from "../components/list-pokemon/list-pokemon";
import {  ThemeContext } from "../context/theme-context";
import { useContext } from "react";

export const Home= ()=> {
    const { theme }= useContext(ThemeContext)

    return(
        <div style={{ color: theme.color, backgroundImage: theme.image}}>
            <Header/>
            <PokemonList/>
        </div>
    )
}