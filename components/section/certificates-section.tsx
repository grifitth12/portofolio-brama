"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    title: "Optimizing Network Perfomance",
    issuer: "ID-Networkers",
    date: "2025",
    image: "sertifikat1.jpg",
    link: "/sertifikat1.pdf",
    skills: ["Network"],
  },
  {
    title: "Tehnik Menyederhanakan Deployment",
    issuer: "ID-Networkers",
    date: "2024",
    image: "sertifikat2.jpg",
    link: "/sertifikat2.pdf",
    skills: ["Deploy"],
  },
  {
    title: "Unifi: Building The Future Of IT",
    issuer: "ID-Networkers",
    date: "2025",
    credentialId: "GOOGLE-UX-2023",
    image: "sertifikat3.jpg",
    link: "sertifikat3.pdf",
    skills: ["Building", "IT"],
  },
]

export default function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certificates</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
