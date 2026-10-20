import { SquareArrowOutUpRight, Terminal } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Gutter from "./Gutter";
import SectionLabel from "./SectionLabel";

const DEFAULT_PROJECTS = [
  {
    name: "⌚ Vance & Heir — The Watch Store",
    description:
      "A luxury watch e-commerce app built with React and TypeScript, using Firebase for the backend and TanStack Query for data fetching and caching.",
    tools: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "CSS",
      "Firebase",
      "TanStack Query",
      "React Router",
    ],
    link: "https://watch-store-405de.web.app/",
    image: "/projects/WatchStore.png",
  },
  {
    name: "👕 Stride — Clothing Store",
    description:
      "A responsive clothing store demo with category browsing, a shopping cart, quantity updates and live totals.",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SweetAlert2"],
    link: "https://github.com/Kerolos20E/E-Commerce",
    image: "/projects/E-commerce.png",
  },
  {
    name: "🛠️ FixHub",
    description:
      "A home maintenance platform that connects customers with technicians, featuring service requests, direct chat, ratings and an admin panel.",
    tools: ["React", "React Router", "Tailwind", "CSS"],
    link: "https://github.com/Kerolos20E/FIX-HUB",
    image: "/projects/FixHub.png",
  },
  {
    name: "📰 News-Feed",
    description:
      "A news app that delivers live headlines across multiple categories, with a fast and responsive Material UI interface.",
    tools: ["React", "News API", "Material UI", "Axios"],
    link: "https://github.com/Kerolos20E/News-Feed",
    image: "/projects/NewsFeed.png",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors overflow-hidden"
          >
            <div className="h-40 bg-slate-800 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Terminal className="w-8 h-8 text-slate-600 group-hover:text-cyan-500 transition-colors" />
              )}
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
