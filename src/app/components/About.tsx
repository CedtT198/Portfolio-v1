import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";
import { Download, Facebook, Linkedin, Mail } from "lucide-react";
import { SiFacebook, SiGmail, SiLinkerd, SiWhatsapp } from "react-icons/si";
import { socials } from "./ui/socials"

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const interests = ["Video game", "Music", "Web development"];

  return (
    <section ref={ref} className="py-32 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500" id="about">
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-20 tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>ABOUT</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative md:col-span-1 justify-center items-center"
            style={{ y }}
          >
            <motion.div
              className="relative aspect-square overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.1 }}
            >
              {/* Border frame effect */}
              <div className="absolute inset-0 border-1 border-black dark:border-white z-10 transition-colors duration-500" />
              <div className="absolute inset-4 border border-gray-300 dark:border-neutral-700 z-10 transition-colors duration-500" />
              
              <ImageWithFallback
                src="./images/pic.jpeg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
              <motion.a
                content="Download resume"
                key="Download resume"
                href=""
                className="mt-10 w-50 h-15 bg-white text-black border border-gray-800 dark:border-neutral-800 flex items-center justify-center hover:hover:bg-white hover:text-black dark:hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                aria-label="Download resume"
              >
              <Download className="w-6 h-6 mr-2" />
              <span>Download CV</span>
            </motion.a>
            <motion.div className="flex gap-3 mt-5">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center hover:border-white hover:bg-white hover:text-black dark:hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1, rotate: 0 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                    // style={{color: social.color}}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:col-span-2"
          >
            <div className="space-y-6 text-gray-700 dark:text-neutral-300">
              <motion.p 
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                I'm a full-stack developer specializing in building exceptional digital experiences. 
                I create performant, scalable applications that push the boundaries of what's possible on the web.
              </motion.p>
              <motion.p 
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                My approach combines clean code practices with tests and innovative problem-solving.
              </motion.p>
              <motion.p 
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                When I'm not coding, I am exploring emerging 
                technologies to stay at the cutting edge of web development.
              </motion.p>

              {[
                { label: "LOCATION", value: "Antananarivo, Madagascar" },
                { label: "EDUCATION", value: "IT University (2022 - 2025)"},
                { label: "AVAILABILITY", value: "Open to work !"},
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex justify-between py-3 border-b border-gray-200 dark:border-neutral-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label === "AVAILABILITY" &&
                    <span className="items-right">
                      <span className="text-success">{item.value}</span>
                    </span>
                  }
                  {item.label !== "AVAILABILITY" &&
                    <>
                      <span className="text-xs tracking-widest text-gray-500 dark:text-neutral-500">{item.label}</span>
                      <span className="text-sm">{item.value}</span>
                    </>
                  }
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}