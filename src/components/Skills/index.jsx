import React from "react"
import { 
    ContainerSkills, 
    Languages, 
    Header, 
    Main, 
    Skill 
} from "./styles"

export default function Skills() {
    return (
        <ContainerSkills id="skills">
            <h2>Skills</h2>
            <Languages>
                <Header>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>ReactJs</div>
                    <div>SQL</div>
                </Header>
                <Main>
                    <Skill>
                        <h3>HTML:</h3>
                        <div></div>
                    </Skill>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deserunt quia nam, perspiciatis nihil soluta architecto, necessitatibus quam recusandae ipsa eius animi, dolor magnam beatae quo maxime laudantium aspernatur accusantium!
                    </p>
                </Main>
            </Languages>
        </ContainerSkills>
    )
}
