"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, User } from "lucide-react"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Volunteer Website Developer and Digital Strategist",
      company: "Lead Foundation Africa",
      period: "January 2025–Present",
      description:
        "Designed, developed, and maintained websites. Developed and implemented digital strategies to improve visibility and outreach.",
    },
    {
      title: "Lead Digital Marketing/Systems Operations",
      company: "Globeflight Worldwide Express/Partnership with Savabuy",
      period: "February 2024–September 2024",
      description:
        "Leading digital marketing strategies, managing SEO initiatives, overseeing social media campaigns, and maintaining system operations.",
    },
    {
      title: "Website Developer/IT Support (Freelance)",
      company: "Globeflight Worldwide Express",
      period: "September 2023–January 2024",
      description:
        "Developed eCommerce platforms enabling vendors to upload products and clients to shop online. Maintained company websites and provided IT support.",
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-gradient">About Me</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-800">
            I am a software developer with expertise in React frontend development and project management. Proven
            ability to deliver innovative solutions, improve efficiency, and drive project success. Skilled also in
            digital strategy, including SEO and social media management.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-100"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-blue-500" size={20} />
                <span className="text-gray-800 font-medium">Name:</span>
                <span className="ml-2 text-gray-900">Otieno Vincent Odhiambo</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <span className="text-gray-800 font-medium">Email:</span>
                <span className="ml-2 text-gray-900">vincentotienoakuku@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={20} />
                <span className="text-gray-800 font-medium">Phone:</span>
                <span className="ml-2 text-gray-900">+254797398004</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" size={20} />
                <span className="text-gray-800 font-medium">Location:</span>
                <span className="ml-2 text-gray-900">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-xl font-semibold text-gray-900">Education</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-gray-900">Program in Software Engineering</div>
                  <div className="text-gray-800">ALX (in progress)</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">BSc. Mathematics and Computer Science</div>
                  <div className="text-gray-800">Maseno University • 2025</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider for mobile */}
          <div className="block lg:hidden my-8 border-t border-gray-200"></div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-blue-700 mb-1">{exp.title}</h4>
                <p className="font-medium text-gray-800">{exp.company}</p>
                <p className="mb-3 text-sm text-gray-700">{exp.period}</p>
                <p className="text-gray-800">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
