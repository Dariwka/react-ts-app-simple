import React, { FC, ChangeEvent, useState } from "react";
import { IProjectGit } from "../interfaces";
import styled from "@emotion/styled";

const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  background:
    "linear-gradient(rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0.5)), url(https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80), center",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Wrapper = styled("div")({
  padding: "20px",
  width: "50%",
  backgroundColor: "black",
  borderRadius: "5px",
});

const Title = styled("h1")({
  fontSize: "30px",
  fontWeight: "300",
  textAlign: "center",
  color: "white",
});

const Form = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "30px",
});

const InputRow = styled("input")({
  flex: "1",
  minWidth: "40%",
  margin: "10px 0px",
  padding: "10px",
});
const ButtonSubmit = styled("button")({
  border: "none",
  padding: "15px 20px",
  backgroundColor: "#DB8C44",
  color: "white",
  cursor: "pointer",
  margin: "20px 0",
  ":disabled": {
    color: "salmon",
    cursor: "not-allowed",
  },
});

const ProjectForm: FC = () => {
  const [project, setProject] = useState<string>(" ");
  const [projectLink, setLink] = useState<string>(" ");
  const [newProjectCard, setProjectCard] = useState<IProjectGit[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "project") {
      setProject(event.target.value);
    } else {
      setLink(event.target.value);
    }
  };

  const submitProject = (): void => {
    const newProject = {
      projectName: project,
      projectLink: projectLink,
    };
    setProjectCard([...newProjectCard, newProject]);

    setProject("");
    setLink("");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Fill a form</Title>
        <Form>
          <InputRow
            type="text"
            placeholder="Your Github Project Name......"
            name="project"
            onChange={handleChange}
            value={project}
          />
          <InputRow
            type="text"
            placeholder="Your Github Project Link......"
            name="projectLink"
            value={projectLink}
            onChange={handleChange}
          />
          <ButtonSubmit onClick={submitProject}>Submit</ButtonSubmit>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProjectForm;
