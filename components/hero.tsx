"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-background via-secondary to-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Professional Dental Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Oral Health Is Our Concern
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Experience exceptional dental care with Dr E.P Dikgale. We provide comprehensive dental services in a
              comfortable, modern environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground text-base px-8"
              >
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="text-base px-8"
              >
                View Services
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <a
                  href="tel:0114725222"
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  011 472 5222
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-base font-semibold text-foreground">Florida, Johannesburg</p>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel with Images and Video */}
          <div className="relative">
            <Carousel autoPlayInterval={6000} className="shadow-2xl">
              {/* Slide 1: Professional Care Image */}
              <div className="relative aspect-[4/3] bg-secondary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20SOCIAL%20POST_A-xEzjhXwRyARMFQaPkGJ8PUsFuDtJUv.jpeg"
                  alt="Dr. Dikgale providing professional dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Slide 2: Video */}
              <div className="relative aspect-[4/3] bg-secondary">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whisk_ktoygtyyctoyugoy0cz4qgotymmhrtl1adoi1im-hqMHFCvYxomwyp7A7dzSMvULPI98yJ.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Slide 3: Dental Treatment Image */}
              <div className="relative aspect-[4/3] bg-secondary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20SOCIAL%20POST_B-NRKTjGWPGPXumpmen2cXQa8CoS6i8x.jpeg"
                  alt="Professional dental treatment at Dikgale Dentistry"
                  fill
                  className="object-cover"
                />
              </div>
            </Carousel>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg z-10">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
