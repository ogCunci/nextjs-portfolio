"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  JavaOriginal,
  CsharpOriginal,
  Html5Original,
  Css3Original,
} from "devicons-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 grid sm:grid-cols-7 sm:grid-row-1 sm:gap-y-0 grid-cols-4 grid-row-2 gap-y-3">
        <li>
          <ReactOriginal size={32} />
        </li>
        <li>
          <NextjsOriginal size={32} />
        </li>
        <li>
          <JavascriptOriginal size={32} />
        </li>
        <li>
          <Html5Original size={32} />
        </li>
        <li>
          <Css3Original size={32} />
        </li>
        <li>
          <JavaOriginal size={32} />
        </li>
        <li>
          <CsharpOriginal size={32} />
        </li>
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

const ABOUT_TEXT =
  "Cocks and balls Cocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and ballsCocks and balls";

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
          className="hidden md:block"
          src="/images/hero-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            {ABOUT_TEXT}
          </p>
          <div className="flex flex-row gap-2 justify-start mt-6 text-base md:text-2xl">
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
