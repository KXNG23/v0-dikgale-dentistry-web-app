"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your appointment request! We will contact you shortly.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Ready to take the first step towards a healthier smile? Contact us today to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">21c Goldman Street</p>
                <p className="text-muted-foreground">Florida, 1710</p>
                <p className="text-muted-foreground">Johannesburg</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="tel:0114725222" className="block text-muted-foreground hover:text-primary transition-colors">
                  011 472 5222
                </a>
                <a href="tel:0815762477" className="block text-muted-foreground hover:text-primary transition-colors">
                  081 576 2477
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:dikgalepenelope1976@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  dikgalepenelope1976@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request an Appointment</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="081 234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Input
                        id="service"
                        placeholder="e.g., General Check-up"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dental needs or preferred appointment times..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
