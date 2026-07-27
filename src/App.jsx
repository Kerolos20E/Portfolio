import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function GlobalStyles() {
  return (
    <style>{`
      @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
      .cursor-blink { animation: blink 1s step-end infinite; }
      @keyframes floatSlow {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(20px, -30px); }
      }
      .float-slow { animation: floatSlow 8s ease-in-out infinite; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .reveal { opacity: 0; }
      .reveal.show { animation: fadeUp 0.7s ease-out forwards; }
    `}</style>
  );
}

function AmbientGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="float-slow absolute top-10 left-1/4 w-72 h-72 bg-cyan-500 opacity-10 rounded-full blur-3xl" />
      <div
        className="float-slow absolute bottom-10 right-1/4 w-72 h-72 bg-violet-500 opacity-10 rounded-full blur-3xl"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <GlobalStyles />
      <AmbientGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
