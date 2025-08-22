import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="Home"
        className="h-full flex flex-col justify-center items-center text-center px-6 py-8 sm:py-12"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-orange-500">Himanshu Nishad</span>
        </h1>
        <p className="text-lg text-blue-00 font-bold">
          Senior Software Engineer | HCLTECH | UnderArmour
        </p>
      </section>

      <section id="about" className="py-10 px-6 container mx-auto">
        <p className="text-stone-200 leading-relaxed">Introduction,</p>
        <h2 className="text-4xl font-bold mb-4 text-orange-400">Overview</h2>
        <p className="text-stone-200 leading-relaxed">
          React Frontend Developer having over 4 years of experience for building
          complex user interfaces using React, Redux, and other modern frontend
          technologies. HTML5, CSS3, JavaScript​: Strong understanding of web
          fundamentals and DOM manipulation.
          <br />
          <br />
          Skilled in component-based architecture, state management using HOOKs,
          and API integration. Collaborate with backend teams working with
          Node.js, MySQL, MongoDB, Redis, and AWS to integrate APls. Optimize
          components for maximum performance across web-capable devices and
          browsers.
          <br />
          <br />
          Ensure responsive design and optimize front-end performance for speed
          and scalability. Proficient in version control (Git) and Agile
          development methodologies.
          <br />
          <br />
          Passionate to stay updated with the latest front-end trends update
          released and follow best practices.
        </p>
      </section>
    </>
  );
}
