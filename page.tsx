import FounderGallery from "./founder-gallery"
import CelebrityWall from "./celebrity-wall"
import MasonryGallery from "./masonry-gallery"
import ServicesShowcase from "./services-showcase"
import Testimonials from "./testimonials"
import {Transformations} from "./transformations"

export default function SalonPage() {
  return (
    <main className="min-h-screen bg-white">
      <FounderGallery />
      <CelebrityWall />
      <MasonryGallery />
      <ServicesShowcase />
      <Transformations />
      <Testimonials />
    </main>
  )
}

