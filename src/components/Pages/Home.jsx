import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <section
        id="Home"
        className="h-full flex flex-col justify-center items-center text-center px-6 py-8 sm:py-12"
      >
        <h1 className=" text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            Himanshu Nishad
          </span>
        </h1>
        <span className="text-sm md:text-2xl md:font-bold font-extralight">
          Senior Software Engineer | HCLTECH | UnderArmour&nbsp;
          <img
            src="	https://www.svgrepo.com/show/303155/under-armour-logo.svg"
            alt="Google"
            className="w-4 md:w-10 rounded inline md:invert-75 invert"
          />
        </span>
      </section>

      <section id="about" className="py-2 sm:py-5 px-6 container mx-auto">
        <p className="text-blue-200 font-medium sm:font-semibold text-sm sm:text-base leading-relaxed ">
          Introduction
        </p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold  sm:mb-4 text-blue-200">
          Overview,
        </h2>
        <p className="text-stone-100 text:l md:text-xl leading-relaxed">
          Senior Software Engineer with over 4 years of experience designing and
          developing scalable, high-performance web applications using React,
          Redux, and TypeScript. Strong foundation and expertise in building
          robust RESTful APIs and full-stack solutions with Node.js, Express.js,
          Next.js, and MongoDB. Adept in delivering clean, maintainable code and
          crafting modern, responsive user interfaces using Tailwind CSS,
          MagicUI, and Aceternity UI, with a strong focus on usability and
          performance.
          <br />
          <br />
          Experienced in deploying, scaling, and managing applications on AWS,
          with a deep understanding of web architecture, UI/UX best practices.
          Recognized for driving technical excellence and delivering solutions
          that align with business goals. Adept at optimizing components for
          performance, speed, and scalability across devices and browsers.
          <br />
          <br />
          Proficient in Git version control and Agile methodologies, with a
          strong focus on clean, maintainable code and best practices.
          Recognized for problem-solving skills, adaptability in fast-paced
          environments, and delivering high-quality web applications that drive
          project success.
          <br />
          <br />
          Passionate about continuous learning, staying up to date with the
          latest frontend trends, and fostering effective collaboration through
          strong communication and interpersonal skills.
        </p>
      </section>
    </>
  );
}
