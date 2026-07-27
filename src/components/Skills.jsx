import { useReveal } from "../hooks/useReveal";
import Gutter from "./Gutter";
import SectionLabel from "./SectionLabel";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "React",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
  "TanStack Query",
];

function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`reveal ${visible ? "show" : ""} max-w-5xl mx-auto px-6 py-20 flex`}
    >
      <Gutter lines={SKILLS.length + 2} />
      <div className="flex-1">
        <SectionLabel tag="Skills" />
        <p className="font-mono text-slate-500 text-sm mb-4">import {"{"}</p>
        <div className="flex flex-wrap gap-3 pl-6 mb-4">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="font-mono text-sm px-4 py-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="font-mono text-slate-500 text-sm">
          {"}"} from{" "}
          <span className="text-cyan-300">&quot;my-toolkit&quot;</span>;
        </p>
      </div>
    </section>
  );
}

export default Skills;
