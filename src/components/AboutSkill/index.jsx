import React from "react"
import { Container, Skill } from "./styles"

export default function AboutSkill({ skill }) {
    var elementSkillContent, nameSkill, descriptionSkill, width
    if(
        skill == "skill-1" || 
        skill == "skill-2" || 
        skill == "skill-3" || 
        skill == "skill-4" || 
        skill == "skill-5" || 
        skill == "skill-6" || 
        skill == "skill-7" || 
        skill == "skill-8"
    ) {
        if(skill == "skill-1") {
            nameSkill = "HTML"
            descriptionSkill = "Em HTML5, tenho um amplo conhecimento e experiência em mexer com as tags semâticas trazendo um sentido à estrutura do documento HTML, e também conhecimento com a maioria das tags e as mais utilizadas em um site."
            width = 90
        } else if(skill == "skill-2") {
            nameSkill = "CSS"
            descriptionSkill = "Em CSS3, tenho amplo conhecimento em flex-box e media querys como responsividade, key frames e animações em geral, e entre diversos parâmetros para estilização, como por exemplo toda a estilização que fiz para esse meu portfólio e dentre todos os outros projetos que criei e estive presente em sua criação."
            width = 80
        } else if(skill == "skill-3") {
            nameSkill = "JavaScript"
            descriptionSkill = `Sobre JavaScript, tenho um conhecimento intermediário. Sei manipular o DOM do documento, usar Promisses para o consumo de APIs, tenho também conhecimento de toda a lógica de programação como por exemplo mexer com condições: "if, if else, else, switch case", com loops: "while, do while, for, for in, for of, forEach", com exceções: "try, catch, finally", com operadores lógicos e entre outros mais.`
            width = 50
        } else if(skill == "skill-4") {
            nameSkill = "React Js"
            descriptionSkill = `Minha base no React é todo meu conhecimento em javascript, com conhecimento também com a criação, organização e manipulação de componentes, trabalhando com props e estados do React, no caso o "useState", com a renderização da aplicação com o "useEffect", e também mexendo com rotas.`
            width = 30
        } else if(skill == "skill-5") {
            nameSkill = "SQL"
            descriptionSkill = "No SQL, tenho conhecimento com os comandos SELECT, UPDATE, INSERT, DELETE, ORDER BY, JOIN, e mais alguns outros conhecimentos prévios sobre a linguagem de banco de dados."
            width = 40
        } else if(skill == "skill-6") {
            nameSkill = "Resposividade"
            descriptionSkill = "Responsividade é uma das coisas mais importantes hoje em dia para quem deseja criar um website, pois a maioria das pessoas hoje possuem um celular, do que um computador por exemplo, e é muito mais prático o uso dos smartphones. Contudo, meus conhecimentos em responsividade no CSS inclui saber utilizar os comandos do flex-box e media queries para diferentes tamanhos de dispositivos."
            width = 60
        } else if(skill == "skill-7") {
            nameSkill = "NPM"
            descriptionSkill = "NPM, um dos gerenciadores de pacote mais utilizado nos dias de hoje, e meus conhecimentos nele é de instalar, remover e atualizar dependências, bibliotecas e frameworks a partir da interface de linhas de comando, conhecido também como o prompt de comando do sistema."
            width = 70
        } else if(skill == "skill-8") {
            nameSkill = "GIT"
            descriptionSkill = "NPM, um dos gerenciadores de pacote mais utilizado nos dias de hoje, e meus conhecimentos nele é de instalar, remover e atualizar dependências, bibliotecas e frameworks a partir da interface de linhas de comando, conhecido também como o prompt de comando do sistema."
            width = 50
        }
        elementSkillContent = (
            <>
                <Skill width={width}>
                    <h3>{nameSkill}</h3>
                    <div>
                        <div>
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </Skill>
                <p>{descriptionSkill}</p>
            </>
        )
    }

    return (
        <Container>
            {elementSkillContent}
        </Container>
    )
}
