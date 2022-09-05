import React from "react"
import { Container, Content, Buttons } from "./styles"

export default function Project({ name, image, description, hasDesign, homepage, htmlUrl }) {
    return (
        <Container img={image}>
            <div></div>
            <Content>
                <span>{name}</span>
                <p>{description}</p>
                <Buttons hasDesign={hasDesign}>
                    {hasDesign ? 
                        <>
                            <a href={homepage} target="_blank">Ver Design</a>
                            <a href={htmlUrl} target="_blank">Ver Documentação</a>

                        </> : <a href={htmlUrl} target="_blank">Ver Documentação</a>
                    }
                </Buttons>
            </Content>
            <div></div>
        </Container>
    )
}
