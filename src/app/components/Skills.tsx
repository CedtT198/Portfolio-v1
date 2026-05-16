import { motion } from "motion/react";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiMysql, 
  SiJavascript, 
  SiGit, 
  SiDocker,
  SiSpringboot
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, level: 80, color: "#ecd23c" },
  { name: "Node.Js", icon: SiNodedotjs, level: 90, color: "#e6e6e6" },
  { name: "Springboot", icon: SiSpringboot, level: 88, color: "#339933" },
  { name: "MySql  ", icon: SiMysql, level: 85, color: "#E10098" },
  { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
  { name: "Docker", icon: SiDocker, level: 75, color: "#2496ED" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section className="py-32 px-6 bg-neutral-950 dark:bg-black text-white transition-colors duration-500" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-20 tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            SKILLS
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                className="group"
              >
                <motion.div
                  className="relative aspect-square border border-neutral-800 dark:border-neutral-900 bg-black dark:bg-neutral-950 cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, borderColor: skill.color }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: skill.color }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    style={{ backgroundColor: skill.color }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.1 }}
                      style={{ 
                        color: skill.color,
                        // filter: skill.isDark ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' : 'none'
                      }}
                    >
                      <Icon className="w-12 h-12 mb-4 transition-all" style={{ 
                        // strokeWidth: skill.isDark ? 0.5 : 0,
                        // stroke: skill.isDark ? '#FFFFFF' : 'none'
                      }} />
                    </motion.div>
                    <h3 className="text-center tracking-wide text-sm">
                      {skill.name}
                    </h3>
                    
                    {/* Skill level indicator */}
                    <motion.div
                      className="mt-4 w-full h-0.5 bg-neutral-800 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}