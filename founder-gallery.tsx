"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function FounderGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Madhuri Dixit",
      caption: "Khushboo Mishra with Madhuri Dixit",
      description: "At Celebs and You Entertainment event showcasing beauty excellence.",
    },
    {
      id: 2,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Kangana Ranaut",
      caption: "Kangana Ranaut and Khushboo Mishra",
      description: "Showcasing traditional Indian attire at a prestigious fashion event.",
    },
    {
      id: 3,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Shilpa Shetty",
      caption: "Shilpa Shetty Kundra presenting an award",
      description: "At the International Excellence Awards, celebrating beauty and fashion.",
    },
    {
      id: 4,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra at ME Awards",
      caption: "Khushboo Mishra receiving an award",
      description: "Recognized for exceptional work in cosmetology and makeup artistry.",
    },
    {
      id: 5,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Kareena Kapoor",
      caption: "With Kareena Kapoor Khan",
      description: "Collaborating on beauty trends at a major industry event.",
    },
    {
      id: 6,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Sushmita Sen",
      caption: "With Sushmita Sen",
      description: "Sharing beauty expertise at a celebrity gala.",
    },
    {
      id: 7,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Juhi Chawla",
      caption: "With Juhi Chawla",
      description: "Creating signature looks for special appearances.",
    },
    {
      id: 8,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra with Neha Dhupia",
      caption: "With Neha Dhupia",
      description: "Collaborating on innovative beauty concepts.",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    )
  }

  // Auto-advance the slider every 4 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(timer)
  }, [galleryItems.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full min-h-screen bg-white text-[#121212] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Celebrity-Approved Beauty
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Khushboo Mishra has shared the stage with Bollywood icons, bringing her
            expertise in makeup artistry and cosmetology to the stars.
          </p>
        </motion.div>

        {/* Featured Gallery */}
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto mb-16 overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={galleryItems[activeIndex].image || "/placeholder.svg"}
                alt={galleryItems[activeIndex].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  {galleryItems[activeIndex].caption}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {galleryItems[activeIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* The rest of the component remains unchanged */}
        {/* Founder Profile */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-1/3 aspect-square relative rounded-full overflow-hidden border-4 border-[#121212]/10"
            variants={itemVariants}
          >
            <Image
              src="/khusbu.png?height=400&width=400"
              alt="Khushboo Mishra - Founder"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div className="w-full md:w-2/3" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Khushboo Mishra
            </h3>
            <p className="text-lg mb-6">
              "While nature crafts beauty, perfecting it has always been my passion. From the topmost strand of your
              hair to the glow of your skin, I step in where nature leaves off."
            </p>
            <p className="text-base text-[#121212]/80">
              Celebrated Cosmetologist & Makeup Artist with over 18 years of experience, Khushboo Mishra's spirit is
              deeply embedded in the world of beauty and aesthetics. Her expertise spans from bridal makeup to advanced
              aesthetic treatments.
            </p>
          </motion.div>
        </motion.div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                onClick={() => setLightboxImage(null)}
              >
                <X size={24} />
              </button>
              <div className="relative h-full w-full">
                <Image
                  src={lightboxImage.image || "/placeholder.svg"}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{lightboxImage.caption}</h3>
                <p className="text-white/90">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the KM OrgaTonics Difference</h3>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Looking for Hair & Makeup for your Big day? Or just want to pamper yourself at our salon? We are here to
            help you achieve your beauty goals.
          </p>
          <button className="px-8 py-3 bg-[#121212] text-white rounded-md hover:bg-[#121212]/90 transition-colors duration-300">
            Book an Appointment
          </button>
        </motion.div>
      </div>
    </section>
  )
}

