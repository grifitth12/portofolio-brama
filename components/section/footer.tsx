"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Instagram, MessageCircle, Send, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/wirawangsabrama2023/",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/6283815137309",
    label: "WhatsApp",
    color: "hover:text-[#25D366]",
  },
  {
    icon: Mail,
    href: "mailto:wirawangsab@gmail.com",
    label: "Email",
    color: "hover:text-primary",
  },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contact" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">05. Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Jika Anda Tertarik Dengan Portofolio Dan CV saya Hubungi Saya Melalui Berikut:
          </p>
          <Button
            size="lg"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8"
            asChild
          >
            <a href="mailto:wirawangsab@gmail.com">Say Hello</a>
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-muted-foreground text-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>Bogor, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>+62 8381 5137 309</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            <span>wirawangsab@gmail.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground ${social.color} transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by{" "}
              Brama WiraWangsa
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
