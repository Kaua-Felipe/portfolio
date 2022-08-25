import React from "react"
import NavBar from "../NavBar"
import About from "../About"
import Projects from "../Projects"
import Skills from "../Skills"
import Footer from "../Footer"
import { Container, ContainerContent } from "./styles"
import studentImg from "../../../assets/student.png"

export default function ContainerMain() {
    return (
        <Container>
            <img src={studentImg} alt="Imagem de Cartoon de estudante" />
            <NavBar />
            <ContainerContent>
                <About />
                <Projects />
                <Skills />
            </ContainerContent>
            <Footer />
        </Container>
    )
}
