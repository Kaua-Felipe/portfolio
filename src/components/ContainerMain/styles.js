import styled from "styled-components"

const backgroundColor = props => props.globalTheme == "dark" ? "#040404" : "#DADADA"
const color = props => props.globalTheme == "dark" ? "#DADADA" : "#040404"

export const Container = styled.main`
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: 10px;
    width: 60vw;
    position: absolute;
    right: 0;
    margin-right: 50px;

    h2 {
        &::before {
            border: 2px solid ${props => props.globalTheme == "dark" ? "var(--white)" : "#040404"};
        }
        &::after {
            background-color: ${props => props.globalTheme == "dark" ? "var(--white)" : "#040404"};
        }
    }
    img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    @media(max-width: 885px) {
        position: inherit;
        width: 100%;
        border-radius: 0;

        img {
            border-radius: 0;
        }
    }
`
export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    section {
        padding-top: 50px;
    }
`
