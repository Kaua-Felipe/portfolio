import styled from "styled-components"

export const ContainerLayout = styled.div`
    padding: 20px 50px 0;
    display: flex;

    @media(max-width: 885px) {
        flex-direction: column;
        padding: 50px 0 0;
    }
`
