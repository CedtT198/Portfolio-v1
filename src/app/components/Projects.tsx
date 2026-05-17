import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

const projects = [
  {
    title: "Echotranscribe",
    description: "Basic Speech-to-text app with file and real-time transcription.",
    whatILearn: "This is my first real deployed app. I learn here the basic uses of the n architecture on a production environment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    tech: ["React/TypeScript", "Springboot", "MongoDB", "FFmpeg", "Stripe", "Docker", "Render"],
    year: "2025",
    link:"https://echotranscribe-front.onrender.com",
    githubLink:"https://github.com/CedtT198/EchoTranscribe"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="group"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
          style={{ y: index % 2 === 0 ? y : useTransform(y, (value) => -value) }}
        >
          <motion.div
            className="relative aspect-[4/3] overflow-hidden border-2 border-black dark:border-white transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.1 }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <div>
            <motion.span
              className="text-xs tracking-widest text-gray-500 dark:text-neutral-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {project.year}
            </motion.span>
            <motion.h3
              className="mt-2 tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {project.title}
            </motion.h3>
          </div>

          <motion.p
            className="text-gray-600 dark:text-neutral-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {project.description}
          </motion.p>
          <motion.p
            className="text-gray-600 dark:text-neutral-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {project.whatILearn}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 border border-black dark:border-white text-xs tracking-wider hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div className="flex items-center">
            <motion.a
              href={project.link}
              className="w-40 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              target="_blank" rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              <span>Live preview</span>
            </motion.a>
            <motion.a
              href={project.githubLink}
              className="w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              target="_blank" rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-32 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-20 tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}