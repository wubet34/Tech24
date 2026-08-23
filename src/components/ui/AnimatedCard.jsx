import { motion } from "framer-motion";

const AnimatedCard = ({ children, className = "", delay = 0, hover3d = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={
      hover3d
        ? { rotateX: -3, rotateY: 5, scale: 1.03, transition: { duration: 0.3 } }
        : { scale: 1.02, transition: { duration: 0.25 } }
    }
    style={{ transformStyle: "preserve-3d" }}
    className={`relative rounded-3xl glass-card overflow-hidden ${className}`}
  >
    {/* Hover glow overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

export default AnimatedCard;
