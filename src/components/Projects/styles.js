import styled from "styled-components"

export const ContainerProjects = styled.section`
    /* background-color: black; */
`
export const AllProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 647px) {
        justify-content: space-between;
    }
`
