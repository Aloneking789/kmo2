"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function CelebrityWall() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const scrollRef = useRef(null)

  // Automatically scroll the horizontal gallery
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const speed = 0.5
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    const animationRef = { current: null }
    animationRef.current = requestAnimationFrame(scroll)

    // Pause scrolling when hovering
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const celebrityImages = [
    {
      id: 1,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Madhuri Dixit",
      caption: "With Madhuri Dixit",
    },
    {
      id: 2,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Kangana Ranaut",
      caption: "With Kangana Ranaut",
    },
    {
      id: 3,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Shilpa Shetty",
      caption: "With Shilpa Shetty",
    },
    {
      id: 4,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra at ME Awards",
      caption: "At ME Awards",
    },
    {
      id: 5,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Kareena Kapoor",
      caption: "With Kareena Kapoor",
    },
    {
      id: 6,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Sushmita Sen",
      caption: "With Sushmita Sen",
    },
    {
      id: 7,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Juhi Chawla",
      caption: "With Juhi Chawla",
    },
    {
      id: 8,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra with Neha Dhupia",
      caption: "With Neha Dhupia",
    },
    {
      id: 9,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Kiara Advani",
      caption: "With Kiara Advani",
    },
    {
      id: 10,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Madhuri Dixit",
      caption: "With Madhuri Dixit",
    },
  ]

  return (
    <section className="w-full bg-white text-[#121212] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Celebrity Collaborations</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Khushboo Mishra has worked with some of the biggest names in Bollywood, bringing her expertise to the stars.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Celebrity Wall */}
        <div className="relative mb-16 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-4 gap-4 snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-4 pr-8">
              {celebrityImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="flex-shrink-0 w-64 h-80 relative rounded-lg overflow-hidden shadow-md cursor-pointer snap-center"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => setLightboxImage(image)}
                >
                  <Image src={image.image || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white text-lg font-medium">{image.caption}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient overlays to indicate scrolling */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Mosaic Gallery */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Gallery Highlights
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
            {celebrityImages.slice(0, 8).map((image, index) => {
              // Create varied sizes for a more dynamic layout
              const isLarge = index === 0 || index === 3 || index === 6
              const gridClass = isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"

              return (
                <motion.div
                  key={image.id}
                  className={`${gridClass} relative overflow-hidden rounded-lg shadow-md cursor-pointer`}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setLightboxImage(image)}
                >
                  <div className={`${isLarge ? "aspect-square" : "aspect-[3/4]"} relative`}>
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h4 className="text-white text-lg font-medium">{image.caption}</h4>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxImage(null)
                }}
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
                <h3 className="text-white text-xl font-semibold">{lightboxImage.caption}</h3>
                <p className="text-white/90">{lightboxImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

