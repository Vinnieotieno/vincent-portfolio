"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react"
import Image from "next/image"
import Scene3D from "./Scene3D"
import TypeWriter from "./TypeWriter"

const Hero = () => {
  const typewriterWords = [
    "Software Developer",
    "Digital Strategist",
    "React Specialist",
    "Frontend Engineer",
    "SEO Expert",
    "Problem Solver",
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vinnieotieno", label: "GitHub", color: "hover:text-gray-900" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vincent-otieno-951585292/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: Mail, href: "mailto:vincentotienoakuku@gmail.com", label: "Email", color: "hover:text-red-500" },
    { icon: Phone, href: "tel:+254797398004", label: "Phone", color: "hover:text-green-600" },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      href: "https://wa.me/254797398004",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-pattern">
      <Scene3D />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl floating"></div>
        <div
          className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-blue-400/20 blur-3xl floating"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer for navigation */}
        <div className="h-20"></div>

        {/* Hero Content */}
        <div className="flex items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto max-w-7xl">
            {/* Mobile Layout - Stacked */}
            <div className="space-y-12 text-center lg:hidden">
              {/* Profile Image - Mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    className="w-[560px] h-[680px] sm:w-[580px] sm:h-[700px] glass rounded-full p-6 glow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/vincent.webp"
                      alt="Vincent Otieno - Software Developer"
                      width={580}
                      height={700}
                      className="object-contain w-full h-full rounded-full"
                      priority
                    />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute w-8 h-8 rounded-full -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-6 h-6 rounded-full -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-orange-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 rounded-full top-1/2 -left-8 bg-gradient-to-r from-green-500 to-blue-500"
                    animate={{
                      x: [0, 20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full glass text-muted">
                    👋 Hello, I&apos;m
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-4xl font-bold sm:text-5xl md:text-6xl"
                >
                  <motion.span
                    className="block text-gradient"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Vincent Otieno
                  </motion.span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-8 text-lg sm:text-xl text-secondary"
                >
                  <TypeWriter
                    words={typewriterWords}
                    className="font-semibold"
                    speed={100}
                    deleteSpeed={50}
                    delayBetweenWords={2000}
                  />
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="max-w-2xl mx-auto text-base leading-relaxed sm:text-lg text-muted"
                >
                  Passionate about creating innovative digital solutions that drive business growth. Specializing in
                  modern web technologies and strategic digital marketing to deliver exceptional user experiences.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex justify-center space-x-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`glass glass-hover p-3 rounded-full glow-hover transition-colors ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col justify-center max-w-md gap-4 mx-auto sm:flex-row"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
                  >
                    <span>View My Work</span>
                    <ArrowDown size={16} className="rotate-[-45deg]" />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 space-x-2 font-semibold glass glass-hover rounded-xl glow-hover text-primary"
                  >
                    <span>Get In Touch</span>
                    <Mail size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="items-center hidden gap-16 lg:grid lg:grid-cols-12">
              {/* Content - Desktop Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 lg:col-span-7"
              >
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full glass text-muted">
                    👋 Hello, I&apos;m
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl font-bold leading-tight xl:text-7xl"
                >
                  <motion.span
                    className="block text-gradient"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Vincent
                  </motion.span>
                  <motion.span
                    className="block text-primary"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Otieno
                  </motion.span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-8 text-xl xl:text-2xl text-secondary"
                >
                  <TypeWriter
                    words={typewriterWords}
                    className="font-semibold"
                    speed={100}
                    deleteSpeed={50}
                    delayBetweenWords={2000}
                  />
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-2xl text-lg leading-relaxed xl:text-xl text-muted"
                >
                  Passionate about creating innovative digital solutions that drive business growth. Specializing in
                  modern web technologies and strategic digital marketing to deliver exceptional user experiences.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex space-x-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`glass glass-hover p-3 rounded-full glow-hover transition-colors ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
                  >
                    <span>View My Work</span>
                    <ArrowDown size={16} className="rotate-[-45deg]" />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold glass glass-hover rounded-xl glow-hover text-primary"
                  >
                    <span>Get In Touch</span>
                    <Mail size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Profile Image - Desktop Right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:col-span-5"
              >
                <div className="relative">
                  <motion.div
                    className="w-[580px] h-[700px] xl:w-[640px] xl:h-[760px] glass rounded-full p-6 glow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/vincent.webp"
                      alt="Vincent Otieno - Software Developer"
                      width={640}
                      height={760}
                      className="object-contain w-full h-full rounded-full"
                      priority
                    />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute w-12 h-12 rounded-full -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-8 h-8 rounded-full -bottom-6 -left-6 bg-gradient-to-r from-pink-500 to-orange-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute w-6 h-6 rounded-full top-1/2 -left-10 bg-gradient-to-r from-green-500 to-blue-500"
                    animate={{
                      x: [0, 20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center space-y-2 text-muted"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
