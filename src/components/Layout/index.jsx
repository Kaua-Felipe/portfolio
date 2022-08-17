import React from "react"
import ContainerLeft from "../ContainerLeft"
import ContainerMain from "../ContainerMain"
import { 
    ContainerLayout 
} from "./styles"

export default function Layout() {
    return (
        <ContainerLayout>
            <ContainerLeft />
            <ContainerMain />
        </ContainerLayout>
    )
}
