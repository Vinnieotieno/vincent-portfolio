"use client"

import { motion, useScroll, useSpring } from "framer-motion"

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Circular Progress */}
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="glass rounded-full p-2 glow">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-300"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="stroke-current text-blue-600"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                pathLength: scrollYProgress,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-xs font-bold text-primary"
              style={{
                opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
              }}
            >
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProgressIndicator
