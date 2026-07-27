import { SquareArrowOutUpRight, Terminal } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Gutter from "./Gutter";
import SectionLabel from "./SectionLabel";

// Placeholder data — pass your real projects in via the `projects` prop
const DEFAULT_PROJECTS = [
  {
    name: "🌍 Around The World",
    description:
      "Explore countries by name/region with population, capital, currencies & languages, dark/light mode.",
    tools: ["React", "Vite", "Tailwind", "CSS", "React Router", "react-select"],
    link: "https://github.com/Kerolos20E/Around-The-World",
  },
  {
    name: "👕 Stride — Clothing Store",
    description:
      "Responsive front-end e-commerce demo with category browsing, cart, quantity updates & live totals",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SweetAlert2"],
    link: "https://github.com/Kerolos20E/E-Commerce",
  },
  {
    name: "🛠️ FixHub",
    description:
      "Home maintenance platform connecting customers with technicians — requests, direct chat, ratings & admin panel",
    tools: ["React", "React Router", "Tailwind", "CSS"],
    link: "https://github.com/Kerolos20E/FIX-HUB",
  },
  {
    name: "📰 News-Feed",
    description:
      "Modern news app delivering real-time headlines across multiple categories with a fast, responsive UI",
    tools: ["React", "News API,", "Material UI"],
    link: "https://github.com/Kerolos20E/News-Feed",
  },
];

function Projects({ projects = DEFAULT_PROJECTS }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`reveal ${visible ? "show" : ""} max-w-5xl mx-auto px-6 py-20`}
    >
      <div className="flex">
        <Gutter lines={3} />
        <SectionLabel tag="Projects" />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors overflow-hidden"
          >
            <div className="h-40 bg-slate-800 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-slate-600 group-hover:text-cyan-500 transition-colors" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-mono text-slate-200 font-semibold">
                  {project.name}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <SquareArrowOutUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
