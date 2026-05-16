import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black dark:bg-neutral-950 text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white"
            style={{
              width: "100%",
              top: `${(i + 1) * 5}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-white"
            style={{
              height: "100%",
              left: `${(i + 1) * 5}%`,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating particles with parallax */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              x: mousePosition.x * (Math.random() * 0.5),
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content with parallax effect */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="mb-6 tracking-tighter"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9 }}
          >
            {["C", "E", "D", "R", "I", "C"].map((letter, i) => (
              <motion.span
                key={`cedric-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.2, color: "#888" }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            {["T", "I", "A", "V", "I", "N", "A"].map((letter, i) => (
              <motion.span
                key={`tiavina-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                whileHover={{ scale: 1.2, color: "#888" }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-400 dark:text-neutral-400 tracking-widest uppercase max-w-2xl mx-auto">
            - Full Stack Developer -
          </p>

          <motion.div
            className="flex items-center justify-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {["React", "TypeScript", "Java", "MySQL", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                className="text-sm tracking-wider text-gray-500 dark:text-neutral-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, color: "#fff" }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <motion.a href="#about">
            <ArrowDown className="w-6 h-6 mx-auto opacity-50" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}