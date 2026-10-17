import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, UserCheck, ClipboardList, CheckCircle2, ShieldCheck, Star, Clock, BadgeCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { categories } from "../data/categories.js";

function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/providers?q=${encodeURIComponent(query.trim())}`); // page is built in Phase 7
  };

  return (
    <section className="bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Find the Right Professional for Every Job.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-gray-300">
          Compare local plumbers, electricians, cleaners and more. Book in minutes and track the job from request to completion.
        </p>

        <form onSubmit={handleSearch} className="mt-8 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-3 shadow-card sm:flex-row sm:rounded-full">
          <label className="flex flex-1 items-center gap-3 px-3">
            <Search size={20} className="text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need fixed? e.g. leaking tap"
              className="w-full bg-transparent py-2 text-ink outline-none placeholder:text-gray-400"
              aria-label="Search for a service"
            />
          </label>
          <button type="submit" className="btn-primary">Search</button>
        </form>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#categories" className="btn-primary">Find a Service</a>
          <Link to="/register/provider" className="btn-outline">Become a Provider</Link>
           <Link to="/login" className="text-sm font-semibold text-white hover:text-teal-400 transition ml-2">
    Sign In
  </Link>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16">
      <SectionHeading title="Popular service categories" subtitle="Choose a category to see professionals near you." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {categories.map(({ id, name, icon: Icon }) => (
          <Link
            key={id}
            to={`/providers?category=${id}`}
            className="card flex flex-col items-center gap-3 p-5 text-center transition hover:-translate-y-0.5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
              <Icon size={24} />
            </span>
            <span className="text-sm font-semibold text-navy-800">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProviders() {
  // Phase 7: load from GET /api/providers/featured with Axios.
  const providers = [];

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Featured service providers" subtitle="Top-rated professionals on TrustFix." />
        {providers.length === 0 && (
          <div className="card p-10 text-center">
            <p className="font-semibold text-navy-800">No providers listed yet</p>
            <p className="mt-1 text-sm text-gray-600">Featured providers appear here once professionals register and get reviewed.</p>
            <Link to="/register/provider" className="btn-primary mt-5">Register as a provider</Link>
          </div>
        )}
      </div>
    </section>
  );
}

const steps = [
  { icon: Search, title: "Search", text: "Pick a category or search for the service you need." },
  { icon: UserCheck, title: "Choose a provider", text: "Compare profiles, prices and reviews." },
  { icon: ClipboardList, title: "Request a booking", text: "Describe the problem and pick a preferred date." },
  { icon: CheckCircle2, title: "Get it fixed", text: "Track the status until the job is completed." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16">
      <SectionHeading title="How TrustFix works" />
      <ol className="grid gap-6 md:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">{i + 1}</span>
              <Icon size={22} className="text-teal-600" />
            </div>
            <h3 className="mt-4 font-bold text-navy-800">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const reasons = [
  { icon: ShieldCheck, title: "Verified profiles", text: "Every provider has a profile with experience and location." },
  { icon: Star, title: "Real reviews", text: "Only customers with completed jobs can leave a rating." },
  { icon: Clock, title: "Clear booking status", text: "See whether a request is pending, accepted or in progress." },
  { icon: BadgeCheck, title: "Upfront prices", text: "Service prices are listed before you send a request." },
];

function WhyChoose() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Why choose TrustFix" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <Icon size={28} className="text-teal-600" />
              <h3 className="mt-4 font-bold text-navy-800">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BecomeProvider() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy-800 p-8 text-white md:flex-row md:items-center md:p-12">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">Are you a skilled professional?</h2>
          <p className="mt-2 text-gray-300">Create a free profile, list your services and prices, and receive booking requests from customers in your city.</p>
        </div>
        <Link to="/register/provider" className="btn-primary shrink-0">Become a Provider</Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProviders />
      <HowItWorks />
      <WhyChoose />
      <BecomeProvider />
    </>
  );
}
