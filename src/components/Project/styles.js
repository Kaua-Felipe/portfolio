import styled from "styled-components"
import { hoverTop, hoverBottom, animationContentProject } from "./animations"

export const Container = styled.div`
    width: 20%;
    height: 300px;
    // margin-bottom: 20px;
    margin: 10px;
    padding: 30px;
    border-radius: 5px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    transition-duration: 2s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 7px 0px rgba(237, 41, 255, .5);
    
    &:hover {
        background: #020202;
        box-shadow: 0px 0px 7px 0px rgba(237, 41, 255, 1);

        span, p, a {
            animation: ${animationContentProject} .5s both;
            animation-delay: .4s;
            animation-timing-function: linear;
        }
        div:first-child {
            animation: ${hoverTop} .5s both;
        }
        div:last-child {
            animation: ${hoverBottom} .5s both;
        }
    }
    div {
        transition-duration: .1s;
        border-radius: 5px;
    }
    div:first-child {
        width: 0;
        height: 0;
        background-color: transparent;
        border: 30px solid transparent;
        border-top: 30px solid rgba(44, 38, 255, .5); //#5134ff
        border-right: 30px solid rgba(44, 38, 255, .5);
        position: absolute;
        top: 0;
        right: 0;
    }
    div:last-child {
        width: 0;
        height: 0;
        background-color: transparent;
        border: 30px solid transparent;
        border-bottom: 30px solid rgba(237, 41, 255, .7);
        border-left: 30px solid rgba(237, 41, 255, .7); // #ed29ff
        position: absolute;
        bottom: 0;
        left: 0;
    }
    @media(max-width: 647px) {
        width: 30%;
    }
    @media(max-width: 447px) {
        width: 60%;
        margin: 10px auto;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: space-between;

    span, p, a {
        font-family: Arial, Helvetica, sans-serif;
        opacity: 0;
        font-size: 13px;
        text-align: center;
        color: gray;
    }
    span {
        color: #d2d2d2;
        font-size: 17px;
        font-weight: bolder;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;
        max-height: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;
        max-height: 100%;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }
    a {
        background: linear-gradient(90deg, rgba(255, 0, 221, .5) 0%, rgba(131, 38, 255, .5) 50%, rgba(44, 38, 255, .5) 100%);
        color: var(--white);
        width: 60%;
        padding: 5px 20px;
        border-radius: 30px;
        transition-duration: .4s;
        
        &:hover {
            transform: scale(1.05);
        }
    }
`
