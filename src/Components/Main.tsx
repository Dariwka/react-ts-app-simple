import React, { FC, useState } from "react";
import { IProjectGit } from "../interfaces";
import ProjectCard from "./ProjectCard";



const Main: FC = () => {

  const [newProjectCard, setProjectCard] = useState<IProjectGit[]>([])

  const deleteCard = (projectNameToDelete: string):void=> {
    setProjectCard(newProjectCard.filter((project)=>{
      return project.projectName !== projectNameToDelete

    }))

  }


  return <div className="projectList">
  {newProjectCard.map((project: IProjectGit, key: number)=>{
    return <ProjectCard key={key} project= {project} deleteCard={deleteCard}/>
  })}
 </div>
 
};

export default Main;
