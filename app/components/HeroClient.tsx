// app/components/HeroClient.tsx
"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Hero = dynamic(() => import("./Hero"), { ssr: false })

export default function HeroClient() {
  return (
    <Suspense fallback={null}>
      <Hero />
    </Suspense>
  )
}
