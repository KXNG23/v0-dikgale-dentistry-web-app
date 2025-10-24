"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE_DENTISTRY_LOGO-removebg-preview-Rrm38IFy6bgdpw33Cm6RDHgy03PhOG.png"
              alt="Dikgale Dentistry Logo"
              width={200}
              height={72}
              className="h-14 w-auto mb-4"
            />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Providing exceptional dental care with a commitment to your oral health and comfort. Your smile is our
              priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("home")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">21c Goldman Street, Florida, 1710</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:0114725222"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    011 472 5222
                  </a>
                  <a
                    href="tel:0815762477"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    081 576 2477
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:dikgalepenelope1976@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  dikgalepenelope1976@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dikgale Dentistry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
