"use client"

import { motion } from "framer-motion"
import { Sparkles, Palette, Crown } from "lucide-react"

export default function ServicesShowcase() {
  const services = [
    {
      id: 1,
      title: "Bridal Makeup",
      description: "Transforming brides for their special day with personalized and breathtaking looks.",
      icon: <Crown className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Advanced Aesthetic Treatments",
      description: "Combining expertise in cosmetology with innovative approaches for radiant, youthful skin.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Semi-Permanent Makeup",
      description: "Long-lasting beauty enhancements with natural, flawless results tailored to your features.",
      icon: <Palette className="w-6 h-6" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="w-full bg-[#f8f8f8] text-[#121212] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Discover the exceptional beauty services that have made Khushboo Mishra a celebrated name in the industry.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[#121212]/5 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#121212]/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

