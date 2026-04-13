import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <ProjectGrid />
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kyle Sit
      </footer>
    </div>
  );
}

export default App;
