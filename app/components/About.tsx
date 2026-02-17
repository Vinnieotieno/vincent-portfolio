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
      title: "Software Developer",
      company: "Globeflight Worldwide Express, Nairobi, Kenya",
      period: "April 2024 - Current",
      description:
        "Engineered an enterprise CRM using the MERN stack with GraphQL and Apollo Client for Sales quote generation and Operations shipment updates, including document management with role-based access. Built responsive Material-UI admin dashboards, implemented WebSocket real-time notifications, GPS auto-geocoding, and proof-of-delivery photo capture. Delivered measurable impact with reduced shipment inquiries, increased customer satisfaction, and 200+ daily active users.",
    },
    {
      title: "Frontend Developer (React & Vue.js)",
      company: "JP Innovate Remote, London, United Kingdom",
      period: "June 2025 - December 2025",
      description:
        "Developed a responsive enterprise admin dashboard using React.js and Vue.js for a multi-tenant employee management platform. Built complex UI workflows for salary advance processes, multi-stage approvals, and document management, and implemented dynamic routing with permission-based navigation. Integrated REST APIs from .NET microservices and delivered real-time dashboard/reporting interfaces with strong CI/CD collaboration.",
    },
    {
      title: "Digital Strategist",
      company: "Lead Foundation Africa, Nairobi, Kenya",
      period: "January 2025 - June 2025",
      description:
        "Led digital strategy initiatives and managed the organization's full digital footprint across web and online channels. Administered the digital literacy program and coordinated content, visibility, and engagement efforts to support program goals and outreach impact.",
    },
    {
      title: "Frontend Engineer (Contract)",
      company: "Savabuy China - Globeflight Worldwide Express Partnership, Nairobi, Kenya",
      period: "December 2023 - March 2024",
      description:
        "Contributed to frontend development for a China-Africa eCommerce platform serving 10,000+ active users across multiple African countries using React.js. Implemented responsive, cross-browser, mobile-first UI components and collaborated on REST API integrations, performance optimization, and checkout/catalog features. Collected and documented user feedback to improve usability for the Kenyan market.",
    },
    {
      title: "IT Intern",
      company: "Globeflight Worldwide Express, Nairobi, Kenya",
      period: "May 2023 - September 2023",
      description:
        "Contributed to a multi-vendor eCommerce platform enabling vendor product management and checkout flows processing 100+ monthly orders. Supported maintenance and updates of the Warehouse Management System and improved reliability by helping migrate services to better hosting providers. Monitored updates, backups, and system performance.",
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
            I am a Software Engineer specializing in frontend and full-stack development, focused on building
            responsive, high-performance web applications using React.js, Vue.js, and modern JavaScript/TypeScript
            technologies. I transform complex business requirements into scalable, user-centric interfaces and deliver
            production-ready systems with GraphQL APIs, real-time features, and performance optimization.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-lg rounded-2xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-blue-500" size={20} />
                <span className="font-medium text-gray-800">Name:</span>
                <span className="ml-2 text-gray-900">Otieno Vincent Odhiambo</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <span className="font-medium text-gray-800">Email:</span>
                <span className="ml-2 text-gray-900">vincentotienoakuku@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={20} />
                <span className="font-medium text-gray-800">Phone:</span>
                <span className="ml-2 text-gray-900">+254797398004</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" size={20} />
                <span className="font-medium text-gray-800">Location:</span>
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
          <div className="block my-8 border-t border-gray-200 lg:hidden"></div>

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
                className="p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg"
              >
                <h4 className="mb-1 text-lg font-semibold text-blue-700">{exp.title}</h4>
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
