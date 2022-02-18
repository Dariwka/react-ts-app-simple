import React from 'react'
import styled from "@emotion/styled";


const Container = styled("div")({

})
const Title = styled("h1")({
  margin:"20px",
  fontFamily: 'Sans-Serif',
})


const Header = () => {
  return (
    <Container>
        <Title>Awesome Projects</Title>
        <div className="buttonContainer">
          <div className="addButtonContainer">
              <button>+ ADD</button>
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
        </div>
    </Container>
  )
}

export default Header