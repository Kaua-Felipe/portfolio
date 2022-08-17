import React from "react"
import NavBar from "../NavBar"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"
import Footer from "../Footer"
import { Container, ContainerContent } from "./styles"

export default function ContainerMain() {
    return (
        <Container>
            <img src="../../../assets/student.png" alt="Imagem de Cartoon de estudante" />
            <NavBar />
            <ContainerContent>
                <About />
                <Projects />
                <Contact />
            </ContainerContent>
            <Footer />
        </Container>
    )
}
