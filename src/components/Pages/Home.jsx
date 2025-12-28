import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { isDark } = useTheme();
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const [nameText, setNameText] = useState("");
  const fullName = "Himanshu Nishad";

  useEffect(() => {
    // GSAP animations for skills
    gsap.fromTo(
      skillsRef.current?.children,
      { opacity: 0, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animations for projects
    gsap.fromTo(
      projectsRef.current?.children,
      { opacity: 0, x: -50, rotateY: -15 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animations for experience
    gsap.fromTo(
      experienceRef.current?.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullName.length) {
        setNameText(fullName.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 800);
  }, []);

  return (
    <>
      <motion.section
        id="Home"
        className="h-full flex flex-col justify-center items-center text-center px-6 py-8 sm:py-12"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.05, rotateY: 2 }}
        >
          Hi, I’m{" "}
          <motion.span
            className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {nameText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            ></motion.span>
          </motion.span>
        </motion.h1>
        <motion.span
          className="text-base md:text-xl font-medium tracking-wide"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            damping: 10,
          }}
          whileHover={{ scale: 1.05 }}
        >
          Senior Software Engineer | HCLTECH | UnderArmour&nbsp;
          <img
            src="	https://www.svgrepo.com/show/303155/under-armour-logo.svg"
            alt="UnderArmour"
            className="w-4 md:w-10 rounded inline"
            style={{
              filter: isDark
                ? "brightness(0) invert(1)"
                : "brightness(0) invert(0)",
            }}
          />
        </motion.span>
      </motion.section>

      <motion.section
        id="about"
        className="py-2 sm:py-5 px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p
          className="font-semibold text-sm sm:text-base leading-relaxed uppercase tracking-widest mb-2"
          style={{ color: isDark ? "#fed7aa" : "#ea580c" }}
        >
          Introduction
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          style={{ color: isDark ? "#fb923c" : "#ea580c" }}
        >
          Overview
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed font-light"
          style={{ color: isDark ? "#e5e7eb" : "#374151" }}
        >
          I am a Full-Stack Developer currently working with HCLTech, with over
          4 years of professional experience. I have worked across a broad range
          of tech stacks, including HTML, CSS, JavaScript, React, Node.js, and
          its frameworks such as Next.js and Express.js, along with this I have
          also experience in AWS Cloud. I would also like to mention that I am
          AWS Certified Cloud Practitioner.
          <br />
          <br />
          I have been actively involved in building and maintaining scalable,
          production-grade web applications, with a deep understanding of web
          architecture. Recognized for strong problem-solving abilities,
          adaptability in fast-paced environments and a proven track record in
          delivering scalable web applications with AI-driven feature
          integration and driving project success.
          <br />
          <br />
          Proficient in building RESTful APIs, handling routing, writing
          middlewares and helper functions and developed end-to-end user
          authentication systems. I have also worked with both SQL and NoSQL
          databases, including data modeling and query optimization. Adept at
          optimizing components for performance, speed, and scalability across
          devices and browsers.
          <br />
          <br />
          Passionate about continuous learning, staying up to date with the
          latest frontend trends, and fostering effective collaboration through
          strong communication and interpersonal skills.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-6 md:py-10 md:px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ color: isDark ? "#fb923c" : "#ea580c" }}
        >
          Skills
        </h2>
        <div
          ref={skillsRef}
          className="flex flex-wrap md:gap-4 gap-2 justify-start"
        >
          {[
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Redux Toolkit",
            "Context API",
            "GSAP",
            "Framer Motion",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Bcrypt & JWT",
            "MongoDB",
            "PostgreSQL",
            "AWS",
            "GitHub",
            "Figma (Basics)",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-3 font-bold text-sm rounded-lg shadow hover:scale-105 transition-transform cursor-pointer tracking-wide"
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                color: isDark ? "#ffffff" : "#000000",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
                }`,
                backdropFilter: "blur(5px)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-6 md:py-10 md:px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ color: isDark ? "#fb923c" : "#ea580c" }}
        >
          Projects
        </h2>
        <div ref={projectsRef} className="grid md:grid-cols-2 md:gap-4 gap-2">
          {[
            {
              title: "Employee Management System",
              desc: "HTML | CSS | TypeScript | SpringBoot | Angular",
            },
            {
              title: "Auth NextJS App",
              desc: "TypeScript | NextJS | Tailwind | Bcrypt | JWT | NodeMailer",
            },
            {
              title: "Portfolio",
              desc: "React | Tailwind | GSAP | UI-Designed",
            },
            {
              title: "Password Shield Web App",
              desc: "React | Tailwind | React Hooks | HTML & CSS",
            },
            {
              title: "E-Commerce Web App",
              desc: "React | Bootstrap | React Hooks | HTML & CSS",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="md:p-4 p-3 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.05)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }`,
                backdropFilter: "blur(5px)",
              }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{p.title}</h3>
              <p style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-6 md:py-10 md:px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ color: isDark ? "#fb923c" : "#ea580c" }}
        >
          Experience
        </h2>
        <div ref={experienceRef} className="space-y-4">
          {[
            {
              role: "Senior Software Engineer",
              location: " - HCLTech, Lucknow",
              duration: "Oct_2024 - Present |",
              title: "| Building scalable enterprise apps",
              description: [
                "Analyze and improve the performance of web applications through techniques such as lazy loading, code splitting, image optimization, and caching strategies.",
                "Collaborate with backend developers to integrate REST APIs, handle data binding, and ensure optimal data flow and state management using Hooks and Redux.",
                "Engineered and maintained reusable UI components and implementing modular architecture, component-driven development with scalable design patterns.",
                "Delivered training sessions to developers, boosting team performance and confidence in project execution.",
              ],
            },
            {
              role: "Software Engineer",
              location: " - HCLTech, Chennai",
              duration: "Mar_2022 - Sep_2024 |",
              title: "| Focused on frontend using React",
              description: [
                "Implemented efficient optimization techniques to enhance page performance and reduce re-renders by 40%.",
                "Identified gaps and opportunities for process improvements that bring business value and reduce high priority incident count.",
                "Provided Hypercare support in priority after successful deployment, maintenance, and during pilot testing.",
                "Resolved customer issues by establishing workarounds and solutions to debug and create defect fixes.",
              ],
            },
            {
              role: "Graduate Engineer",
              location: " - HCLTech, Noida",
              duration: "Sep_2021 - Feb_2022 |",
              title: "| Full Stack Development",
              description: [
                "Managed a team of 7 members and developed an internal HR portal for Employee Management System (EMS) as a capstone project that helps recruiters keep track of applicants.",
                "Collaborated closely with other developers during all stages of the software development life cycle.",
                "Implemented various features, like multiple filtering, CRUD operations, sorting, and pagination. Assisted in troubleshooting code to identify and resolve errors.",
              ],
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all"
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.05)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }`,
                backdropFilter: "blur(5px)",
              }}
            >
              <h3 className="text-xl md:text-2xl inline font-bold">
                {exp.role}
              </h3>
              <span className="inline text-sm md:text-base font-medium ml-2">
                {exp.location}
              </span>
              <div className="flex text-xs md:text-lg">
                <p style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>
                  {exp.duration}
                </p>
                <p style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>
                  {exp.title}
                </p>
              </div>
              <hr
                className="my-2 sm:mx-auto lg:my-2"
                style={{ borderColor: isDark ? "#4b5563" : "#d1d5db" }}
              />
              <div
                className="ps-2"
                style={{ color: isDark ? "#e5e7eb" : "#374151" }}
              >
                <ul className="list-disc">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="md:m-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-6 md:py-10 md:px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ color: isDark ? "#fb923c" : "#ea580c" }}
        >
          Contact
        </h2>
        <p
          className="text-xl mb-6 font-light leading-relaxed"
          style={{ color: isDark ? "#e5e7eb" : "#374151" }}
        >
          Get in touch for opportunities and collaborations.
        </p>
        <div className="flex space-x-4">
          <motion.a
            href="mailto:himanshunishadofficial@gmail.com"
            className="px-4 py-2 bg-gradient-to-r from-[#EA4335] to-[#eba732] text-white rounded-lg hover:bg-orange-600"
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hmnsd/"
            className="px-4 py-2 bg-gradient-to-br from-[#0261c0] to-[#3993ed] text-white rounded-lg hover:bg-blue-600"
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
