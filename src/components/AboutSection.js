"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C#</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Eötvös Loránd University, Hungary</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Appliaction Developer Intern at Oracle</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const tabChangeHandler = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/hero-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Cocks and balls Cocks and ballsCocks and ballsCocks and ballsCocks
            and ballsCocks and ballsCocks and ballsCocks and ballsCocks and
            ballsCocks and ballsCocks and ballsCocks and ballsCocks and
            ballsCocks and ballsCocks and ballsCocks and balls
          </p>
          <div className="flex flex-row justify-start mt-8 text-lg md:text-2xl">
            <TabButton
              selectTab={() => tabChangeHandler("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => tabChangeHandler("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => tabChangeHandler("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
