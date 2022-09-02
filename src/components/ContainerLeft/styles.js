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
    EmailOutline, 
    DarkTheme 
} from "../../styles/Icons"
import { borderInfinit, shimmer } from "./animations"

const backgroundColor = props => props.globalTheme == "dark" ? "#040404" : "#DADADA"
const color = props => props.globalTheme == "dark" ? "#DADADA" : "#040404"

export const Container = styled.aside`
    border-radius: 10px;
    background-color: ${backgroundColor};
    color: ${color};
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

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 10px;
        padding: 5px;
        border: solid 2px var(--blue);
        animation: ${borderInfinit} 3s infinite linear;
    }
    span {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`
export const ThemeIcon = styled(DarkTheme)`
    width: 30px;
    height: 30px;
    fill: ${props => props.themeIcon == "dark" ? "white" : "#111111"};
    background-color: ${props => props.themeIcon == "dark" ? "#111111" : "white"};
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 5px;
    transition-duration: 1s;

    &:hover {
        transform: scale(.9);
    }
`

export const ImgSkeleton = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 5px;
    border: solid 2px var(--blue);
    background-image: linear-gradient(
        -90deg, 
        #121212 0%, 
        #262626 50%, 
        #121212 100%
    );
    background-size: 400% 400%;
    animation: ${shimmer} 1.2s ease-in-out infinite, ${borderInfinit} 3s infinite linear;
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

    a {
        border-top: solid gray 1px;
        width: 50%;
        height: 40px;
        font-size: 14px;
        transition-duration: .8s;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;

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
