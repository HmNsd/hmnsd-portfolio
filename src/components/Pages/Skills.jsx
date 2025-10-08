export default function Skills() {
  const skills = [
    "React",
    "NodeJS",
    "ExpressJS",
    "NextJS",
    "TailwindCSS",
    "MongoDB",
    "GitHub",
    "AWS",
    "JavaScript(ES6+)",
    "TypeScript",
    "HTML & CSS"
  ];

  return (
    <>
      <section id="skills" className="py-6 md:py-10 md:px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Skills</h2>
        <div className="flex flex-wrap md:gap-4 gap-2 justify-start">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-stone-900 hover:bg-white hover:text-black rounded-lg shadow "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="py-2 md:py-10 md:px-6">
        <div className="space-y-1 md:p-6 p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h2 className="text-2xl font-medium mb-2 ">Frontend Development</h2>

          <div className="ps-3">
            <ul className="list-disc">
              <li className="m-1">
                React.js & Hooks – component-driven UI, state & lifecycle
                management
              </li>
              <li className="m-1">
                Redux Toolkit & Context API – advanced state management
              </li>
              <li className="m-1">
                JavaScript (ES6+) & TypeScript (basics) – modern, clean,
                maintainable code
              </li>
              <li className="m-1">
                HTML5, CSS3, Tailwind CSS – responsive, accessible layouts
              </li>
              <li className="m-1">
                Responsive Design – Flexbox, Grid, mobile-first approach
              </li>
              <li className="m-1">Build Tools – Vite, Webpack, Babel</li>
            </ul>
          </div>
        </div>
        <div className="space-y-1 md:mt-5 mt-2 md:p-6 p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h2 className="text-2xl font-medium">Backend & Tools</h2>
          <div className="ps-3">
            <ul className="list-disc">
              <li className="m-1">
                Node.js & Express.js (basics) – REST APIs & server-side logic
              </li>
              <li className="m-1">API Integration – REST, JSON handling </li>
              <li className="m-1">
                Git & GitHub – branching, pull requests, version control
              </li>
              <li className="m-1">NPM – dependency and package management </li>
              <li className="m-1">
                GitHub Pages, Vercel – deploying frontend apps{" "}
              </li>
              <li className="m-1">
                AWS (EC2, S3, CloudFront – basics) – hosting & cloud storage
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-1 mt-5 md:p-6 p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h2 className="text-2xl font-medium">Professional Skills</h2>
          <div className="ps-3">
            <ul className="list-disc">
              <li className="m-1">
                Strong problem-solving & debugging mindset{" "}
              </li>
              <li className="m-1">
                Writing clean, scalable, maintainable and reusable component
                code
              </li>
              <li className="m-1">
                Collaboration in Agile/Scrum and cross-functional teams{" "}
              </li>
              <li className="m-1">
                Agile learner & adaptable to new technologies{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
