import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-20 tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            CONTACT
          </h2>
        </motion.div>

        <motion.form
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-xs tracking-widest text-gray-500 dark:text-neutral-500 mb-3">
              NAME
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-black dark:border-white py-3 outline-none transition-all"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-400 dark:bg-neutral-600"
                initial={{ width: 0 }}
                animate={{ width: focused === 'name' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-xs tracking-widest text-gray-500 dark:text-neutral-500 mb-3">
              EMAIL
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-black dark:border-white py-3 outline-none transition-all"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-400 dark:bg-neutral-600"
                initial={{ width: 0 }}
                animate={{ width: focused === 'email' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Subject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-xs tracking-widest text-gray-500 dark:text-neutral-500 mb-3">
              SUBJECT
            </label>
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-black dark:border-white py-3 outline-none transition-all"
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-400 dark:bg-neutral-600"
                initial={{ width: 0 }}
                animate={{ width: focused === 'subject' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-xs tracking-widest text-gray-500 dark:text-neutral-500 mb-3">
              MESSAGE
            </label>
            <div className="relative">
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-black dark:border-white py-3 outline-none resize-none transition-all"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-400 dark:bg-neutral-600"
                initial={{ width: 0 }}
                animate={{ width: focused === 'message' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="pt-8"
          >
            <motion.button
              type="submit"
              className="group relative w-full md:w-auto px-12 py-4 border-2 border-black dark:border-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-black dark:bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center justify-center gap-3 tracking-widest group-hover:text-white dark:group-hover:text-black transition-colors">
                SEND MESSAGE
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}