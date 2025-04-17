import { useState, useEffect } from "react";
import "./SkillList.css";
import Skill from "../../pages/Skill/Skill";

export default function SkillList({skills}) {
  console.log("jjaj",skills)
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    fetch("https://http5222-assignment-1-1.onrender.com/api/skills",{
      headers: {
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then((skills) => {
        console.log("list",skillList);
        setSkillList(skills);
       
      })
      .catch((error) => console.log("Error", error))
  }, []);

  console.log("pspsp", skills);

  return (
    <div>
      {
      skills.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))
      }
    </div>
  );
}
