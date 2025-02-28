"use client"

import { BeforeAfter } from "@/components/ui/before-after"
import { motion } from "framer-motion"

export function Transformations() {
  const transformations = [
    {
      id: 1,
      title: "Bridal Transformation",
      description: "Creating timeless bridal looks that enhance natural beauty",
      beforeImage: "./t1.png",
      afterImage:
        "./tt1.png",
    },
    {
      id: 2,
      title: "Tradational Transformation",
      description: "Glamorous looks for special occasions and events",
      beforeImage: "./t2.png",
      afterImage: "./tt2.png",
    },
  ]

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the artistry of makeup transformation. Slide to reveal the before and after results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4 max-w-lg mx-auto" // added max-width and centering classes
            >
              <div className="w-full">
                <BeforeAfter beforeImage={item.beforeImage} afterImage={item.afterImage} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



