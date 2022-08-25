import styled from "styled-components"

export const ContainerSkills = styled.section`
    /* background-color: gray; */
`
export const Languages = styled.div`
    /* background-color: gray; */
`
export const Header = styled.nav`
    /* background-color: #090909; */
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    div {
        padding: 5px 20px;
        font-size: 18px;
        cursor: pointer;
        border-bottom: solid 3px var(--secondary);
        transition-duration: .5s;

        &:first-child {
            border-bottom: solid 3px var(--blue);
        }
        &:hover {
            border-bottom: solid 3px var(--blue);
        }
    }
`
export const Main = styled.main``
export const Skill = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > div {
        width: 81%;
        height: 10px;
        background-color: gray;
        border-radius: 10px;
        margin-left: 100px;
    }
`
