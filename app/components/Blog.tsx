"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import ProfileImage from "./ProfileImage"
import { useEffect, useState } from "react"

const POSTS_PER_PAGE = 6

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMediumPosts() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/medium?page=${page}&limit=${POSTS_PER_PAGE}`)
        if (!res.ok) {
          setError('Failed to fetch posts')
          setPosts([])
          setTotal(0)
          return
        }
        const data = await res.json()
        setPosts(data.posts || [])
        setTotal(data.total || 0)
      } catch (e) {
        setError('Failed to fetch posts')
        setPosts([])
        setTotal(0)
      } finally {
        setLoading(false)
      }
    }
    fetchMediumPosts()
    // Scroll to top of blog section on page change
    const blogSection = document.getElementById('blog')
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [page])

  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  // Fallback static posts if API fails
  const blogPosts = posts.length > 0 ? posts : [
    {
      title: "Building Modern Web Applications with React and Next.js",
      contentSnippet: "Exploring the latest features and best practices for building scalable web applications using React and Next.js framework.",
      pubDate: "2024-12-15",
      link: "https://medium.com/@vincentotienoakuku/building-modern-web-applications",
      categories: ["React", "Next.js", "Web Development"],
      thumbnail: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=React+%26+Next.js",
      guid: "fallback-1",
    },
    {
      title: "SEO Optimization Strategies for Modern Websites",
      contentSnippet: "A comprehensive guide to improving your website's search engine visibility and organic traffic through proven SEO techniques.",
      pubDate: "2024-12-10",
      link: "https://medium.com/@vincentotienoakuku/seo-optimization-strategies",
      categories: ["SEO", "Digital Marketing", "Web Performance"],
      thumbnail: "https://via.placeholder.com/400x300/10b981/ffffff?text=SEO+Optimization",
      guid: "fallback-2",
    },
    {
      title: "The Future of E-commerce: Trends and Technologies",
      contentSnippet: "Analyzing emerging trends in e-commerce and how new technologies are reshaping online shopping experiences.",
      pubDate: "2024-12-05",
      link: "https://medium.com/@vincentotienoakuku/future-of-ecommerce",
      categories: ["E-commerce", "Technology", "Business"],
      thumbnail: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=E-commerce+Future",
      guid: "fallback-3",
    },
  ]

  const isUsingFallback = posts.length === 0 && !loading

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
          {isUsingFallback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <p className="text-yellow-800 text-sm">
                📝 Showing sample posts. Check out my latest articles on Medium!
              </p>
            </motion.div>
          )}
          <motion.a
            href="https://medium.com/@vincentotienoakuku"
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

        {error && (
          <div className="text-red-600 text-center mb-8">{error}</div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <motion.div
                key={`loading-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-48 bg-gray-200 animate-pulse rounded-xl"></div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
                  <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
                </div>
                <div className="w-full h-6 bg-gray-200 animate-pulse rounded mb-3"></div>
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded mb-6"></div>
                <div className="w-24 h-8 bg-gray-200 animate-pulse rounded mt-auto"></div>
              </motion.div>
            ))
          ) : (
            blogPosts.map((post, index) => (
              <motion.article
                key={post.guid || post.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg group border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/400x300/1f2937/ffffff?text=${encodeURIComponent(post.title)}`
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-xl">
                      <div className="text-white text-center p-4">
                        <div className="text-2xl mb-2">📝</div>
                        <div className="text-sm font-medium">{post.title}</div>
                      </div>
                    </div>
                  )}
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
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {!isUsingFallback && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="inline-flex items-center space-x-2 rounded-xl bg-gray-50 px-4 py-2 shadow border border-gray-200">
              <button
                className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setPage(page - 1)}
                disabled={page === 1 || loading}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors ${page === i + 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'}`}
                  onClick={() => setPage(i + 1)}
                  disabled={page === i + 1 || loading}
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages || loading}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        )}

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
            href="https://medium.com/@vincentotienoakuku"
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
