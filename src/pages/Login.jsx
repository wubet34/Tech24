import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Demo credentials (no backend needed)
const DEMO_EMAIL    = "admin@tech24.com";
const DEMO_PASSWORD = "admin123456";
const DEMO_TOKEN    = "demo-token-tech24-admin";

const inputClass = `
  w-full bg-white/5 border border-white/10 rounded-xl
  px-4 py-3.5 pl-11 text-white text-sm
  placeholder:text-white/25 outline-none
  focus:border-orange-500/50 transition-colors duration-200
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  // Already logged in — go straight to dashboard
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/dashboard");
  }, []);

  const handleChange = (e) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate a brief network delay so it feels real
    await new Promise(r => setTimeout(r, 600));

    if (
      formData.email.trim().toLowerCase() === DEMO_EMAIL &&
      formData.password === DEMO_PASSWORD
    ) {
      localStorage.setItem("token", DEMO_TOKEN);
      localStorage.setItem("user", JSON.stringify({
        name:       "Admin User",
        email:      DEMO_EMAIL,
        created_at: new Date().toISOString(),
      }));
      navigate("/dashboard");
    } else {
      setError("Wrong email or password. Use the demo credentials below.");
    }

    setLoading(false);
  };

  return (
    <div className="force-dark min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>

        <div
          className="rounded-3xl p-9 relative overflow-hidden"
          style={{ background: "rgba(15,23,42,0.97)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          {/* header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white mb-2">Welcome Back</h1>
            <p className="text-white/40 text-sm">Sign in to the Tech24 admin panel</p>
          </div>

          {/* demo hint */}
          <div className="mb-6 rounded-xl border border-orange-500/25 bg-orange-500/8 px-4 py-3">
            <p className="text-orange-400 text-xs font-semibold mb-1.5">Demo Credentials</p>
            <p className="text-white/50 text-xs">
              Email: <span className="text-white font-mono select-all">{DEMO_EMAIL}</span>
            </p>
            <p className="text-white/50 text-xs">
              Password: <span className="text-white font-mono select-all">{DEMO_PASSWORD}</span>
            </p>
          </div>

          {/* error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              {error}
            </motion.div>
          )}

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-xs font-medium text-white/50 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                <input
                  type="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="admin@tech24.com"
                  className={inputClass} required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-xs font-medium text-white/50 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                <input
                  type="password" name="password"
                  value={formData.password} onChange={handleChange}
                  placeholder="••••••••"
                  className={inputClass} required
                />
              </div>
            </div>

            <motion.button
              type="submit" disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white disabled:opacity-60 mt-2"
            >
              {loading
                ? <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                : <><LogIn size={16} /> Sign In</>
              }
            </motion.button>
          </form>

          <p className="mt-7 text-center text-white/25 text-xs">
            Tech24 Admin Panel — demo mode
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
