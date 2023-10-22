"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My React Portfolio Page",
    image: "/images/about-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Turn-based Game VS AI",
    description: "My Thesis Project",
    image: "/images/about-image.jpg",
    tag: ["All", "Unity"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const tagChangeHanlder = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-left text-4xl font-bold text-white mt-4 mb-3">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={tagChangeHanlder}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={tagChangeHanlder}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={tagChangeHanlder}
          name="Unity"
          isSelected={tag === "Unity"}
        />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
