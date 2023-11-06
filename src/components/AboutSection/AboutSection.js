"use client";
import Image from "next/image";

const ABOUT_TEXT =
  "As a recent graudate with solid foundations, I've started diving deeper into front-end development which led me to explore the world of React and Next.js, combined with the flexibility of Tailwind CSS. My primary focus is on building responsive websites that provide a superior user experience. I'm also a teamplayer who belives in the power of teamwork and communication to deliver exceptional results. I am excited to take on new challenges, contribute my skills, and be a part of innovative projects that make a positive impact on the digital world.";

const AboutSection = () => {
  return (
    <section className="text-white lg:mt-28" id="about">
      <div className="flex md:flex-col lg:flex-row gap-2 items-center py-8 sm:py-16">
        <Image
          className="hidden md:block rounded-xl"
          src="/images/about-image.jpg"
          alt="about-image"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:px-4 lg:px-8">
          <h2 className="text-base lg:text-lg font-bold text-primary-500 mb-2">
            About me
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            A passionate Front-end Developer from Hungary
          </h2>
          <p className="text-base">{ABOUT_TEXT}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
