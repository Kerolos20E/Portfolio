import "./portfolio-animations.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="float-slow absolute top-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500 opacity-10 rounded-full blur-2xl md:blur-3xl" />
      <div
        className="float-slow absolute bottom-10 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-violet-500 opacity-10 rounded-full blur-2xl md:blur-3xl"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="relative isolate min-h-screen bg-slate-950 text-slate-200 font-sans">
      <AmbientGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
