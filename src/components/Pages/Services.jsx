// src/pages/Services.jsx
import { Briefcase, Code, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-orange-400 hover:animate-bounce" />,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications tailored to client needs.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-orange-500 hover:animate-pulse" />,
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with smooth UI and great performance.",
  },
  {
    icon: <Palette className="w-10 h-10 text-orange-600 hover:animate-spin" />,
    title: "UI/UX Design",
    description: "Designing user-friendly, modern, and visually appealing interfaces.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-orange-600 hover:animate-pulse" />,
    title: "Consulting",
    description: "Providing guidance on technology choices, best practices, and project strategy.",
  },
];

export default function Services() {
  return (
    <section className="max-h-full py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Services</h2>
        <p className="text-lg text-stone-300 mb-12">
          Here’s what I can help you with — from development to design and strategy.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className= "border shadow-md hover:bg-stone-950 rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center  mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-stone-50 mb-2">
                {service.title}
              </h3>
              <p className="text-stone-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
