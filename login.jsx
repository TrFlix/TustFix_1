import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Phase 7: Add authentication API request logic here
    console.log("Logging in with:", { email, password });
    
    // Simulate successful login redirection
    // navigate("/dashboard"); 
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-card border border-gray-100">
        
        {/* Branding header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
            <ShieldCheck size={28} />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Log in to manage your TrustFix bookings
          </p>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-navy-800" htmlFor="email">
              Email Address
            </label>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <Mail size={18} className="text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent text-navy-800 outline-none placeholder:text-gray-400 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-navy-800" htmlFor="password">
                Password
              </label>
              <a href="#forgot" className="text-xs font-semibold text-teal-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <Lock size={18} className="text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-navy-800 outline-none placeholder:text-gray-400 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-navy-800"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full mt-2 py-3 rounded-xl font-bold">
            Sign In
          </button>
        </form>

        {/* Quick redirect line */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-teal-600 hover:underline">
            Sign up here
          </Link>
        </p>

      </div>
    </div>
  );
}
