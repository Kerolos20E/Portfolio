import { useReveal } from "../hooks/useReveal";
import Gutter from "./Gutter";
import SectionLabel from "./SectionLabel";

function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal ${visible ? "show" : ""} max-w-5xl mx-auto px-6 py-20 flex`}
    >
      <Gutter lines={4} />
      <div className="flex-1">
        <SectionLabel tag="About" />
        <p className="text-slate-400 leading-relaxed max-w-2xl">
          Front-End Developer | React & TypeScript Enthusiast Building
          responsive & modern web apps 🚀 Open to Remote opportunities .
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-slate-400 leading-relaxed border border-slate-700 px-4 py-2 rounded-md mt-6 inline-block hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
