import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Menu, X } from "lucide-react";

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
        <Wrench size={20} />
      </span>
      <span className={`text-xl font-extrabold ${light ? "text-white" : "text-navy-800"}`}>TrustFix</span>
    </Link>
  );
}

const links = [
  { label: "Services", href: "/#categories" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Become a provider", to: "/register/provider" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.label}>
              {l.to ? <Link to={l.to} className="hover:text-teal-600">{l.label}</Link> : <a href={l.href} className="hover:text-teal-600">{l.label}</a>}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="btn-outline-dark">Log in</Link>
          <Link to="/register" className="btn-primary">Sign up</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="space-y-3 border-t border-gray-100 px-4 py-4 md:hidden">
          {links.map((l) => (
            <div key={l.label}>
              {l.to ? <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link> : <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>}
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" className="btn-outline-dark flex-1">Log in</Link>
            <Link to="/register" className="btn-primary flex-1">Sign up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
