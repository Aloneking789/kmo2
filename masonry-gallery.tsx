"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function MasonryGallery() {
  const [lightboxImage, setLightboxImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Madhuri Dixit",
      caption: "With Madhuri Dixit at Celebs and You Entertainment",
      aspectRatio: "4/5", // added aspect ratio
    },
    {
      id: 2,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Kangana Ranaut",
      caption: "With Kangana Ranaut at a fashion event",
      aspectRatio: "3/4",
    },
    {
      id: 3,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Shilpa Shetty",
      caption: "Receiving an award from Shilpa Shetty Kundra",
      aspectRatio: "1/1",
    },
    {
      id: 4,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra at ME Awards",
      caption: "At the ME Awards ceremony",
      aspectRatio: "3/4",
    },
    {
      id: 5,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Kareena Kapoor",
      caption: "With Kareena Kapoor Khan at IEA 2019",
      aspectRatio: "4/5",
    },
    {
      id: 6,
      image:
        "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif",
      alt: "Khushboo Mishra with Sushmita Sen",
      caption: "With Sushmita Sen at a beauty event",
      aspectRatio: "1/1",
    },
    {
      id: 7,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif",
      alt: "Khushboo Mishra with Juhi Chawla",
      caption: "With Juhi Chawla at an industry gala",
      aspectRatio: "3/4",
    },
    {
      id: 8,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/ffdfdf-jpg.avif",
      alt: "Khushboo Mishra with Neha Dhupia",
      caption: "With Neha Dhupia discussing beauty trends",
      aspectRatio: "4/5",
    },
    {
      id: 9,
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      alt: "Khushboo Mishra with Kiara Advani",
      caption: "Creating a look for Kiara Advani",
      aspectRatio: "1/1",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="w-full bg-white text-[#121212] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Celebrity Gallery</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Browse through Khushboo Mishra's work with Bollywood's biggest stars and her award-winning moments.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid mb-4"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              onClick={() => setLightboxImage(image)}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                <div className={`aspect-[${image.aspectRatio}] relative`}>
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-white text-lg font-medium">{image.caption}</h4>
                </div>
              </div>
            </motion.div>
          ))}
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

