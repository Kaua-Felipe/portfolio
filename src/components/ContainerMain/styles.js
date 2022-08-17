import styled from "styled-components"

export const Container = styled.main`
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
        margin-top: 50px;
    }
`
