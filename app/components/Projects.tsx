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
      title: "BigDrop E-commerce Platform",
      description:
        "A comprehensive e-commerce platform enabling vendors to upload products and clients to shop online. Built with modern web technologies for optimal performance.",
      longDescription:
        "BigDrop is a full-featured e-commerce platform that I developed for online shopping in Kenya. The platform features vendor management, product catalog, shopping cart functionality, payment integration, and admin dashboard. Built with WordPress/WooCommerce for scalability and performance, it provides a complete solution for online retail operations.",
      image: "/project-images/bigdrop-screenshot.jpg",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
      liveUrl: "https://bigdrop.co.ke",
      githubUrl: "https://github.com/vincentotieno/bigdrop",
      featured: true,
    },
    {
      id: 2,
      title: "Globeflight Kenya Website",
      description:
        "Modern corporate website for Globeflight Kenya with focus on logistics and courier services.",
      longDescription:
        "A professional corporate website for Globeflight Kenya, a leading logistics and courier services company. The site features modern design, service showcases, tracking functionality, and contact management. Built with React frontend and Node.js/Express/PostgreSQL backend for optimal user experience and performance.",
      image: "/project-images/globeflight-screenshot.jpg",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript"],
      liveUrl: "https://globeflight.co.ke",
      githubUrl: "https://github.com/vincentotieno/globeflight",
      featured: true,
    },
    {
      id: 3,
      title: "LEAD Foundation Africa Website",
      description:
        "Modern, responsive website for LEAD Foundation Africa with focus on digital strategy and user engagement.",
      longDescription:
        "A comprehensive website for LEAD Foundation Africa featuring modern design, content management system, donation integration, and SEO optimization. Built with Next.js, TypeScript, and modern web technologies for optimal performance and user experience. The site showcases mental health initiatives, community development programs, and youth empowerment across Africa.",
      image: "/project-images/lead-africa-screenshot.jpg",
      technologies: ["Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://leadfoundationafrica.org",
      githubUrl: "https://github.com/vincentotieno/lead-foundation",
      featured: false,
    },
    {
      id: 4,
      title: "Zewan Construction Website",
      description:
        "Professional construction company website with modern design and comprehensive service showcase.",
      longDescription:
        "A cutting-edge website for Zewan Construction featuring modern design, service showcases, project portfolios, and client testimonials. Built with Next.js and modern web technologies, the site showcases construction services including custom home building, renovations, and commercial projects.",
      image: "/project-images/zewan-screenshot.jpg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://zewan.vercel.app",
      githubUrl: "https://github.com/vincentotieno/zewan-construction",
      featured: false,
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
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-blue-700">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-blue-600 transition-colors text-2xl font-bold">
            ✕
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ProfileImage
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-xl mb-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-800 mb-6 leading-relaxed">{project.longDescription}</p>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg font-semibold shadow hover:bg-blue-50 transition-colors"
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
    <section id="projects" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            A showcase of my recent work in web development, e-commerce, and digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col group border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <ProfileImage
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelectedProject(project.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-blue-50 transition-colors"
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                <p className="text-gray-800 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg font-semibold shadow hover:bg-blue-50 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass p-6 rounded-xl glass-hover group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <h4 className="text-lg font-semibold mb-2 text-gradient group-hover:scale-105 transition-transform">
                  {project.title}
                </h4>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 glass rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 glass rounded text-xs">+{project.technologies.length - 3} more</span>
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
