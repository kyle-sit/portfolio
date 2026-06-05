import { useEffect, useState } from "react";
import { nav } from "../../data/nav";
import { assetUrl, scrollToId } from "../../utils/scroll";
import "./Navbar.css";

interface NavbarProps {
  active: string;
}

export function Navbar({ active }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
    setOpen(false);
  };

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <a className="nav-brand" href="#home" onClick={go("home")}>
          <span className="mark">
            <img src={assetUrl("favicon.svg")} alt="" />
          </span>{" "}
          Kyle Sit
        </a>
        <div className="nav-links">
          {nav.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              onClick={go(n.id)}
              className={"nav-link" + (active === n.id ? " active" : "")}
            >
              {n.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {nav.map((n) => (
            <a key={n.id} href={"#" + n.id} onClick={go(n.id)}>
              {n.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
