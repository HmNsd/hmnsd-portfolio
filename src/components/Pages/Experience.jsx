export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-4 text-orange-500">Experience</h2>
      <div className="space-y-4 ">
        <div className="p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h3 className="text-xl inline font-semibold">
            Senior Software Engineer
          </h3>
          <span className="inline"> – HCLTech Lucknow</span>
          <p className="text-stone-300">
            Oct_2024 - Present | Building scalable enterprise apps
          </p>
          <hr className="my-2 border-gray-200 sm:mx-auto lg:my-2" />

          <div className="ps-2">
            <ul className="list-disc">
              <li className="m-1">
                Analyse and improve the performance of web applications through
                techniques such as lazy loading, code splitting, image
                optimization, and caching strategies.
              </li>
              <li className="m-1">
                Collaborate with backend developers to integrate REST APIs,
                handle data binding, and ensure optimal data flow and state
                management using Hooks and Redux.
              </li>
              <li className="m-1">
                Engineered and maintained reusable UI components and
                implementing modular architecture, component-driven development
                with scalable design patterns.
              </li>
              <li className="m-1">
                Delivered training sessions to developers, boosting team
                performance and confidence in project execution.
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h3 className="text-xl inline font-semibold">Software Engineer</h3>
          <span className="inline"> – HCLTech Bengaluru</span>
          <p className="text-stone-300">
            Mar_2022 - Sep_2024 | Focused on React & UI/UX
          </p>
          <hr className="my-2 border-gray-200 sm:mx-auto lg:my-2" />

          <div className="ps-2">
            <ul className="list-disc">
              <li className="m-1">
                Implemented efficient optimization techniques to enhance page
                performance and reduce re-renders by 40%.
              </li>
              <li className="m-1">
                Identified gaps and opportunities for process improvements that
                bring business value and reduce high priority incident count.
              </li>
              <li className="m-1">
                Provided Hypercare support in priority after successful
                deployment, maintenance, and during pilot testing.
              </li>
              <li className="m-1">
                Resolved customer issues by establishing workarounds and
                solutions to debug and create defect fixes.
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow ring-1 hover:shadow-lg">
          <h3 className="text-xl inline font-semibold">Graduate Engineer</h3>
          <span className="inline"> – HCLTech Noida</span>
          <p className="text-stone-300">
            Sep_2021 - Mar_2022 | Full Stack Development
          </p>
          <hr className="my-2 border-gray-200 sm:mx-auto lg:my-2" />
          <div className="ps-2">
            <ul className="list-disc">
              <li className="m-1">
                Managed a team of 7 members and developed an internal HR portal
                for Employee Management System (EMS) as a capstone project that
                helps recruiters keep track of applicants.
              </li>
              <li className="m-1">
                Collaborated closely with other developers during all stages of
                the software development life cycle.
              </li>
              <li className="m-1">
                Implemented various features, like multiple filtering, CRUD
                operations, sorting, and pagination. Assisted in troubleshooting
                code to identify and resolve errors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
