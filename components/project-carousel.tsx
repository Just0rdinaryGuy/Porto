"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCarouselProps {
    images: string[]
    title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Auto-slide optional? keeping it manual for now so user can inspect details

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 mb-8 group bg-zinc-950">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - screenshot ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Previous slide</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Next slide</span>
                    </Button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
