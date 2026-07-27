import { useTypewriter } from "../hooks/useTypewriter";
import Gutter from "./Gutter";

function Hero() {
  const typedRole = useTypewriter("Frontend React Developer", 60);

  return (
    <section
      id="hero"
      className="relative max-w-5xl mx-auto px-6 py-24 sm:py-32 flex"
    >
      <Gutter lines={9} />
      <div className="font-mono">
        <p className="text-slate-500 text-sm mb-2">// portfolio.init()</p>
        <p className="text-slate-500">
          <span className="text-violet-400">const</span> developer ={" "}
          <span className="text-slate-300">{"{"}</span>
        </p>
        <p className="pl-6">
          name: <span className="text-cyan-300">&quot;Kerolos Emad&quot;</span>,
        </p>
        <p className="pl-6 min-h-[1.5rem]">
          role: <span className="text-cyan-300">&quot;{typedRole}</span>
          <span className="cursor-blink text-lime-400">|</span>
          <span className="text-cyan-300">&quot;</span>,
        </p>
        <p className="pl-6">
          available: <span className="text-lime-400">true</span>,
        </p>
        <p className="text-slate-300">{"}"}</p>

        <div className="flex flex-wrap gap-4 mt-10 not-italic font-sans">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md border border-slate-700 text-slate-200 font-semibold text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
