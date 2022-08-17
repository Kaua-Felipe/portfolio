import styled from "styled-components"

export const ContainerFooter = styled.footer`
    background-color: #2d2d7d;
    padding: 25px 0;
    display: flex;
    justify-content: center;

    p, a {
        font-size: 15px;
    }
    p {
        font-weight: lighter;
        color: var(--white);
        display: flex;
        align-items: baseline;
    }
    span {
        border-bottom: solid 2px #2d2d7d;
        transition-duration: .5s;

        &:hover {
            border-bottom: solid 2px #97EFE9;
            opacity: .6;
        }
        a {
            color: #97EFE9;
            font-weight: bolder;
            font-size: 17px;
        }
    }
    @media(max-width: 570px) {
        p {
            flex-wrap: wrap;
            justify-content: center ;
        }
        p, a {
            font-size: 10px;
            display: flex;
        }
        span a {
            font-size: 12px;
        }
    }
`
