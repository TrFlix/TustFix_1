import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Navbar.jsx";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm">Find Trusted Professionals. Get Things Fixed.</p>
        </div>
        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-white">Quick links</h3>
          <ul className="space-y-2">
            <li><a href="/#categories" className="hover:text-white">Services</a></li>
            <li><a href="/#how-it-works" className="hover:text-white">How it works</a></li>
            <li><Link to="/register/provider" className="hover:text-white">Become a provider</Link></li>
            <li><Link to="/login" className="hover:text-white">Log in</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-white">Contact us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Mail size={16} /> trustfixofficial@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 91303 2xxxx</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Kolhapur, Maharashtra, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} TrustFix. College mini project.
      </div>
    </footer>
  );
}
