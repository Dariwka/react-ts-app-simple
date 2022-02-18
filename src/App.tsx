import React, {FC} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header'
import Main from './Components/Main'

const App:FC = () => {
  return (
    <Router>
      <Header/>
      <Main/>
    </Router>
  )
}

export default App