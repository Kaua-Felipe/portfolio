import React from "react"
import { ContainerNavBar } from "./styles"

export default function NavBar({ globalTheme }) {
    return (
        <ContainerNavBar id="navbar" globalTheme={globalTheme}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">sobre</a>
                </li>
                <li>
                    <a href="#projects">projetos</a>
                </li>
                <li>
                    <a href="#skills">skills</a>
                </li>
            </ul>
        </ContainerNavBar>
    )
}
