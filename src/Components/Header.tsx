import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled("div")({
  padding: "10px",
});
const Wrapper = styled("div")({
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
});

const Title = styled("h1")({
  margin: "20px",
  fontFamily: "Sans-Serif",
});
const AddButton = styled("button")({
  padding: "1rem",
  fontFamily: "Sans-Serif",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "darkgreen",
  },
});

const LinkForm = styled(Link)({
  textDecoration: "none",
  color: "white",
});

// const StarsRating = () => {

// }

const Header: FC = () => {
  return (
    <Container>
      <Title>Awesome Projects</Title>
      <Wrapper>
        <div className="addButtonContainer">
          <AddButton>
            <LinkForm to="/form">+ ADD</LinkForm>
          </AddButton>
        </div>
        <div className="sortContainer">
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
            <option>four</option>
            <option>five</option>
          </select>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
