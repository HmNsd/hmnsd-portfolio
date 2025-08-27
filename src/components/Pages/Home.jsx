import React, { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/HmNsd')
  //   .then(response => response.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setData(data)
      
  //   })

  // })
  return (
    <>
      <section
        id="Home"
        className="h-full flex flex-col justify-center items-center text-center px-6 py-8 sm:py-12"
      >
        {/* <img src={data.avatar_url} alt="git Image" width={300} /> */}
        <h1 className=" text-2xl md:text-5xl font-bold mb-2 sm:mb-4">
          Hi, I’m <span className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 bg-clip-text text-transparent">Himanshu Nishad</span>
        </h1>
        <p className="text-sm md:text-2xl md:font-bold">
          Senior Software Engineer | HCLTECH | UnderArmour&nbsp;
          <img src="	https://www.svgrepo.com/show/303155/under-armour-logo.svg" alt="Google" className="w-4 md:w-10 rounded inline md:invert-75 invert"  />
        </p>
      </section>

      <section id="about" className="py-2 sm:py-5 px-6 container mx-auto">
        <p className="text-stone-200 md:font-semibold leading-relaxed ">Introduction</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-400">Overview,</h2>
        <p className="text-stone-100 text:l md:text-xl leading-relaxed">
      


          Senior Software Engineer having over 4+ years of experience building complex and scalable user interfaces using React, Redux, and modern frontend technologies. Strong expertise in HTML5, CSS3, JavaScript, and deep understanding of web fundamentals, DOM manipulation, and responsive design principles.
<br /><br />
Skilled in component-based architecture, React Hooks, state management, and API integration. Experienced in collaborating with backend teams using Node.js, MySQL, MongoDB, Redis, and AWS to deliver seamless integrations. Adept at optimizing components for performance, speed, and scalability across devices and browsers.
<br /><br />
Proficient in Git version control and Agile methodologies, with a strong focus on clean, maintainable code and best practices. Recognized for problem-solving skills, adaptability in fast-paced environments, and delivering high-quality web applications that drive project success.
<br /><br />
Passionate about continuous learning, staying up to date with the latest frontend trends, and fostering effective collaboration through strong communication and interpersonal skills.
        </p>


      </section>
    </>
  );
}
