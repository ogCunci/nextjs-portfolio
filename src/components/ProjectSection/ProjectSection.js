"use client";
import React, { Fragment, useState } from "react";
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
    description:
      "A Unity game I made as the thesis for university degree. Players explore randomly generated levels and fight groups of enemies in a turn based combat, where the enemy is controlled by an AI model called Behaviour Tree.",
    image: "/images/projects/game-vs-ai.png",
    tag: ["All", "Unity"],
    gitUrl: "https://gitlab.com/ogcunci/cruel-angel-thesis",
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
    <section className="lg:mt-16" id="projects">
      <h2 className="text-left text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
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
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
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
    </section>
  );
};

export default ProjectSection;
