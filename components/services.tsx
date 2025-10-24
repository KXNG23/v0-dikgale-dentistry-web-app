import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, Sparkles, Shield, Zap, Heart, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description:
      "Comprehensive oral examinations, cleanings, fillings, and preventive care to maintain your dental health.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers to enhance your confidence and appearance.",
  },
  {
    icon: Shield,
    title: "Restorative Dentistry",
    description: "Crowns, bridges, dentures, and implants to restore function and aesthetics to damaged teeth.",
  },
  {
    icon: Zap,
    title: "Emergency Dental Care",
    description: "Prompt treatment for dental emergencies including severe pain, trauma, and infections.",
  },
  {
    icon: Heart,
    title: "Pediatric Dentistry",
    description: "Gentle, specialized care for children to ensure healthy dental development and positive experiences.",
  },
  {
    icon: Stethoscope,
    title: "Oral Surgery",
    description: "Tooth extractions, wisdom teeth removal, and other surgical procedures performed with care.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We offer a full range of dental services to meet all your oral health needs, from routine check-ups to
            advanced procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border hover:border-primary transition-colors duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
