import styled from "styled-components"

export const Container = styled.div`
    p {
        font-size: 15px;
        color: gray;
        line-height: 20px;
    }
`
export const Skill = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3 {
        width: 20%;
        color: gray;
        text-decoration: overline
    }
    > div {
        width: 50%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;

        div:last-child {
            width: 100%;
            height: 7px;
            background: none;
            border: solid 1px gray;
            border-radius: 10px;

            > div {
                width: ${(props) => props.width}%;
                height: 100%;
                background-color: var(--purple);
                border-radius: 10px;
            }
        }
        div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            span {
                font-size: 15px;
            }
        }
    }
`
