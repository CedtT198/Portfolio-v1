import { motion } from "motion/react";
import { socials } from "./ui/socials"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-black dark:bg-neutral-950 text-white border-t border-gray-900 dark:border-neutral-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="tracking-tighter" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              CEDRIC TIAVINA
            </h3>
            <p className="text-xs tracking-widest text-gray-500 dark:text-neutral-500 mt-2">
              FULLSTACK DEVELOPER
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-gray-800 dark:border-neutral-800 flex items-center justify-center hover:border-white hover:bg-white hover:text-black dark:hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-900 dark:border-neutral-900 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs tracking-widest text-gray-600 dark:text-neutral-600">
            © {new Date().getFullYear()} CEDRIC TIAVINA. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}