import React, { useState } from "react"
import AboutSkill from "../AboutSkill"
import { 
    ContainerSkills, 
    Languages, 
    Header 
} from "./styles"

export default function Skills() {
    const [skill, setSkill] = useState("skill-1")

    function verifySkill(event) {
        const idSkillClicked = event.target.id
        setSkill(idSkillClicked)
        
        const items = document.querySelectorAll(".skills-items")
        items.forEach(item => item.classList.remove("active"))
        if(idSkillClicked == "skill-1") {
            event.target.classList.add("active")
        } else if(idSkillClicked == "skill-2") {
            event.target.classList.add("active")
        } else if(idSkillClicked == "skill-3") {
            event.target.classList.add("active")
        } else if(idSkillClicked == "skill-4") {
            event.target.classList.add("active")
        } else if(idSkillClicked == "skill-5") {
            event.target.classList.add("active")
        }
    }

    return (
        <ContainerSkills id="skills">
            <h2>Skills</h2>
            <Languages>
                <Header>
                    <div id="skill-1" className="skills-items active" onClick={(e) => verifySkill(e)}>HTML</div>
                    <div id="skill-2" className="skills-items" onClick={(e) => verifySkill(e)}>CSS</div>
                    <div id="skill-3" className="skills-items" onClick={(e) => verifySkill(e)}>JavaScript</div>
                    <div id="skill-4" className="skills-items" onClick={(e) => verifySkill(e)}>ReactJs</div>
                    <div id="skill-5" className="skills-items" onClick={(e) => verifySkill(e)}>SQL</div>
                </Header>
                <main>
                    <AboutSkill skill={skill} />
                </main>
            </Languages>
        </ContainerSkills>
    )
}
