"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlayInterval?: number
  className?: string
}

export function Carousel({ children, autoPlayInterval = 5000, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1))
  }

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, autoPlayInterval])

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Content */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-primary w-8" : "bg-background/50 hover:bg-background/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
