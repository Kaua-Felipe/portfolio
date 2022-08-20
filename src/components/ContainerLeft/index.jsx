import React, { useState, useEffect } from "react"
import axios from "axios"
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
    const [urlImgProfile, setUrlImgProfile] = useState()

    useEffect(() => {
        async function getImgUrl() {
            try {
                const response = await axios.get("https://api.github.com/users/Kaua-Felipe")
                const dataUser = await response.data
                const imgUrl = await dataUser.avatar_url
                setUrlImgProfile(imgUrl)
            } catch (error) {
                console.error(error)
            }
        }
        getImgUrl()
    }, [])
    
    return (
        <Container>
            <Profile>
                <img src={urlImgProfile} alt="Imagem de perfil" />
                <span>Sempre Melhorando</span>
                <div className="row"></div>
            </Profile>
            <Technologies>
                <h3>Tecnologias</h3>
                <ContainerTec>
                    <Technology>
                        <a href="https://www.w3schools.com/html/" target="_blank">
                            <Html5Icon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://www.w3schools.com/Css/" target="_blank">
                            <Css3Icon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://www.javascript.com/" target="_blank">
                            <JavascriptIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <TypescriptIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://www.mysql.com/" target="_blank">
                            <MysqlIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://www.npmjs.com/" target="_blank">
                            <NpmIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://pt-br.reactjs.org/" target="_blank">
                            <ReactIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://nodejs.org/en/" target="_blank">
                            <NodeIcon />
                        </a>
                    </Technology>
                    <Technology>
                        <a href="https://styled-components.com/" target="_blank">
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
