import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const GlowButton = ({ children, onClick, className = "", variant = "primary", type = "button" }) => {
  const { dark } = useTheme();

  const base = `
    relative inline-flex items-center justify-center gap-2
    rounded-full px-7 py-3.5 font-semibold text-sm tracking-wide
    transition-all duration-300 overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-orange-500/50
  `;

  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.35)]",
    outline: dark
      ? "border border-white/20 text-white bg-white/5 backdrop-blur-xl hover:border-orange-500/50"
      : "border border-black/15 text-black bg-black/5 backdrop-blur-xl hover:border-orange-500/40",
    ghost: dark ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(249,115,22,0.45)" }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
      {children}
    </motion.button>
  );
};

export default GlowButton;
