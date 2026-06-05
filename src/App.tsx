import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useScrollSpy, useReveal } from "./hooks";
import { nav } from "./data/nav";

const NAV_IDS = nav.map((n) => n.id);

function App() {
  const active = useScrollSpy(NAV_IDS);
  useReveal(0);

  // Deep-link: scroll to #hash on load.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }),
        120,
      );
    }
  }, []);

  return (
    <div className="app">
      <Navbar active={active} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
