"use client";
import React, { Fragment, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Car Rental",
    description:
      "A car rental website serves as an online platform that enables users to access a range of services and information related to renting vehicles. The website provides an interface for searching and reserving cars.",
    image:
      "https://previews.dropbox.com/p/thumb/ACH7zADgOePk_pvK5aq0L63NOrCMg4EIY2WBKtrTKalmGZLg3dNH9row5h_8ffwVP9o78x92cd1_TC9hmNDBQW4icINBnJENTpaYJg8lEhFKNdwTeSnRS08VKb5Jm8bc119hVBdIPgezKT2aV73NkOzIAQ0uGM5mgP991aYjVOy_3HfOs3THvGtT_77qm9Wv7TeGYowUntNFqM4GUPE-PAR33GomBvKK3WrCgd4693PVytoHI3jN1WUHTINXDoCDuck4r53v41zpWCe7TNmElg9SRPafyIFA6g21tnC-be6J5jViD5XA42XghInDVG_mubFK1PBB996FuW_ZAYWy-8_v/p.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ogCunci/car-rental",
    previewUrl: "https://cunci-car-rental.vercel.app/?limit=10",
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
