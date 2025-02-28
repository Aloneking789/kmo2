"use client"

import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priyanka M.",
      role: "Bride",
      quote:
        "Khushboo transformed me on my wedding day. Her attention to detail and understanding of what would suit me best was incredible.",
    },
    {
      id: 2,
      name: "Anjali S.",
      role: "Regular Client",
      quote:
        "The aesthetic treatments at KM OrgaTonics have completely changed my skin. I've never felt more confident.",
    },
    {
      id: 3,
      name: "Ritu P.",
      role: "Celebrity Client",
      quote:
        "Working with Khushboo for events is always a pleasure. She knows exactly how to create a look that photographs beautifully.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Experiences</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear what our clients have to say about their transformative experiences with Khushboo Mishra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-[#f8f8f8] p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <svg className="w-10 h-10 text-[#121212]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"></path>
              </svg>
              <p className="text-lg mb-4 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#121212]/10 flex items-center justify-center text-[#121212] font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-[#121212]/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

