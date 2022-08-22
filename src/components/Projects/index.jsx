import React, { useState, useEffect } from "react"
import axios from "axios"
import Project from "../Project"
import { ContainerProjects, AllProjects } from "./styles"

export default function Projects() {
    const [reposData, setReposData] = useState()
    const [listImgs] = useState([
        "https://images.pexels.com/photos/3585092/pexels-photo-3585092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/6958542/pexels-photo-6958542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/970080/pexels-photo-970080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/5302811/pexels-photo-5302811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    console.log(reposData)
    var contador = 0

    return (
        <ContainerProjects id="projects" data-animation="bigBottom">
            <h2>Projetos</h2>
            <AllProjects>
                {
                    reposData != null && reposData.map(repo => {
                        contador += 1

                        return (
                            <Project 
                                name={repo.name} 
                                key={repo.key} 
                                image={listImgs[contador - 1]} 
                                description={repo.description} 
                                urlRepo={repo.homepage != null && repo.homepage != "" ? repo.homepage : repo.html_url} 
                            />
                        )
                    })
                }
            </AllProjects>
        </ContainerProjects>
    )
}
