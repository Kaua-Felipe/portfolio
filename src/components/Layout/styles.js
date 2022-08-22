import styled from "styled-components"

export const ContainerLayout = styled.div`
    padding: 20px 50px 0;
    display: flex;

    [data-animation] {
        opacity: 0;
        transition: 3s;
    }
    [data-animation="bottom"] {
        transform: translate3d(0, 200px, 0);
    }
    [data-animation="bigBottom"] {
        transform: translate3d(0, 400px, 0);
    }
    [data-animation].animate {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
    }
    @media(max-width: 885px) {
        flex-direction: column;
        padding: 50px 0 0;
    }
`
