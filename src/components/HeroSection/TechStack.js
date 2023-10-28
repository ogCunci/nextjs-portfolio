import React, { Fragment } from "react";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  JavaOriginal,
  CsharpOriginal,
  Html5Original,
  Css3Original,
} from "devicons-react";
// grid sm:grid-cols-5 sm:grid-row-1 sm:gap-y-0 sm:gap-x-20 md:gap-x-0 grid-cols-1 grid-row-5 gap-y-3 gap-x-0
const TAB_DATA = (
  <ul className="flex flex-wrap gap-8 justify-center">
    <li className="list-none">
      <img src="https://skillicons.dev/icons?i=html,css" />
    </li>
    <li className="list-none">
      <img src="https://skillicons.dev/icons?i=react,next" />
    </li>
    <li className="list-none">
      <img src="https://skillicons.dev/icons?i=js,ts" />
    </li>
    <li className="list-none">
      <img src="https://skillicons.dev/icons?i=tailwind" />
    </li>
  </ul>
);

const TechStack = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-start justify-center sm:text-left text-center mt-6 sm:mt-8 xl:mt-0 ml-0 sm:ml-[10%]">
      <p className="block text-base font-bold sm:text-lg lg:text-xl pr-0 sm:pr-5 mb-3 sm:mb-0 pt-2 text-center items-center sm:min-w-[125px] min-w-[330px]">
        Tech Stack:
      </p>
      <div className="block box-border sm:min-w-[510px] min-w-[330px]">{TAB_DATA}</div>
    </div>
  );
};

export default TechStack;
