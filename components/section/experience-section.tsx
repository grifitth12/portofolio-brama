"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Pengecekan Hambatan",
    role: "Fiber Optic",
    period: "2025",
    location: "Bogor, Indonesia",
    description:
      "Sedang Pengecekan Hambatan Kurang Dari 30db Dengan Hasil 14,40",
    responsibilities: [
      "Paham SOP/K3 Apa saja Yang Harus Dilakukan Dan apa Saja yang Harus Di Kenakan",
    ],
    image: "/foto1.jpg",
  },
  {
    id: 2,
    company: "Penyambungan Kabel",
    role: "Fiber Optic",
    period: "2025",
    location: "Bogor, Indonesia",
    description:
      "Proses Penyambungan Kabel Distribution",
    responsibilities: [
        "Dapat Mempraktekkan Dari Mengupas Kabel, Terminasi",
        "Juga Dapat Melakukan Splicing/Penyambungan Kabel",
    ],
    image: "/foto3.jpg",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary font-mono">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "md:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                </div>
                <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </motion.div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <div>
                  <p className="text-primary font-mono text-sm mb-1">{exp.role}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.company}</h3>
                </div>

                <div
                  className={`flex items-center gap-4 text-sm text-muted-foreground ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className={`space-y-2 ${index % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
