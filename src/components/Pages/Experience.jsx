export default function Experience() {
  const experience = [
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
    },{
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
    },{
      role: "Graduate Engineer",
      location: " - HCLTech, Noida",
      duration: "Sep_2021 - Feb_2022 |",
      title: "| Full Stack Development",
      description: [
        "Managed a team of 7 members and developed an internal HR portal for Employee Management System (EMS) as a capstone project that helps recruiters keep track of applicants.",
        "Collaborated closely with other developers during all stages of the software development life cycle.",
        "Implemented various features, like multiple filtering, CRUD operations, sorting, and pagination. Assisted in troubleshooting code to identify and resolve errors."
      ],
    }
  ];

  return (
    <section id="experience" className="py-6 md:py-10 md:px-6">
      <h2 className="text-3xl font-bold mb-4 text-orange-500">Experience</h2>
      <div className="space-y-4 ">
        {experience.map((experience, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow ring-1 hover:shadow-lg"
          >
            <h3 className="text-xl inline font-medium">{experience.role}</h3>
            <span className="inline text-sm md:text">{experience.location}</span>
            <div className="flex  text-xs md:text-lg">
              <p className="text-stone-300">{experience.duration}</p>
              <p className="text-stone-300">{experience.title}</p>
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto lg:my-2" />
            <div className="ps-2 text-stone-200">
              <ul className="list-disc">
                {experience.description.map((description, index) => (
                  <li key={index} className="md:m-2">{description}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
