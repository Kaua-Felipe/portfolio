import styled from "styled-components"
import { ArrowCircleTop } from "../../styles/Icons"

export const Container = styled.a`
    position: fixed;
    bottom: 10px;
    right: 5px;
    background-color: #444;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition-duration: .5s;

    &:hover {
        transform: scale(1.1);
    }
`
export const ArrowCircleTopIcon = styled(ArrowCircleTop)`
    width: 30px;
    height: 30px;
`
