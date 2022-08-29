import { keyframes } from "styled-components"

export const borderInfinit = keyframes`
    0% { border-color: var(--blue) }
    10% { border-color: var(--purple) }
    20% { border-color: green }
    30% { border-color: yellowgreen }
    40% { border-color: yellow }
    50% { border-color: var(--white) }
    60% { border-color: yellow }
    70% { border-color: yellowgreen }
    80% { border-color: green }
    90% { border-color: var(--purple) }
    100% { border-color: var(--blue) }
`
export const shimmer = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`
