import styled from "styled-components"

export const ContainerSkills = styled.section`
`
export const Languages = styled.div`
`
export const Header = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    div {
        padding: 5px 20px;
        font-size: 16px;
        cursor: pointer;
        border-bottom: solid 3px var(--secondary);
        transition-duration: .5s;

        &:hover {
            border-bottom: solid 3px var(--blue);
        }
    }
    .active {
        border-bottom: solid 3px var(--blue);
    }
`
