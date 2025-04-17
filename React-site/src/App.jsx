import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Skill from './pages/Skill/Skill';
import Project from './pages/Project/Project';
import { useState, useEffect } from "react";
import Resume from './pages/Resume/Resume';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  // const [projectList, setProjectList] = useState([]);
  
  //   useEffect(() => {
  //      fetch("/db.json")
  //       .then((res) => res.json())
  //       .then((projects) => {
  //         console.log("list",projectList);
  //         setProjectList(projects);
         
  //       })
  //       .catch((error) => console.log("Error", error))
  //   }, []);

  // useEffect(() => {
  //   fetch("https://http5222-assignment-1-1.onrender.com/api/projects")
  //     .then((response) => response.json())
  //     .then((projects) => setProjects(projects))
  //     .catch((error) => console.error(error));
  // }, []);

  // useEffect(() => {
  //   fetch("https://http5222-assignment-1-1.onrender.com/api/skills")
  //     .then((response) => response.json())
  //     .then((skills) => setSkills(skills))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <BrowserRouter>     
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {/* <ProjectList projects={projects} /> 
        <SkillList skills={skills} /> */}

      <Footer />
    </BrowserRouter>
  )
}

export default App
