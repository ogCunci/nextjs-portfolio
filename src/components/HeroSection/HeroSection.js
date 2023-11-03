"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TechStack from "./TechStack";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleDownloadCv = () => {
    router.push("/api/download");
  };

  const handleContactMe = () => {
    window.location = "mailto:bolykydani@gmail.com";
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left sm:mr-4 md:mr-0 w-full">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.1] font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-950 via-primary-800 to-primary-500">
              Hey, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Daniel",
                1000,
                "Developer",
                1000,
                "React Enjoyer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl">
            I'm a fresh CS graduate who's dedicated about Front-end React/NexJS
            development based in Hungary.
          </p>
          <div>
            <button
              onClick={handleContactMe}
              className="px-6 py-3 w-full sm:w-fit sm:mr-4 rounded-full bg-gradient-to-br from-primary-950 via-primary-800 to-primary-500 hover:bg-slate-200 text-white max-w-xs"
            >
              Contact me
            </button>
            <button
              type="button"
              onClick={handleDownloadCv}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-primary-950 via-primary-800 to-primary-500 hover:bg-slate-800 text-white mt-3 max-w-xs"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 max-w-xs">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 rounded-full bg-[#181818] w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] relative">
          <Image
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src="/images/hero-image.png"
            alt="hero-image"
            width={300}
            height={300}
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
}
