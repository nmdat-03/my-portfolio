import img from "../assets/img.jpg";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: img,
    title: "Project 1",
    tags: ["ReactJS", "TailwindCSS"],
    projectLink: "",
  },
  {
    imgSrc: img,
    title: "Project 2",
    tags: ["ReactJS", "TailwindCSS"],
    projectLink: "",
  },
  {
    imgSrc: img,
    title: "Project 3",
    tags: ["ReactJS", "TailwindCSS"],
    projectLink: "",
  },
];

const Project = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] reveal-up">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
