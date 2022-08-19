import React, { useState, useEffect } from "react"
import axios from "axios"
import Project from "../Project"
import { ContainerProjects, AllProjects } from "./styles"

export default function Projects() {
    const [reposData, setReposData] = useState()
    const [listImgs, setListImgs] = useState([
        "https://images.pexels.com/photos/3585092/pexels-photo-3585092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/6958542/pexels-photo-6958542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/970080/pexels-photo-970080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/5302811/pexels-photo-5302811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ])
    useEffect(() => {
        // async function searchReposData() {
        //     const response = await axios.get("https://api.github.com/users/Kaua-Felipe/repos")
        //     const data = await response.data
        //     console.log(data)
        //     const repos = {
        //         name: data.name
        //     }
        //     setReposData(repos)
        // }

        // searchReposData()

        axios.get("https://api.github.com/users/Kaua-Felipe/repos")
            .then(response => {
                setReposData(response.data)
            })
            .catch(err => console.error(err))
    }, [])
    console.log(reposData)
    var contador = 0

    return (
        <ContainerProjects id="projects">
            <h2>Projetos</h2>
            <AllProjects>
                {
                    reposData != null && reposData.map(repo => {
                        if(repo.id != 404141801 && repo.id != 332112550) {
                            contador += 1
    
                            return (
                                <Project 
                                    name={repo.name} 
                                    key={repo.id} 
                                    image={listImgs[contador - 1]} 
                                    description={repo.description} 
                                    urlRepo={repo.homepage != null ? repo.homepage : repo.html_url}
                                />
                            )
                        } else {
                            return null
                        }
                    })
                }
            </AllProjects>
        </ContainerProjects>
    )
}
