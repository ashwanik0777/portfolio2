"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import type { ExperienceType } from "@/app/lib/types"

interface ExperienceSectionProps {
  experiences: ExperienceType[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  // Sort experiences by date (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and work history.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {sortedExperiences.map((experience, index) => (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-8 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="absolute top-5 left-0 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                style={{ [index % 2 === 0 ? "right" : "left"]: "-8px" }}
              />

              <Card>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">
                      {formatDate(experience.startDate)} -{" "}
                      {experience.endDate ? formatDate(experience.endDate) : "Present"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{experience.jobTitle}</h3>
                  <h4 className="text-primary mb-3">{experience.company}</h4>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No experience message */}
        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No work experience added yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
