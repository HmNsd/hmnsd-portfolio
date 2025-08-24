export default function Projects() {
  const projects = [
    { title: "Portfolio Web App", desc: "Built with React & Tailwind" },
    { title: "Employee Management System", desc: "Full-stack MERN project" },
    { title: "Password Generator App", desc: "React | TailwindCSS | React Hooks | HTML & CSS" },
    { title: "E-Commerce Web App", desc: "React | Bootstrap | React Hooks | HTML & CSS" }
  ];

  return (
    <section id="projects" className="py-6 md:py-10 md:px-6 container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">Projects</h2>
      <div className="grid md:grid-cols-2 md:gap-4 gap-2">
        {projects.map((p, i) => (
          <div key={i} className=" md:p-4 p-3 rounded-lg shadow ring-1 hover:shadow-lg">
            <h3 className="text-l md:text-xl font-semibold">{p.title}</h3>
            <p className="text-stone-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
