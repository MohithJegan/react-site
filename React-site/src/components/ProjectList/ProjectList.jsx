import { useState, useEffect } from "react";
import "./ProjectList.css";
import Project from "../../pages/Project/Project";

export default function ProjectList() {
  //console.log("ppp", projects)
  const [projectList, setProjectList] = useState();

  useEffect(() => {
    fetch("https://http5222-assignment-1-1.onrender.com/api/projects",{
      headers: {
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then((projects) => {
        console.log("list",projectList);
        setProjectList(projects);
       
      })
      .catch((error) => console.log("Error", error))
  }, []);

  //console.log("pspsp", projectList);

  return (
    <div>
      {
      projectList.map((project, index) => (
        <Project project={project} key={index} />
      ))
      }
    </div>
  );
}
