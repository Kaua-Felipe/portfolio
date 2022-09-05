import React from "react"
import { 
    Container, 
    ToTop, 
    ArrowCircleTopIcon, 
    ToBottom, 
    ArrowCircleBottomIcon 
} from "./styles"

export default function BackToTopAndBottom() {
    return (
        <Container>
            <ToTop href="#">
                <ArrowCircleTopIcon />
            </ToTop>
            <ToBottom href="#final-main">
                <ArrowCircleBottomIcon />
            </ToBottom>
        </Container>
    )
}
