import React, { useState, useEffect } from "react"
import axios from "axios"
import Project from "../Project"
import { ContainerProjects, AllProjects } from "./styles"
import CriptoAPS from "../../../assets/imgs-projects/cripto-aps.jpg"
import cloneTwitter from "../../../assets/imgs-projects/clone-twitter.jpg"
import GeminiWebChatbot from "../../../assets/imgs-projects/gemini-web-chatbot.jpg"
import GithubAPIInterface from "../../../assets/imgs-projects/github-api-interface.jpg"
import JqueryAjaxAula from "../../../assets/imgs-projects/jquery-ajax-aula.jpg"
import NlwEsports from "../../../assets/imgs-projects/nlw-esports.jpg"
import Portfolio from "../../../assets/imgs-projects/portfolio.jpg"
import AnimalsHope from "../../../assets/imgs-projects/animals-hope.jpg"
import ProjetoEletiva from "../../../assets/imgs-projects/projeto-eletiva.jpg"
import TemplatePadaria from "../../../assets/imgs-projects/template-padaria.jpg"

export default function Projects() {
    const [reposData, setReposData] = useState()
    const [listImgs] = useState([
        CriptoAPS, 
        cloneTwitter, 
        GeminiWebChatbot, 
        GithubAPIInterface, 
        JqueryAjaxAula, 
        NlwEsports, 
        Portfolio, 
        AnimalsHope, 
        ProjetoEletiva, 
        TemplatePadaria
    ])
    useEffect(() => {
        async function getReposData() {
            try {
                const response = await axios.get("https://api.github.com/users/Kaua-Felipe/repos")
                const data = await response.data
                const repos = []
                for(var i = 0; i < data.length; i++) {
                    if(data[i].id != 404141801 && data[i].id != 332112550) {
                        repos.push({
                            name: data[i].name, 
                            key: data[i].id, 
                            description: data[i].description, 
                            homepage: data[i].homepage, 
                            html_url: data[i].html_url
                        })
                    }
                }
                setReposData(repos)
            } catch (error) {
                console.error(error.message)
            }
        }
        getReposData()
    }, [])
    var contador = 0

    return (
        <ContainerProjects id="projects">
            <h2>Projetos</h2>
            <AllProjects data-animation="bigBottom">
                {
                    reposData != null ? reposData.map(repo => {
                        contador += 1

                        return (
                            <Project 
                                name={repo.name} 
                                key={repo.key} 
                                image={listImgs[contador - 1]} 
                                description={repo.description} 
                                homepage={repo.homepage} 
                                htmlUrl={repo.html_url}
                                hasDesign={repo.homepage != null && repo.homepage != "" ? true : false} 
                            />
                        )
                    }) : "Não foi possível fazer a requisição"
                }
            </AllProjects>
        </ContainerProjects>
    )
}
