import React from "react"
import {
    Container, 
    Profile, 
    Technologies, 
    ContainerTec, 
    Technology, 
    Html5Icon, 
    Css3Icon, 
    JavascriptIcon, 
    TypescriptIcon, 
    MysqlIcon, 
    NpmIcon, 
    ReactIcon, 
    NodeIcon, 
    StyledComponentsIcon, 
    ContainerContact, 
    SocialMedia, 
    Media, 
    LinkedinIcon, 
    GithubIcon, 
    InstagramIcon, 
    FacebookIcon, 
    EmailIcon, 
    Informations 
} from "./styles"

export default function ContainerLeft() {
    return (
        <Container>
            <Profile>
                <img src="http://github.com/Kaua-Felipe.png" alt="" />
                <span>Sempre Melhorando</span>
                <div className="row"></div>
            </Profile>
            <Technologies>
                <h3>Tecnologias</h3>
                <ContainerTec>
                    <Technology>
                        <a href="">
                            <Html5Icon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <Css3Icon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <JavascriptIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <TypescriptIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <MysqlIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <NpmIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <ReactIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <NodeIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="">
                            <StyledComponentsIcon />
                        </a>
                    </Technology>
                </ContainerTec>
                <div className="row"></div>
            </Technologies>
            <ContainerContact>
                <SocialMedia>
                    <Media>
                        <a href="https://www.linkedin.com/in/kau%C3%A3-f-a349571b9" target="_blank">
                            <LinkedinIcon />
                        </a>
                    </Media>
                    <Media>
                        <a href="https://github.com/Kaua-Felipe" target="_blank">
                            <GithubIcon />
                        </a>
                    </Media>
                    <Media>
                        <a href="https://instagram.com/kauafelipe_alves" target="_blank">
                            <InstagramIcon />
                        </a>
                    </Media>
                    <Media> 
                        <a href="https://www.facebook.com/kaua.felipe.9231712" target="_blank">
                            <FacebookIcon />
                        </a>
                    </Media>
                    <Media> 
                        <a href="mailto:kauafelipeoficial191@gmail.com" target="_blank">
                            <EmailIcon />
                        </a>
                    </Media>
                </SocialMedia>
                <Informations>
                    <button type="button">Download CV</button>
                    <button type="button">Entrar em contato</button>
                </Informations>
            </ContainerContact>
        </Container>
    )
}
