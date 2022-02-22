import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ProjectForm from "./components/ProjectForm";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<ProjectForm />} />
      </Routes>
    </Router>
  );
};

export default App;
