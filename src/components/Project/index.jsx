import React from "react"
import { Container, Content } from "./styles"

export default function Project({ name, image, description, urlRepo }) {
    return (
        <Container img={image}>
            <div></div>
            <Content>
                <span>{name}</span>
                <p>{description}</p>
                <a href={urlRepo} target="_blank">View Design</a>
            </Content>
            <div></div>
        </Container>
        // Clone do Twitter: https://www.pexels.com/pt-br/foto/smartphone-android-preto-3585092/
        // Books empilhados: https://www.pexels.com/pt-br/foto/foto-de-foco-seletivo-de-pilha-de-livros-com-diversos-titulos-1148399/
        // Organização: https://www.pexels.com/pt-br/foto/mao-organizacao-leitura-lendo-6958542/
        // Caderno, notbook, lápis: https://www.pexels.com/pt-br/foto/dois-lapis-azuis-em-cima-do-caderno-branco-730706/
        // Câmera e books: https://www.pexels.com/pt-br/foto/camera-minolta-milc-preta-e-cinza-970080/
        // Pets: https://www.pexels.com/pt-br/foto/cao-pelo-longo-branco-e-preto-220938/
        // endereços, casa: 
            // https://www.pexels.com/pt-br/foto/apartamento-bolsa-sacola-alforje-6347566/
            // https://www.pexels.com/pt-br/foto/menino-de-sueter-cinza-escrevendo-em-papel-branco-5302811/
    )
}
