import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { useScrollSpy, useReveal, useHashScroll } from "./hooks";
import { nav } from "./data/nav";

const NAV_IDS = nav.map((n) => n.id);

function App() {
  const active = useScrollSpy(NAV_IDS);
  useReveal();
  useHashScroll();

  return (
    <div className="app">
      <Navbar active={active} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
