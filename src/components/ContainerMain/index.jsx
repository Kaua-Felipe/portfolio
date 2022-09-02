import React, { useContext } from "react"
import NavBar from "../NavBar"
import About from "../About"
import Projects from "../Projects"
import Skills from "../Skills"
import Footer from "../Footer"
import { Container, ContainerContent } from "./styles"
import studentImg from "../../../assets/student.png"
import UserContext from "../../contexts/UserContext"

export default function ContainerMain() {
    const { theme } = useContext(UserContext)

    return (
        <Container globalTheme={theme}>
            <img src={studentImg} alt="Imagem de Cartoon de estudante" />
            <NavBar globalTheme={theme} />
            <ContainerContent>
                <About />
                <Projects />
                <Skills />
            </ContainerContent>
            <Footer />
        </Container>
    )
}
