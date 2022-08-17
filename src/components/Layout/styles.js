import styled, { css } from "styled-components"
import { Linkedin, Github, Instagram, Facebook } from "../../styles/Icons"

export const ContainerLayout = styled.div`
    padding: 20px 50px 0;
    display: flex;
`
export const ContainerLeft = styled.aside`
    border-radius: 10px;
    background-color: #040404;
    width: calc(30% - 30px);
    height: calc(100vh - 40px);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        animation: borderInfinit 2s infinite;

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
    > div {
        width: calc(100% - 40px);
        background-color: gray;
        height: 1px;
        margin-top: 5px;
    }
`
export const Technologies = styled.main`
`
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
    width: 50%;
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
    }
`
const iconsCSS = css`
    width: 30px;
    height: 30px;
    fill: var(--white);
`
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

export const ContainerMain = styled.main`
    background-color: #040404;
    border-radius: 10px;
    width: 60vw;
    position: absolute;
    right: 0;
    margin-right: 50px;

    img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`
export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    section {
        margin-top: 50px;
    }
`
