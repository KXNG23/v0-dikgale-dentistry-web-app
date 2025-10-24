"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE_DENTISTRY_LOGO-removebg-preview-Rrm38IFy6bgdpw33Cm6RDHgy03PhOG.png"
              alt="Dikgale Dentistry Logo"
              width={220}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0114725222"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              011 472 5222
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <a
                href="tel:0114725222"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                011 472 5222
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-accent text-primary-foreground"
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
