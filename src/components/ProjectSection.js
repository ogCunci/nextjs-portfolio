import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My React Portfolio Page",
    image: "/images/about-image.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Turn-based Game VS AI",
    description: "My Thesis Project",
    image: "/images/about-image.jpg",
    tag: ["All", "Unity"],
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
