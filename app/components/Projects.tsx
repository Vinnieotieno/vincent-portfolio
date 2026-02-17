"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Eye } from "lucide-react"
import ProfileImage from "./ProfileImage"
import { useState } from "react"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Enterprise CRM Platform",
      description:
        "Comprehensive logistics CRM that manages the full order lifecycle from quote creation to final delivery across 7 coordinated departments.",
      longDescription:
        "Designed and built an enterprise Employee Dashboard/CRM for logistics and freight operations to solve fragmented processes, poor visibility, and delayed cross-team coordination. The platform connects Sales, Management, Operations, Finance, Warehouse, Delivery, and Customer Care in one workflow system and drives a structured 6-stage progression: Collected, On Transit, Arrived, Clearance, Delivery, and Delivered. It supports quote-to-delivery execution with approvals, role-based access, real-time status updates, ETA confidence tracking, document management, customs and expense tracking, proof-of-delivery capture, and department reporting. This gave teams clear handoffs, faster decision-making, improved customer communication, and stronger financial control from order creation to closure.",
      image: "/enterprise-crm.png",
      technologies: ["React.js", "Node.js", "Express.js", "GraphQL", "Apollo Client", "PostgreSQL", "Socket.IO", "JWT", "Nodemailer"],
      liveUrl: "https://globeflight.co.ke",
      githubUrl: "https://github.com/Vinnieotieno/DashboardApi",
      featured: true,
    },
    {
      id: 2,
      title: "Real-Time Shipment Tracking Platform",
      description:
        "End-to-end shipment tracking system that replaced manual follow-ups with real-time visibility, automated notifications, and proof-of-delivery tracking.",
      longDescription:
        "Built and deployed a real-time shipment tracking platform for Globeflight Kenya to solve manual tracking, poor transparency, and repeated customer inquiries. The system provides unique tracking number generation, GPS map-based tracking, timeline updates, automated email notifications, proof-of-delivery capture, and exception management. Role-based access supports Superadmin, Admin, Staff, and Public tracking users, while the public page enables 24/7 tracking and waybill access without login. Technically, the solution uses React.js frontends, Node.js/Express APIs, PostgreSQL, Socket.IO real-time updates, JWT authentication, Nodemailer notifications, and geocoding integrations for location intelligence.",
      image: "/realtime-tracking.png",
      technologies: ["React.js", "Material-UI", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "JWT", "Nodemailer", "Google Maps API"],
      liveUrl: "https://globeflight.co.ke/track",
      githubUrl: "https://github.com/Vinnieotieno/logistics-backend",
      featured: true,
    },
    {
      id: 3,
      title: "Savabuy China-Africa eCommerce",
      description:
        "Cross-border eCommerce frontend supporting 10,000+ active users with responsive, mobile-first shopping experiences.",
      longDescription:
        "Contributed to frontend engineering for a large eCommerce platform used across multiple African countries. Implemented responsive UI components, improved checkout and product catalog flows, and collaborated on REST API integration and performance optimization to support scale and reliability.",
      image: "/savabuy-ecommerce.png",
      technologies: ["React.js", "JavaScript", "Spring Boot", "REST APIs", "Responsive Design", "Performance Optimization"],
      liveUrl: "https://savabuy.com",
      githubUrl: "https://github.com/Vinnieotieno",
      featured: true,
    },
    {
      id: 4,
      title: "Multi-Tenant Employee Management Dashboard",
      description:
        "Enterprise admin dashboard with role-based routes and workflow automation for salary advance and approvals.",
      longDescription:
        "Built complex frontend interfaces for a multi-tenancy employee management platform using React.js and Vue.js. Implemented reusable permission-based navigation, multi-stage approval pipelines, and document workflows while integrating RESTful .NET microservice APIs for real-time dashboards and reporting.",
      image: "/project-images/multitenant-dashboard.png",
      technologies: ["React.js", "Vue.js", "Material-UI", "RESTful APIs", ".NET Microservices", "CI/CD"],
      liveUrl: "https://github.com/Vinnieotieno",
      githubUrl: "https://github.com/Vinnieotieno",
      featured: false,
    },
    {
      id: 5,
      title: "BigDrop Multi-Vendor eCommerce",
      description:
        "Multi-vendor commerce platform enabling product listing, checkout, and vendor management workflows.",
      longDescription:
        "Contributed to development of a multi-vendor eCommerce platform that supported monthly order operations and improved reliability through hosting and infrastructure optimization. Worked on vendor product management and checkout experiences as part of broader platform enhancements.",
      image: "/project-images/bigdrop-multivendor.png",
      technologies: ["PHP", "WordPress", "WooCommerce", "CSS", "JavaScript", "SQL", "Elementor"],
      liveUrl: "https://bigdrop.co.ke",
      githubUrl: "https://github.com/Vinnieotieno/bigdropecommerce",
      featured: false,
    },
    {
      id: 6,
      title: "Globeflight Corporate Website",
      description:
        "Corporate web presence for logistics and courier services with improved content structure and responsiveness.",
      longDescription:
        "Built and maintained a modern company website for logistics operations, supporting service showcase, better discoverability, and cleaner customer journey paths. Focused on responsive design, performance, and practical content architecture for business users.",
      image: "/project-images/globeflight-website.png",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL"],
      liveUrl: "https://globeflight.co.ke",
      githubUrl: "https://github.com/Vinnieotieno",
      featured: false,
    },
    {
      id: 7,
      title: "Movie Recommendation Application",
      description:
        "Full-stack movie recommendation app with Django/Python backend, TypeScript frontend, and production-ready API documentation.",
      longDescription:
        "Built a movie recommendation platform with a Django/Python backend and a TypeScript + Tailwind CSS frontend to deliver a clean, fast user experience. Implemented PostgreSQL for reliable data management and integrated Swagger documentation for clear API exploration and testing. The architecture separates frontend and backend services for easier scaling and maintenance.",
      image: "/movie.png",
      technologies: ["Django", "Python", "TypeScript", "Tailwind CSS", "PostgreSQL", "Swagger"],
      liveUrl: "https://www.loom.com/share/5803334ae2cc460d8bdf608ab4a62ff5",
      githubUrl: "https://github.com/Vinnieotieno/Movie_recommendation_app",
      featured: false,
    },
    {
      id: 8,
      title: "Vincent RealEstate Solutions",
      description:
        "Modern, responsive real estate platform built with Django, focused on premium UX, advanced search, and end-to-end listing management.",
      longDescription:
        "Built a visually rich and fully responsive real estate web platform for buyers, sellers, and renters with a strong focus on branding and usability. Implemented a modern glassmorphic UI, featured listing cards, advanced search filters (keywords, city, bedrooms, price), single-property pages, user authentication flows, a contact experience, SEO metadata, social previews, and a WhatsApp support widget. The platform also includes admin management for listings, realtors, and inquiries, backed by PostgreSQL and configurable SMTP email support.",
      image: "/realestate.png",
      technologies: ["Django 4.x", "Bootstrap 5", "Custom CSS", "PostgreSQL", "Gmail SMTP", "FontAwesome", "Lightbox.js"],
      liveUrl: "https://github.com/Vinnieotieno/RealEstate",
      githubUrl: "https://github.com/Vinnieotieno/RealEstate",
      featured: true,
    },
  ]

  const ProjectModal = ({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-2xl font-bold text-blue-700">{project.title}</h3>
          <button onClick={onClose} className="text-2xl font-bold text-gray-400 transition-colors hover:text-blue-600">
            ✕
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <ProfileImage
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-contain w-full h-64 mb-4 rounded-xl bg-gray-50"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-6 leading-relaxed text-gray-800">{project.longDescription}</p>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-colors rounded-lg shadow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-blue-600 transition-colors bg-white border border-blue-600 rounded-lg shadow hover:bg-blue-50"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-gradient">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-800">
            A showcase of my recent work in enterprise CRM, real-time tracking, and scalable eCommerce solutions
          </p>
        </motion.div>

        <div className="grid gap-8 mb-12 lg:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col p-8 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl group hover:shadow-2xl"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <ProfileImage
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-contain w-full h-64 transition-transform duration-300 group-hover:scale-105 rounded-xl bg-gray-50"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                    <motion.button
                      onClick={() => setSelectedProject(project.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center px-4 py-2 space-x-2 text-blue-600 transition-colors bg-white rounded-lg shadow hover:bg-blue-50"
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">{project.title}</h3>
                <p className="mb-4 text-gray-800">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-colors rounded-lg shadow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 space-x-2 font-semibold text-blue-600 transition-colors bg-white border border-blue-600 rounded-lg shadow hover:bg-blue-50"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

        {/* View More Of My Projects Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/Vinnieotieno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700"
          >
            <Github size={24} />
            <span>View More Of My Projects</span>
          </a>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-gradient">Other Projects</h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 cursor-pointer glass rounded-xl glass-hover group"
                onClick={() => setSelectedProject(project.id)}
              >
                <h4 className="mb-2 text-lg font-semibold transition-transform text-gradient group-hover:scale-105">
                  {project.title}
                </h4>
                <p className="mb-4 text-gray-800">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded glass">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded glass">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
