"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import type { ProfileType } from "@/app/lib/types"

interface HeroSectionProps {
  profile: ProfileType
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = profile?.roles || ["Web Developer", "Designer", "Freelancer"]

  // Typing effect
  useEffect(() => {
    const role = roles[currentIndex]
    let charIndex = 0
    let typingInterval: NodeJS.Timeout
    let pauseTimeout: NodeJS.Timeout

    // Type the current role
    const typeRole = () => {
      if (charIndex <= role.length) {
        setTypedText(role.substring(0, charIndex))
        charIndex++
        typingInterval = setTimeout(typeRole, 100)
      } else {
        // Pause at the end of typing
        pauseTimeout = setTimeout(eraseRole, 2000)
      }
    }

    // Erase the current role
    const eraseRole = () => {
      if (charIndex > 0) {
        setTypedText(role.substring(0, charIndex - 1))
        charIndex--
        typingInterval = setTimeout(eraseRole, 50)
      } else {
        // Move to next role
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }
    }

    typeRole()

    return () => {
      clearTimeout(typingInterval)
      clearTimeout(pauseTimeout)
    }
  }, [currentIndex, roles])

  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hi, I'm {profile?.name || "Alex"}</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-2">
              I'm a{" "}
              <span className="relative">
                {typedText}
                <span className="absolute ml-1 animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {profile?.shortBio ||
                "Passionate about creating beautiful, functional, and user-friendly digital experiences."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToAbout}>
                Learn More <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              {profile?.image ? (
                <Image
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name || "Profile"}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  No Image
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-2 h-2 bg-primary rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
