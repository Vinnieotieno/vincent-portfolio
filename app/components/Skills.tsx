"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["ReactJS", "NextJS", "VueJS", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "PHP", "Python", "Django"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "WordPress", "Vercel", "Netlify"],
    },
    {
      title: "SEO & Analytics",
      skills: ["Google Analytics", "Google Console", "SEMrush", "Moz", "Page Speed"],
    },
    {
      title: "Digital Marketing",
      skills: ["Social Media Management", "Content Strategy", "Brand Management"],
    },
  ]

  const proficiency = [
    { skill: "React/Next.js", level: 90 },
    { skill: "JavaScript/TypeScript", level: 85 },
    { skill: "Digital Marketing", level: 88 },
    { skill: "SEO Optimization", level: 85 },
    { skill: "Node.js/Backend", level: 80 },
    { skill: "Database Management", level: 75 },
  ]

  return (
    <section id="skills" className="relative py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-gradient">Technical Skills</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-800">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 mt-16 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-900">Proficiency Levels</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {proficiency.map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{item.skill}</span>
                  <span className="text-gray-700 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
