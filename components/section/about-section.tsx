"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  "Mikrotik",
  "Fiber Optik",
  "Jaringan"
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Hello, Nama Saya Brama WiraWangsa Saya Kelas XI TKJ 2 SMK PLUS PELITA NUSANTARA BOGOR. Jurusan Saya Tehnik Komputer Jaringan (TKJ)
              Saya Mengikuti Devaccto Juga Karna Disana Saya Mendapatkan Banyak Ilmu Dan Wawasan Tentang Keahlian Yg Belum Saya Pelajari.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Keahlian saya Adalah, dan Mikrotik{" "}
              <span className="text-primary">Fiber Optik</span>, <span className="text-primary">, Jaringan</span>,
              dan <span className="text-primary">Mikrotik</span>. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beberapa Keahlian Saya: 
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center">
                <img
                  src="brama.jpg"
                  alt="Profile"
                  className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply rounded-lg group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
