import React from "react"
import { ContainerFooter } from "./styles"

export default function Footer() {    
    return (
        <ContainerFooter>
            <p>
                {`2022 - ${new Date().getFullYear()}`} © Todos os direitos reservados. Desenvolvido por&nbsp;<span><a href="https://github.com/Kaua-Felipe" target="_blank">Kauã Felipe Alves</a></span>
            </p>
        </ContainerFooter>
    )
}
