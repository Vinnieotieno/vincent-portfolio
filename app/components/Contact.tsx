"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        console.error("Email error:", data.error)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Network error:", error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vincentotienoakuku@gmail.com",
      href: "mailto:vincentotienoakuku@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 797 398 004",
      href: "tel:+254797398004",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-gradient">Get In Touch</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-800">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-100"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Let's Connect</h3>
            <p className="mb-8 leading-relaxed text-gray-800">
              I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
              discuss a project, or just want to say hello, feel free to reach out!
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                    {info.icon === Mail && <Mail size={20} />}
                    {info.icon === Phone && <Phone size={20} />}
                    {info.icon === MapPin && <MapPin size={20} />}
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">{info.label}</p>
                    {info.href !== "#" ? (
                      <a href={info.href} className="text-gray-800 transition-colors hover:text-blue-600 font-semibold">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/254797398004?text=Hello%20Vincent,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 space-x-3 text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <p className="mt-2 text-gray-700">Quick response guaranteed!</p>
            </div>
          </motion.div>

          {/* Divider for mobile */}
          <div className="block lg:hidden my-8 border-t border-gray-200"></div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full px-8 py-4 space-x-2 font-semibold text-white transition-colors bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 rounded-full border-white/20 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 font-semibold mt-4"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 font-semibold mt-4"
                >
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
