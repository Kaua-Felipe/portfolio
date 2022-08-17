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
            {/* <img src="../../../assets/student.png" alt="Imagem de Cartoon de estudante" /> */}
            <img src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/ARTIGO-ESTUDOS.png" alt="Imagem de Cartoon de estudante" />
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
