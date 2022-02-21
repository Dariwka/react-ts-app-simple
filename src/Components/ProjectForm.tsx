import React, { FC, ChangeEvent, useState } from "react";
import { IProjectGit } from "../interfaces";

const ProjectForm: FC = () => {

  const [projectName, setProject] = useState<string>("");
  const [projectLink, setLink] = useState<string>("");
  const [projectRating, setRating] = useState<number>(0);
  const [newProjectCard, setProjectCard] = useState<IProjectGit[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "projectName") {
      setProject(event.target.value);
    } else {
      setRating(Number(event.target.value));
    }
  };

  const submitProject = (): void => {
    const newProject = {
      projectName: projectName,
      projectLink: projectLink,
      projectRating: projectRating,
    };
    setProjectCard([...newProjectCard, newProject])

    setProject("");
    setLink("")
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
          value={projectName}
        />
        <input
          type="number"
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
