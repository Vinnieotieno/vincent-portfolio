"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeWriterProps {
  words: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
}

const TypeWriter = ({
  words,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            // Word complete, start deleting after delay
            setTimeout(() => setIsDeleting(true), delayBetweenWords)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Deletion complete, move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <motion.span animate={{ opacity: showCursor ? 1 : 0 }} transition={{ duration: 0.1 }} className="text-blue-600">
        |
      </motion.span>
    </span>
  )
}

export default TypeWriter
