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

const TAB_DATA = (
  <ul className="pl-10 pr-10 grid sm:grid-cols-7 sm:grid-row-1 sm:gap-y-0 grid-cols-4 grid-row-2 gap-y-3 gap-x-5">
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
);

const TechStack = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-start justify-center mt-6 sm:mt-8 xl:mt-0 ml-0 sm:ml-[10%]">
      <p className="text-base font-bold sm:text-lg lg:text-xl mb-3 sm:mb-0 sm:mt-0.5 text-center">
        Tech Stack:
      </p>
      {TAB_DATA}
    </div>
  );
};

export default TechStack;
