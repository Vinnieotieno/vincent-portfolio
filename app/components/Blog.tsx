"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Calendar, Clock } from "lucide-react"
import ProfileImage from "./ProfileImage"
import { useEffect, useState } from "react"

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const res = await fetch("/api/medium")
        const data = await res.json()
        if (data.posts) {
          setPosts(data.posts)
        } else {
          setPosts([])
        }
      } catch (e) {
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    fetchMediumPosts()
  }, [])

  // Fallback static posts if API fails
  const blogPosts = posts.length > 0 ? posts : [
    {
      title: "Building Modern Web Applications with React and Next.js",
      contentSnippet: "Exploring the latest features and best practices for building scalable web applications using React and Next.js framework.",
      pubDate: "2024-12-15",
      link: "https://medium.com/@vincentotieno/building-modern-web-applications",
      categories: ["React", "Next.js", "Web Development"],
    },
    {
      title: "SEO Optimization Strategies for Modern Websites",
      contentSnippet: "A comprehensive guide to improving your website's search engine visibility and organic traffic through proven SEO techniques.",
      pubDate: "2024-12-10",
      link: "https://medium.com/@vincentotieno/seo-optimization-strategies",
      categories: ["SEO", "Digital Marketing", "Web Performance"],
    },
    {
      title: "The Future of E-commerce: Trends and Technologies",
      contentSnippet: "Analyzing emerging trends in e-commerce and how new technologies are reshaping online shopping experiences.",
      pubDate: "2024-12-05",
      link: "https://medium.com/@vincentotieno/future-of-ecommerce",
      categories: ["E-commerce", "Technology", "Business"],
    },
  ]

  return (
    <section id="blog" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Latest Blog Posts</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Insights and thoughts on web development, digital marketing, and technology trends
          </p>
          <motion.a
            href="https://medium.com/@vincentotieno"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <span>View All Posts on Medium</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.guid || post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg group border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <ProfileImage
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {(post.categories || []).slice(0, 2).map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-700 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{new Date(post.pubDate || post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  {/* Medium RSS does not provide readTime, so skip or estimate if needed */}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-800 mb-6 leading-relaxed">{post.contentSnippet}</p>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all mt-auto"
              >
                <span>Read More</span>
                <ExternalLink size={14} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about web development, digital marketing, and technology trends.
          </p>
          <motion.a
            href="https://medium.com/@vincentotieno"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <span>Follow on Medium</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
