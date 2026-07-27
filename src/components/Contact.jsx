import { Mail } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Gutter from "./Gutter";
import SectionLabel from "./SectionLabel";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.98 3.23 9.2 7.71 10.69.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.64 1.22 3.29.93.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.17-1.46 3.12-1.16 3.12-1.16.62 1.54.23 2.68.11 2.96.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal ${visible ? "show" : ""} max-w-5xl mx-auto px-6 py-24 flex`}
    >
      <Gutter lines={3} />
      <div className="flex-1">
        <SectionLabel tag="Contact" />
        <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 font-mono text-sm">
          <p className="text-slate-500 mb-4">
            <span className="text-lime-400">$</span> reach --out
            <span className="cursor-blink text-lime-400 ml-1">_</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://keroe7500@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://github.com/Kerolos20E"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kero-emad-778391269"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
