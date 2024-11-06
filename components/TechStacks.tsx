"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { FaJs, FaPython, FaReact } from "react-icons/fa6";
import { SiAngular, SiCplusplus, SiCsharp, SiDotnet, SiGo, SiNextdotjs, SiVuedotjs } from "react-icons/si";
import { SiTypescript, SiDart, SiFlutter, SiDjango } from "react-icons/si";

const techstacks = [
  { icon: <SiNextdotjs color="#303030" />, name: 'Next.js', level: 'Advanced' },
  { icon: <FaReact color="#61DAFB" />, name: 'React', level: 'Advanced' },
  { icon: <SiFlutter color="#02569B" />, name: 'Flutter', level: 'Intermediate' },
  { icon: <SiDjango color="#44B78B" />, name: 'Django', level: 'Intermediate' },
  { icon: <SiDotnet color="#512BD4" />, name: 'ASP.NET', level: 'Intermediate' },
  { icon: <SiAngular color="#DD0031" />, name: 'Angular', level: 'Basic' },
  { icon: <SiVuedotjs color="#4FC08D" />, name: 'Vue.js', level: 'Basic' }, 
  
];

const languages = [
  { icon: <FaJs color="#F7DF1E" />, name: 'JavaScript', level: 'Advanced' },
  { icon: <FaPython color="#3776AB" />, name: 'Python', level: 'Advanced' },
  { icon: <SiCsharp color="#239120" />, name: 'C#', level: 'Intermediate' },
  { icon: <SiDart color="#0175C2" />, name: 'Dart', level: 'Intermediate' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript', level: 'Advanced' },
  { icon: <SiGo color="#00ADD8" />, name: 'Go', level: 'Basic' },
  { icon: <SiCplusplus color="#00599C" />, name: 'C++', level: 'Basic' },

]

const TechStacks = () => {
  return (
    <section id="Skills" className="py-20">
      <h1 className="heading pb-14">
        MY
        <span className="text-purple"> Tech Stacks</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div

          className="h-[30vh] md:h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative"
        >

          <InfiniteMovingCards
            items={techstacks}
            direction="right"
            speed="fast"
          />
          <InfiniteMovingCards
            items={languages}
            direction="left"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
