"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left w-full">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#171616] via-[#163f99] to-[#00a2ff]">
              Hey, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Cunci",
                1000,
                "Frontend Developer",
                1000,
                "The biggest cigány",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl">
            büdös cigányék
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#171616] via-[#163f99] to-[#00a2ff] hover:bg-slate-200 text-white">
              Fuck me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-[#171616] via-[#163f99] to-[#00a2ff] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.png"
              alt="hero-image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
