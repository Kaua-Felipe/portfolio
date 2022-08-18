import { keyframes } from "styled-components"

export const hoverTop = keyframes`
    0% {
        border: 30px solid transparent;
        border-top: 30px solid rgba(44, 38, 255, .5);
        border-right: 30px solid rgba(44, 38, 255, .5);
    }
    50% {
        border: 113px solid transparent;
        border-top: 113px solid rgba(237, 41, 255, .5);
        border-right: 113px solid rgba(237, 41, 255, .5);
    }
    100% {
        border: 30px solid transparent;
        border-top: 30px solid rgba(237, 41, 255, .5);
        border-right: 30px solid rgba(237, 41, 255, .5);
    }
`
export const hoverBottom = keyframes`
    0% {
        border: 30px solid transparent;
        border-bottom: 30px solid rgba(237, 41, 255, .5);
        border-left: 30px solid rgba(237, 41, 255, .5);
    }
    50% {
        border: 113px solid transparent;
        border-bottom: 113px solid rgba(44, 38, 255, .5);
        border-left: 113px solid rgba(44, 38, 255, .5);
    }
    100% {
        border: 30px solid transparent;
        border-bottom: 30px solid rgba(44, 38, 255, .5);
        border-left: 30px solid rgba(44, 38, 255, .5);
    }
`
export const animationContentProject = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
