import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Phone, Eye, EyeOff, ClipboardList, Check, X } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password formatting validation logic
  const passwordRules = {
    length: formData.password.length >= 8,
    hasUpper: /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
  };

  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!isPasswordValid) {
      setError("Please ensure your password meets all strength criteria.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must accept the Terms of Service to create an account.");
      return;
    }

    // Phase 7: Add user registration API database request here
    console.log("Registering User Account:", formData);
    
    // Simulate successful registration redirection
    // navigate("/login");
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-card border border-gray-100">
        
        {/* Branding header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
            <ClipboardList size={26} />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-800">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join TrustFix to source local service providers
          </p>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="mt-6 flex flex-col gap-4">
          
          <div>
            <label className="text-sm font-semibold text-navy-800" htmlFor="name">Full Name</label>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <User size={18} className="text-gray-400" />
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent text-navy-800 outline-none placeholder:text-gray-400 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-navy-800" htmlFor="email">Email Address</label>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <Mail size={18} className="text-gray-400" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent text-navy-800 outline-none placeholder:text-gray-400 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-navy-800" htmlFor="phone">Phone Number</label>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <Phone size={18} className="text-gray-400" />
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0412 345 678"
                className="w-full bg-transparent text-navy-800 outline-none placeholder:text-gray-400 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-navy-800" htmlFor="password">Password</label>
            <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-transparent px-3 py-2 focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
              <Lock size={18} className="text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create strong password"
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

            {/* Password Validation Format Indicators */}
            <div className="mt-3 rounded-xl bg-surface p-3 text-xs flex flex-col gap-1.5">
              <p className="font-semibold text-navy-800 mb-0.5">Password requirements:</p>
              <div className={`flex items-center gap-2 ${passwordRules.length ? "text-teal-600" : "text-gray-400"}`}>
                {passwordRules.length ? <Check size={14} /> : <X size={14} />}
                <span>At least 8 characters long</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordRules.hasUpper ? "text-teal-600" : "text-gray-400"}`}>
                {passwordRules.hasUpper ? <Check size={14} /> : <X size={14} />}
                <span>At least one uppercase letter (A-Z)</span>
              </div>
              <div className={`flex items-center gap-2 ${passwordRules.hasNumber ? "text-teal-600" : "text-gray-400"}`}>
                {passwordRules.hasNumber ? <Check size={14} /> : <X size={14} />}
                <span>At least one number (0-9)</span>
              </div>
            </div>
          </div>

          <label className="mt-2 flex items-start gap-3 cursor-pointer">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
              required
            />
            <span className="text-xs text-gray-600">
              I agree to the TrustFix Terms of Service and Privacy Policy.
            </span>
          </label>

          <button type="submit" className="btn-primary w-full mt-2 py-3 rounded-xl font-bold">
            Create Account
          </button>
        </form>

        {/* Quick redirect line */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-teal-600 hover:underline">
            Sign in here
          </Link>
        </p>

      </div>
    </div>
  );
}
