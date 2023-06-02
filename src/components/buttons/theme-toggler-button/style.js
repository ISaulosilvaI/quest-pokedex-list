import styled from 'styled-components'

export const ThemeImg= styled.img`
    width: 150px;
`

export const ThemeButtonStyle= styled.button`
    background: none;
    border: none;
    transition: 0.2s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`