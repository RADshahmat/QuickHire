import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Companies } from "@/components/sections/companies"
import { Categories } from "@/components/sections/categories"
import { CtaBanner } from "@/components/sections/cta-banner"
import { FeaturedJobs } from "@/components/sections/featured-jobs"
import { LatestJobs } from "@/components/sections/latest-jobs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Companies />
        <Categories />
        <CtaBanner />
        <FeaturedJobs />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  )
}
