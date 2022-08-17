import styled from "styled-components"

export const ContainerNavBar = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    background-color: var(--secondary);
    z-index: 2;

    ul {
        width: 50vw;
        display: flex;
        justify-content: space-evenly;
        list-style: none;

        li {
            border-bottom: 2px solid #040404;
            transition-duration: .5s;
            
            &:hover {
                border-bottom: 2px solid var(--purple);
                opacity: .7;
            }
            a {
                text-decoration: none;
                color: white;
            }
        }

    }
`
