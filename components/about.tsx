import { GraduationCap, Award, Users, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20SOCIAL%20POST_A-8pAjP42KnmfwZcxmGdjnIHQicnaeIq.jpeg"
                alt="Dr E.P Dikgale"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Meet Our Dentist
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Dr E.P Dikgale
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                With extensive training and years of experience, Dr Dikgale is committed to providing exceptional dental
                care with a gentle, patient-centered approach.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Academic Qualifications</h3>
                  <p className="text-sm text-muted-foreground">N. H Dip Dent Tech - TUT</p>
                  <p className="text-sm text-muted-foreground">Bachelor of Dental Science - WITS</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to continuing education and staying current with the latest dental techniques and
                    technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Patient-Centered Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to creating a comfortable, welcoming environment where patients feel valued and cared for.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Convenient appointment times to accommodate your busy schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
