export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Practice
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Care You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From our state-of-the-art facilities to our dedicated team, we're committed to providing the highest quality
            dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Professional at work */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20SOCIAL%20POST_B-oRwlQkX8a8bAD1gqa6jMiGpnlFzq0D.jpeg"
              alt="Dr Dikgale providing dental care"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Expert Dental Care</p>
            </div>
          </div>

          {/* Branded vehicle */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20CAR%20WRAP-7aArK3YTEOfvLiVHd3MOaoh0WnJvW8.png"
              alt="Dikgale Dentistry branded vehicle"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Mobile Service Available</p>
            </div>
          </div>

          {/* Team branding */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIKGALE%20DENTISTRY%20CAR%20AND%20UNIFORM-gn0DXNBOoJfznwbphNrTya1hVWZIAa.png"
              alt="Dikgale Dentistry professional team"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Professional Team</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground">Patient Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">Emergency Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
