import styled, { css } from "styled-components"
import {
    Html5, 
    Css3, 
    Javascript, 
    Typescript, 
    Mysql, 
    Npm, 
    ReactLogo, 
    Nodejs, 
    Styledcomponents, 
    Linkedin, 
    Github, 
    Instagram, 
    Facebook, 
    EmailOutline 
} from "../../styles/Icons"

export const Container = styled.aside`
    border-radius: 10px;
    background-color: #040404;
    width: calc(30% - 30px);
    height: calc(100vh - 40px);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .row {
        width: calc(100% - 40px);
        background-color: gray;
        height: 1px;
        margin-top: 5px;
    }
    @media(max-width: 885px) {
        position: inherit;
        width: 100%;
        border-radius: 0;
    }
`
export const Profile = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 30px;

    span {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 10px;
        padding: 5px;
        border: solid 2px var(--blue);
        animation: borderInfinit 3s infinite linear;

        @keyframes borderInfinit {
            0% { border-color: var(--blue)}
            10% { border-color: var(--purple) }
            20% { border-color: green }
            30% { border-color: yellowgreen }
            40% { border-color: yellow }
            50% { border-color: var(--white) }
            60% { border-color: yellow }
            70% { border-color: yellowgreen }
            80% { border-color: green }
            90% { border-color: var(--purple) }
            100% { border-color: var(--blue) }
        }
    }
`

// Technologies
export const Technologies = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 25px;
        margin-bottom: 10px;
    }
`
export const ContainerTec = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Technology = styled.div`
    max-width: 30px;
    margin: 5px 15px;
    transition-duration: .3s;

    &:hover {
        transform: scale(.8);
    }
    a svg:hover {
        box-shadow: var(--purple) 0px 5px 15px;
    }
`

// Contact
export const ContainerContact = styled.footer`
    width: 100%;
`
export const SocialMedia = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    margin: 0 auto 10px;
`
export const Media = styled.div`
    background-color: #1A1F23;
    padding: 5px;
    border-radius: 2px;
    transition-duration: .5s;

    &:hover {
        background-color: var(--purple);
        border-radius: 50%;

        a svg {
            fill: var(--white);
        }
    }
`
export const Informations = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        color: inherit;
        border-top: solid gray 1px;
        width: 50%;
        height: 40px;
        font-size: 14px;
        cursor: pointer;
        transition-duration: .8s;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
        &:first-child {
            border-right: solid gray 1px;
            border-bottom-left-radius: 10px;
        }
        &:last-child {
            border-bottom-right-radius: 10px;
        }
        &:hover {
            background-color: var(--purple);
        }
    }
`
    
const iconsCSS = css`
    width: 30px;
    height: 30px;
    fill: var(--purple);
    color: var(--purple);
`
// Icons Technologies
export const Html5Icon = styled(Html5)`
    ${iconsCSS}
`
export const Css3Icon = styled(Css3)`
    ${iconsCSS}
`
export const JavascriptIcon = styled(Javascript)`
    ${iconsCSS}
`
export const TypescriptIcon = styled(Typescript)`
    ${iconsCSS}
`
export const MysqlIcon = styled(Mysql)`
    ${iconsCSS}
`
export const NpmIcon = styled(Npm)`
    ${iconsCSS}
`
export const ReactIcon = styled(ReactLogo)`
    ${iconsCSS}
`
export const NodeIcon = styled(Nodejs)`
    ${iconsCSS}
`
export const StyledComponentsIcon = styled(Styledcomponents)`
    ${iconsCSS}
`

// Icons SocialMedia
export const LinkedinIcon = styled(Linkedin)`
    ${iconsCSS}
`
export const GithubIcon = styled(Github)`
    ${iconsCSS}
`
export const InstagramIcon = styled(Instagram)`
    ${iconsCSS}
`
export const FacebookIcon = styled(Facebook)`
    ${iconsCSS}
`
export const EmailIcon = styled(EmailOutline)`
    ${iconsCSS}
`
