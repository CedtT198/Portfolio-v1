// import { motion } from "motion/react";

// const experiences = [
//   {
//     year: "2022 - Present",
//     role: "Senior Full Stack Developer",
//     company: "TechCorp Inc.",
//     description: "Leading development of enterprise-scale applications using React, TypeScript, and GraphQL. Architecting scalable solutions and mentoring junior developers.",
//   },
//   {
//     year: "2020 - 2022",
//     role: "Full Stack Developer",
//     company: "Startup Labs",
//     description: "Built and maintained multiple client projects using Next.js and REST APIs. Implemented CI/CD pipelines and improved application performance by 40%.",
//   },
//   {
//     year: "2019 - 2020",
//     role: "Frontend Developer",
//     company: "Digital Agency",
//     description: "Developed responsive web applications with React and TypeScript. Collaborated with design teams to create pixel-perfect implementations.",
//   },
//   {
//     year: "2018 - 2019",
//     role: "Junior Developer",
//     company: "Web Solutions",
//     description: "Started career building modern web applications. Gained expertise in JavaScript, React, and modern development workflows.",
//   },
// ];

// export function Experience() {
//   return (
//     <section className="py-32 px-6 bg-black dark:bg-neutral-950 text-white transition-colors duration-500" id="experience">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="mb-20 tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
//             EXPERIENCE
//           </h2>
//         </motion.div>

//         <div className="relative">
//           {/* Vertical line */}
//           <motion.div
//             className="absolute left-0 top-0 w-px bg-gray-800 dark:bg-neutral-800"
//             style={{ height: "100%" }}
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           />

//           <div className="space-y-16">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={exp.company}
//                 className="relative pl-12 group"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 {/* Dot */}
//                 <motion.div
//                   className="absolute left-0 top-0 w-3 h-3 bg-white -translate-x-[5px]"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 + 0.3 }}
//                   whileHover={{ scale: 1.5 }}
//                 />

//                 {/* Content */}
//                 <motion.div
//                   className="border border-gray-800 dark:border-neutral-800 p-8 hover:border-white transition-colors duration-300"
//                   whileHover={{ x: 10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.span
//                     className="text-xs tracking-widest text-gray-500 dark:text-neutral-500"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.2 + 0.4 }}
//                   >
//                     {exp.year}
//                   </motion.span>

//                   <motion.h3
//                     className="mt-2 mb-1 tracking-tight"
//                     style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.2 + 0.5 }}
//                   >
//                     {exp.role}
//                   </motion.h3>

//                   <motion.p
//                     className="text-gray-400 dark:text-neutral-400 mb-4"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.2 + 0.6 }}
//                   >
//                     {exp.company}
//                   </motion.p>

//                   <motion.p
//                     className="text-gray-300 dark:text-neutral-300 leading-relaxed"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.2 + 0.7 }}
//                   >
//                     {exp.description}
//                   </motion.p>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }