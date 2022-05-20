import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.png";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.png";

function App() {
  const name = " Motaz ";
  const year = 2022;
  const projects = [
    {
      projectName: "Skouzi",
      imgSrc: project1
    },
    {
      projectName: "connect web Application",
      imgSrc: project2
    },
    {
      projectName: "E-commerce App",
      imgSrc: project3
    },
    {
      projectName: " Portfolio",
      imgSrc: project4
    }
  ];
  return (
    <div>
      <NavBar />
      <Introduction prenom={name} />
      <ProjectList projects={projects} />
      <Contact />
      <Footer year={year} />
    </div>
  );
}

export default App;
