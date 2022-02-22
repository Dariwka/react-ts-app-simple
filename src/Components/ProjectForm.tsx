import React, { FC, ChangeEvent, useState } from "react";
import { IProjectGit } from "../interfaces";

const ProjectForm: FC = () => {
  const [project, setProject] = useState<string>(" ");
  const [projectLink, setLink] = useState<string>(" ");
  const [projectRating, setRating] = useState<number>(0);
  const [newProjectCard, setProjectCard] = useState<IProjectGit[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "project") {
      setProject(event.target.value);
    } else if (event.target.name === "projectLink") {
      setLink(event.target.value);
    } else {
      setRating(Number(event.target.value));
    }
  };

  const submitProject = (): void => {
    const newProject = {
      projectName: project,
      projectLink: projectLink,
      projectRating: projectRating,
    };
    setProjectCard([...newProjectCard, newProject]);

    setProject("");
    setLink("");
    setRating(0);
  };

  return (
    <div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Project Name"
          name="project"
          onChange={handleChange}
          value={project}
        />
        <input
          type="text"
          placeholder="Project Link"
          name="projectLink"
          value={projectLink}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating"
          name="projectRating"
          value={projectRating}
          onChange={handleChange}
        />
      </div>
      <button onClick={submitProject}>Submit</button>
    </div>
  );
};

export default ProjectForm;
