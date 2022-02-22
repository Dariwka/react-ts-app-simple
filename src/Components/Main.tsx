import React, { FC, useState } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import { IProjectGit } from "../interfaces";

const Main: FC = () => {
  const [newProjectCard, setProjectCard] = useState<IProjectGit[]>([]);

  const deleteCard = (projectNameToDelete: string): void => {
    setProjectCard(
      newProjectCard.filter((project) => {
        return project.projectName !== projectNameToDelete;
      })
    );
  };

  return (
    <div>
      {" "}
      <Header />
      <div className="projectList">
        {newProjectCard.map((project: IProjectGit, key: number) => {
          return (
            <ProjectCard key={key} project={project} deleteCard={deleteCard} />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
