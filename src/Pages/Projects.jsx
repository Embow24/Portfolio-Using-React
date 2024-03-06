import React from "react";
//import project from "../Components/ProjectGallery/Project.json";
import Project from "../Components/ProjectGallery/Project";

var project = [
  {
    "projectName": "Work Day Planner",
    "description": "Created using HTML, CSS, Javacript, JQuery and day.js",
    "deployed": "https://embow24.github.io/Work-day-planner/",
    "gitHub": "https://github.com/Embow24/Work-day-planner",
    "screenshot": ""
  },
  {
    "projectName": "Coding Quiz",
    "description": "Created using HTML, CSS and JavaScript",
    "deployed": "https://embow24.github.io/Coding-quiz/",
    "gitHub": "https://github.com/Embow24/Coding-quiz",
    "screenshot": ""
  },
  {
    "projectName": "Password Generator",
    "description": "Created using HTML, CSS and JavaScript",
    "deployed": "https://embow24.github.io/Password-Generator/",
    "gitHub": "https://github.com/Embow24/Password-Generator",
    "screenshot": ""
  },
  {
    "projectName": "Weather Dashboard",
    "description": "Created using HTML, CSS, JavaScript, JQuery, day.js and open weather API",
    "deployed": "https://embow24.github.io/Weather-Dashboard/",
    "gitHub": "https://github.com/Embow24/Weather-Dashboard",
    "screenshot": ""
  },
  {
    "projectName": "Healthy Bites Group Project",
    "description": "Created using HTML, CSS, JavaScript, JQuery, Spoonacular and Pexels APIs",
    "deployed": "https://frankrl86.github.io/FEBC_Project01/",
    "gitHub": "https://github.com/frankrl86/FEBC_Project01",
    "screenshot": ""
  },
  {
    "projectName": "Team Profile Generator",
    "description": "Created Using JavaScript, npm inquirer and npm jest to generate a HTML file",
    "gitHub": "https://github.com/Embow24/Team-Profile-Generator",
    "screenshot": ""
  }
]

function Projects() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {project.map((item) => (
          <Project item={item}/>
        ))}
      </ul>
    </div>
  );
}

export default Projects;

