import React from "react"
import { ContainerNavBar } from "./styles"

export default function NavBar() {
    return (
        <ContainerNavBar id="navbar">
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
