"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"
import type { ProfileType } from "@/app/lib/types"

interface AboutSectionProps {
  profile: ProfileType
}

export function AboutSection({ profile }: AboutSectionProps) {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Development",
      description: "Building modern web applications with the latest technologies.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Experience",
      description: profile?.experience || "5+ years of professional experience in web development.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Education",
      description: profile?.education || "Bachelor's degree in Computer Science.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      description: profile?.location || "Available for remote work worldwide.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {profile?.aboutImage ? (
                <Image src={profile.aboutImage || "/placeholder.svg"} alt="About me" fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  No Image
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">{profile?.title || "Full Stack Developer"}</h3>
            <p className="text-muted-foreground mb-6">
              {profile?.bio ||
                "I am a passionate web developer with expertise in building modern, responsive web applications. I specialize in frontend and backend technologies, creating seamless user experiences and robust server-side solutions."}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">What I'm doing</h4>
              <p className="text-muted-foreground">
                {profile?.currentWork ||
                  "Currently, I'm focused on building accessible, inclusive products and digital experiences for various clients."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "Frontend Development",
              description:
                "Creating responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue.",
            },
            {
              title: "Backend Development",
              description:
                "Building robust server-side applications with Node.js, Express, MongoDB, and SQL databases.",
            },
            {
              title: "Full Stack Solutions",
              description:
                "Delivering end-to-end web applications with seamless integration between frontend and backend.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
