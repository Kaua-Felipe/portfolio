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
            
            @media(min-width: 885px) {
                &:hover {
                    border-bottom: 2px solid var(--purple);
                    opacity: .7;
                }
            }
            a {
                text-decoration: none;
                color: white;
                font-size: 80%;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
    @media(max-width: 885px) {
        position: fixed;
        top: 0;

        ul {
            width: 100vw;
            height: 100%;
            justify-content: inherit;

            li {
                width: 25%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;

                a {
                    text-transform: uppercase;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &:first-child {
                    background-color: var(--blue);
                }
                &:nth-child(2) {
                    background-color: #DD6E42;
                }
                &:nth-child(3) {
                    background-color: #533B4D;
                }
                &:last-child {
                    background-color: #20BF55;
                }
            }
        }
    }
    @media(max-width: 380px) {
        ul li a {
            font-size: 60%;
            font-weight: 600;
        }
    }
    @media(max-width: 300px) {
        ul li a {
            font-size: 50%;
            font-weight: 600;
        }
    }
`
