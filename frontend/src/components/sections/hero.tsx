"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronDown } from "lucide-react"

const popularSearches = ["UI Designer", "UX Researcher", "Android", "Admin"]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground font-[var(--font-heading)] md:text-5xl lg:text-6xl text-balance">
              Discover{" "}
              <br className="hidden sm:block" />
              more than{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">5000+ Jobs</span>
            </h1>
            <div className="mt-1 h-2 w-40 rounded-full bg-primary/20 md:w-52" />

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            <div className="mt-8 flex flex-col rounded-xl border border-border bg-background p-2 shadow-lg sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <Search className="size-5 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <MapPin className="size-5 shrink-0 text-muted-foreground" />
                <span className="text-sm text-foreground">Florence, Italy</span>
                <ChevronDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-5 text-sm font-semibold sm:ml-2">
                Search my job
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Popular :</span>
              {popularSearches.map((term) => (
                <span key={term} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {term}{popularSearches.indexOf(term) < popularSearches.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative">
              <Image
                src="/images/hero-person.jpg"
                alt="Professional looking for jobs"
                width={480}
                height={520}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
