import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <ProjectGrid />
      <footer className="app-footer">
        © {new Date().getFullYear()} Kyle Sit
      </footer>
    </div>
  );
}

export default App;