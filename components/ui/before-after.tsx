"use client"

import * as React from "react"
import { useMotionValue, useTransform } from "framer-motion"

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50)
  const [isDragging, setIsDragging] = React.useState(false)

  const containerRef = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const position = useTransform(x, [-150, 150], [0, 100])

  React.useEffect(() => {
    position.onChange((v) => setSliderPosition(v))
  }, [position])

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current || !isDragging) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const x = "touches" in event ? event.touches[0].clientX : event.clientX
    const position = ((x - rect.left) / rect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full overflow-hidden rounded-lg"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleDrag}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleDrag}  
    >     
      <div className="absolute inset-0">
        <img src={afterImage || "/placeholder.svg"} alt="After" className="h-full w-full object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage || "/placeholder.svg"} alt="Before" className="h-full w-full object-cover" />
      </div>

      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="h-1 w-4 bg-gray-400 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded">
        {afterLabel}
      </div>
    </div>
  )
}

