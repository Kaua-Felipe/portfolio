import React from "react"
import NavBar from "../NavBar"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"
import Footer from "../Footer"
import { 
    ContainerLayout, 
    ContainerLeft, 
    Profile, 
    Technologies, 
    ContainerContact, 
    SocialMedia, 
    Media, 
    LinkedinIcon, 
    GithubIcon, 
    InstagramIcon, 
    FacebookIcon, 
    Informations, 
    ContainerMain, 
    ContainerContent 
} from "./styles"

export default function Layout() {
    return (
        <ContainerLayout>
            <ContainerLeft>
                <Profile>
                    <img src="http://github.com/Kaua-Felipe.png" alt="" />
                    <span>Sempre Melhorando</span>
                    <div></div>
                </Profile>
                <Technologies>
                    Python
                </Technologies>
                <ContainerContact>
                    <SocialMedia>
                        <Media>
                            <a href="">
                                <LinkedinIcon />
                            </a>
                        </Media>
                        <Media>
                            <a href="">
                                <GithubIcon />
                            </a>
                        </Media>
                        <Media>
                            <a href="">
                                <InstagramIcon />
                            </a>
                        </Media>
                        <Media> 
                            <a href="">
                                <FacebookIcon />
                            </a>
                        </Media>
                    </SocialMedia>
                    <Informations>
                        <button type="button">Download CV</button>
                        <button type="button">Entrar em contato</button>
                    </Informations>
                </ContainerContact>
            </ContainerLeft>
            <ContainerMain>
                <img src="../../../assets/student.png" alt="klfd" />
                <NavBar />
                <ContainerContent>
                    <About />
                    <Projects />
                    <Contact />
                </ContainerContent>
                <Footer />
            </ContainerMain>
        </ContainerLayout>
    )
}
