import { Circle } from "lucide-react";

const TABS = [
  "Hero.jsx",
  "About.jsx",
  "Skills.jsx",
  "Projects.jsx",
  "Contact.jsx",
];

function Nav() {
  return (
    <nav className="sticky top-0 z-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex overflow-x-auto">
        {TABS.map((tab, i) => (
          <a
            key={tab}
            href={`#${tab.split(".")[0].toLowerCase()}`}
            className={`font-mono text-xs sm:text-sm px-4 py-3 border-r border-slate-800 flex items-center gap-2 whitespace-nowrap hover:bg-slate-800 transition-colors ${
              i === 0 ? "bg-slate-950 text-cyan-400" : "text-slate-500"
            }`}
          >
            <Circle className="w-2 h-2 fill-current" />
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
