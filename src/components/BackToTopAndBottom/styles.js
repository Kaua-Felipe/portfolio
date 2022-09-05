import styled, { css } from "styled-components"
import { ArrowCircleTop, ArrowCircleBottom } from "../../styles/Icons"

export const Container = styled.div`
    position: fixed;
    bottom: 10px;
    right: 5px;
    background-color: #444;
    width: 40px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    transition-duration: .5s;

    &:hover {
        transform: scale(1.1);
    }
`
export const ToTop = styled.a`

`
export const ToBottom = styled.a`

`
const globalIcons = css`
    width: 30px;
    height: 30px;
`
export const ArrowCircleTopIcon = styled(ArrowCircleTop)`
    ${globalIcons}
`
export const ArrowCircleBottomIcon = styled(ArrowCircleBottom)`
    ${globalIcons}
`
