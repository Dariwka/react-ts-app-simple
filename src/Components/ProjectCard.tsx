import React from "react";
import { IProjectGit } from "../interfaces";

interface Props {
  project: IProjectGit;
  deleteCard(projectNameToDelete: string): void;
}

const ProjectCard = ({ project, deleteCard }: Props) => {
  return (
    <div className="project">
      <div className="content">
        <span>{project.projectName}</span>
        <span> {project.projectLink}</span>
        {/* <span> {project.projectRating}</span> */}
        <button
          onClick={() => {
            deleteCard(project.projectName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
