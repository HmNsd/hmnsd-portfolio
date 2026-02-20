import { useEffect, useState, useRef } from "react";
import {
  Volume2,
  MapPin,
  Mail,
  Code,
  Clock5,
  BadgeCheck,
  Briefcase,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../../assets/profile.png";

import { useHighlight } from "../../context/Search";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ searchText, setMatchCount }) {
  const { isDark } = useTheme();
  const headerRef = useRef(null);
  const infoGridRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const contentRef = useRef(null);

  const pronounce = () => {
    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance("Himanshu Nishad");
    utterance.lang = "en-IN";
    utterance.rate = 1.5;
    utterance.pitch = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const Info = ({ icon: Icon, children }) => {
    return (
      <div
        className="flex items-center gap-3 no-underline"
        style={{ color: isDark ? "#d1d5db" : "#374151" }}
      >
        <Icon size={16} style={{ color: isDark ? "#9ca3af" : "#6b7280" }} />
        <span>{children}</span>
      </div>
    );
  };

  const [time, setTime] = useState("");
  const [difference, setDifference] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Local time (12hr format)
      const localTime = now
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .toUpperCase();

      setTime(localTime);

      // IST time
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // Difference in minutes
      const diffMinutes = Math.round((now - istTime) / (1000 * 60));

      if (diffMinutes === 0) {
        setDifference("(IST)");
        return;
      }

      const hours = Math.floor(Math.abs(diffMinutes) / 60);
      const minutes = Math.abs(diffMinutes) % 60;
      const sign = diffMinutes > 0 ? "+" : "-";

      setDifference(`(${sign}${hours}h ${minutes}m from IST)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useHighlight(searchText, contentRef, setMatchCount);

  useEffect(() => {
    // GSAP animation for header text
    gsap.fromTo(
      headerRef.current?.children,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }
    );

    // GSAP animation for info grid
    gsap.fromTo(
      infoGridRef.current?.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.6,
        ease: "power2.out",
      }
    );

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

  return (
    <div ref={contentRef}>
      <div className="flex flex-col justify-center items-center px-4 md:px-6 pt-10 w-full">
        {/* Header */}
        <div className="flex flex-row sm:flex-row items-end gap-5 md:gap-15 mb-6 md:mb-8 w-full">
          <div
            className="w-30 h-30 sm:w-40 sm:h-40 md:w-50 md:h-50 rounded-full shadow-lg shrink-0"
            style={{
              backgroundColor: isDark ? "#202120" : "#adb3ae21",
              border: isDark
                ? "1px solid rgba(0, 0, 0, 0.05)"
                : "1px solid rgba(0, 0, 0, 0.15)",
            }}
          >
            <img
              src={profile}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div ref={headerRef} className="text-start w-full mb-1 md:mb-2">
            <div className="flex sm:flex-row items-start justify-start gap-2 text-2xl sm:text-4xl md:text-5xl">
              <h1 className=" font-bold md:mb-5 mb-2 tracking-tight bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Himanshu Nishad
              </h1>

              <button
                onClick={pronounce}
                className="pt-2.5 sm:pt-4.5 md:pt-6 rounded-full transition-all"
                title="Pronounce name"
              >
                <Volume2
                  className="md:w-5 md:h-5 w-4 h-4"
                  style={{ color: isDark ? "#ffffff" : "#000000" }}
                />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <BadgeCheck
                className="md:w-6 md:h-6 w-4 h-4"
                fill={isDark ? "#0069f3" : "#0069f3"}
                style={{ color: isDark ? "#ffffff" : "#ffffff" }}
              />
              <p
                className="text-sm sm:text-base md:text-lg font-medium"
                style={{ color: isDark ? "#d1d5db" : "#6b7280" }}
              >
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
        <div ref={infoGridRef} className="grid md:gap-5 gap-4 w-full mb-4">
          <div className="grid md:gap-5 gap-4 w-full ">
            <Info icon={Code}>
              Senior Software Engineer @<b>HCLTech</b>
            </Info>
            <Info icon={Briefcase}>
              Founder @<b>BrewnCode</b>
            </Info>
          </div>
          <div className="grid lg:grid-cols-12 
                gap-4 sm:gap-6 md:gap-5 w-full mb-10">

  <div className="grid gap-4 sm:gap-5 lg:col-span-4">
    <Info icon={Mail}>himanshunishadofficial@gmail.com</Info>
    <Info icon={Phone}>+91 9519779338</Info>
  </div>

  <div className="grid gap-4 sm:gap-5 lg:col-span-8">
    <Info icon={MapPin}>New Delhi, India</Info>
    <Info icon={Clock5}>
      {time}
      <span className="ml-2 text-sm opacity-70">
        {difference}
      </span>
    </Info>
  </div>

</div>

        </div>
      </div>

      <motion.section
        id="about"
        className="py-2 sm:py-5 px-6 container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p
          className="font-semibold text-sm sm:text-base leading-relaxed uppercase tracking-widest mb-2"
          style={{ color: isDark ? "#ada9a8" : "#545352" }}
        >
          Introduction
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 tracking-tight"
          style={{ color: isDark ? "#58A8FC" : "#3898FF" }}
        >
          Overview
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed font-light"
          style={{ color: isDark ? "#f9f8f8" : "#374151" }}
        >
          Full-Stack Developer currently working with HCLTech, with over 4+
          years of professional experience. I have worked across a broad range
          of tech stacks, including HTML, CSS, JavaScript, React, Node.js, and
          its frameworks such as Next.js and Express.js, along with this I have
          also experience in AWS Cloud. I would also like to mention that I am
          AWS Certified Cloud Practitioner and experienced in LLM integrations.
          <br />
          <br />
          I have been actively involved in building and maintaining scalable,
          production-grade web applications, with a deep understanding of web
          architecture. Recognized for strong problem-solving abilities,
          adaptability in fast-paced environments and a proven track record in
          delivering scalable web applications with AI-driven feature
          integration and driving overall project success.
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
          style={{ color: isDark ? "#ff9100" : "#ea5936" }}
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
            "NextJS",
            "Tailwind CSS",
            "shadcn/ui",
            "Redux Toolkit",
            "Context API",
            "GSAP",
            "Framer Motion",
            "NodeJS",
            "Express",
            "REST APIs",
            "Bcrypt & JWT",
            "MongoDB",
            "PostgreSQL",
            "AWS",
            "GitHub",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-3 font-bold text-sm rounded-lg shadow hover:scale-105 transition-transform cursor-pointer tracking-wide"
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(241, 241, 241, 0.43)",
                color: isDark ? "#ffffff" : "#000000",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"
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
          style={{ color: isDark ? "#ff9100" : "#ea5936" }}
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
              title: "Spendledger-Backend",
              desc: "TypeScript | Express | NodeJS | PostgreSQL | NeonDB | Drizzle ORM ",
            },
            {
              title: "Password Shield Web App",
              desc: "React | Tailwind | React Hooks | HTML & CSS",
            },
            {
              title: "Auth NextJS App",
              desc: "TypeScript | NextJS | Tailwind | MongoDB | JWT | Bcrypt",
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
                  : "rgba(241, 241, 241, 0.43)",
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
          style={{ color: isDark ? "#ff9100" : "#ea5936" }}
        >
          Experience
        </h2>
        <div ref={experienceRef} className="space-y-4">
          {[
            {
              role: "Senior Software Engineer",
              location: " - HCLTech, Lucknow",
              duration: "Oct-2024 - Present",
              title: "Full Stack Developer",
              description: [
                "Led end-to-end performance improvements reducing LCP by ~65% by implementing SSR, code splitting, dependency cleanup, memoization, lazy loading, and CDN-based asset optimization.",
                "Engineered and maintained 30+ reusable TypeScript UI components, enabling modular architecture and reducing feature development time by 25–40%.",
                "Strengthened application reliability by implementing structured error handling, logging, and type-safe patterns with TypeScript, reducing runtime bugs by 30%",
                "Delivered technical training and mentorship sessions to 5–10+ developers, improving delivery speed, code quality, and team confidence in project execution.",
              ],
            },
            {
              role: "Software Engineer",
              location: " - HCLTech, Chennai",
              duration: "Mar-2022 - Sep-2024",
              title: "Backend Developer",
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
              duration: "Sep-2021 - Feb-2022",
              title: "Frontend Developer",
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
                  : "rgba(241, 241, 241, 0.43)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }`,
                backdropFilter: "blur(5px)",
              }}
            >
              <h3 className="text-l md:text-2xl inline font-bold">
                {exp.role}
              </h3>
              <span className="inline text-sm md:text-base font-light">
                {exp.location}
              </span>
              <div className="flex justify-between w-full  text-s md:text-lg ">
                <p className="font-semi-bold">
                  {exp.title}
                </p>
                <p style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>
                  {exp.duration}
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
          style={{ color: isDark ? "#ff9100" : "#ea5936" }}
        >
          Contact
        </h2>
        <p
          className="text-xl mb-6 font-light leading-relaxed"
          style={{ color: isDark ? "#e5e7eb" : "#374151" }}
        >
          To connect and get in touch for collaborations.
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
    </div>
  );
}
