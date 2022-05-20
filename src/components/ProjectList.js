import project1 from "../images/project1.jpg";
import project2 from "../images/project2.png";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";

const ProjectList = () => {
  const projects = [
    {
      projectName: "SKOUZI",
      imgSrc: project1
    },
    {
      projectName: "CLOUD PLATFORM",
      imgSrc: project2
    },
    {
      projectName: "Approach serivces",
      imgSrc: project3
    },
    {
      projectName: " Portfolio",
      imgSrc: project4
    }
  ];

  return (
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {projects.map((el, i) => (
          <div class="project-card">
            <img src={el.imgSrc} alt="project" />
            <h3>{el.projectName}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="https://github.com/TrMotaz" >Github Link</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectList;
