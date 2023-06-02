import React, { useEffect, useContext, useState} from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ThemeContext } from "../../context/theme-context";
import {getPokemonList} from '../../services/api-pokemon'
import { Header } from "../header/header";
import {Container, Section, PokemonInfo, Div, TypeUl, Li, AbilitiesUl, AbilitiesLi, MovesUl, ReturnButton} from "./style"


export const PokemonDetails= ()=> {
    const {theme}= useContext(ThemeContext)

    const [pokemon, setPokemon]= useState({})
    const [types, setTypes]= useState([])
    const [moves, setMoves]= useState([])
    const [abilities, setAbilities]= useState([])

    const {id}= useParams()

    const pokemonUrl= `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(()=> {
        async function fetchData() {
            const pokemonData= await getPokemonList(pokemonUrl)

            const pokemon= {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default
            }

            const types= pokemonData.types.map(type=> type.type.name)
            const moves= pokemonData.moves.map(move=> move.move.move)
            const abilities= pokemonData.abilities.map(ability=> ability.ability.url)

            const abilityDataPromises= await Promise.all(abilities.map(async abilityUrl=> {
                const abilityData= await getPokemonList(abilityUrl)

                const filteredAbilityDescription= abilityData.effct_entries.filter(description=> description.language.name === 'en')

                return{
                    name: abilityData.name,
                    description: filteredAbilityDescription[0].effct
                }
            } ))

            setAbilities(abilityDataPromises)
            setPokemon(pokemon)
            setMoves(moves)
            setTypes(types)
        }
        fetchData()
    }, [id, pokemonUrl])

    return(
        <Container style={{ color: theme.color, backgroundImage: theme.image}}>
            <Header/>
            <Section>
                <Link to='/'>
                    <ReturnButton style={{color: theme.color, backgroundColor: theme.background}}>X</ReturnButton>
                </Link>

                <PokemonInfo style={{ backgroundColor: theme.background}}>
                    <Div>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name}/>

                        <h2>type:</h2>
                        <TypeUl>
                            {types.map((type)=> (<Li key={type}>{type}</Li>))}
                        </TypeUl>
                    </Div>

                    <h2>abilities:</h2>
                    <AbilitiesUl>
                        {abilities.map((ability, index)=>(
                            <AbilitiesLi key={index}>
                                <h3>{ability.name}</h3>
                                <p>{ability.description}</p>
                            </AbilitiesLi>
                        ))}
                    </AbilitiesUl>

                    <h2>moves:</h2>
                    <MovesUl>
                        {moves.map(move=> (<Li key={move}>{move}</Li>))}
                    </MovesUl>
                </PokemonInfo>
            </Section>
        </Container>
    )
}