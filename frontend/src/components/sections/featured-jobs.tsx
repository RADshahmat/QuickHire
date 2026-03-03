import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const featuredJobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team ma...",
    tags: ["Marketing", "Design"],
    tagColors: ["bg-amber-100 text-amber-700", "bg-primary/10 text-primary"],
    logo: "R",
    logoBg: "bg-secondary",
    logoColor: "text-foreground",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team f...",
    tags: ["Design", "Business"],
    tagColors: ["bg-primary/10 text-primary", "bg-amber-100 text-amber-700"],
    logo: "D",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-600",
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    description: "Pitch is looking for Customer Manager to join marketing t...",
    tags: ["Marketing"],
    tagColors: ["bg-amber-100 text-amber-700"],
    logo: "P",
    logoBg: "bg-pink-100",
    logoColor: "text-pink-600",
  },
  {
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    type: "Full Time",
    description: "Blinklist is looking for Visual Designer to help desi...",
    tags: ["Design"],
    tagColors: ["bg-primary/10 text-primary"],
    logo: "B",
    logoBg: "bg-green-100",
    logoColor: "text-green-600",
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"],
    tagColors: ["bg-amber-100 text-amber-700", "bg-primary/10 text-primary"],
    logo: "C",
    logoBg: "bg-red-100",
    logoColor: "text-red-600",
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n...",
    tags: ["Design", "Business"],
    tagColors: ["bg-primary/10 text-primary", "bg-amber-100 text-amber-700"],
    logo: "Ca",
    logoBg: "bg-teal-100",
    logoColor: "text-teal-600",
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
    tagColors: ["bg-amber-100 text-amber-700"],
    logo: "G",
    logoBg: "bg-emerald-100",
    logoColor: "text-emerald-600",
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help manage desi...",
    tags: ["Technology"],
    tagColors: ["bg-primary/10 text-primary"],
    logo: "T",
    logoBg: "bg-sky-100",
    logoColor: "text-sky-600",
  },
]

export function FeaturedJobs() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-foreground font-[var(--font-heading)] md:text-4xl">
            Featured{" "}
            <span className="text-primary">jobs</span>
          </h2>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline md:flex"
          >
            Show all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredJobs.map((job, i) => (
            <Link
              key={`${job.title}-${job.company}-${i}`}
              href="#"
              className="group flex flex-col rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className={`flex size-10 items-center justify-center rounded-lg text-sm font-bold ${job.logoBg} ${job.logoColor}`}>
                  {job.logo}
                </div>
                <Badge variant="outline" className="text-xs font-medium border-primary/20 text-primary">
                  {job.type}
                </Badge>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground font-[var(--font-heading)]">
                {job.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {job.company} &middot; {job.location}
              </p>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${job.tagColors[tagIndex]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Show all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
