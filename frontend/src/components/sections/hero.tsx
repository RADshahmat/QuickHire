"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronDown } from "lucide-react"
import { Input } from "../ui/input"
import { Select } from "../ui/select"

const popularSearches = ["UI Designer", "UX Researcher", "Android", "Admin"]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8FD] [clip-path:polygon(0_0,100%_0,100%_75%,80%_100%,0_100%)] !border-0 !outline-none">
      {/* Background Pattern */}

      <Image
        src="/images/pattern.svg"
        alt="Pattern"
        width={900}
        height={940}
        className="absolute bottom-0 right-0 z-0 w-[200px] sm:w-[400px] lg:w-[900px]"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 ">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Text + Search */}
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground font-title md:text-5xl lg:text-6xl text-balance">
              Discover <br className="hidden sm:block" />
              more than <br className="hidden sm:block" />
              <span className="text-accent-blue">5000+ Jobs</span>
            </h1>

            <Image
              src="/images/Vector.svg"
              alt="Decorative shape"
              width={370}
              height={10}
              className="mt-4"
            />

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>

            {/* Search Bar */}
            <div className="relative z-20 mt-8 flex flex-col border border-border bg-white p-2 shadow-xl sm:flex-row sm:items-center lg:w-[120%] lg:-mr-32">
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <Search className="size-5 shrink-0 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <MapPin className="size-5 shrink-0 text-muted-foreground" />
                <Select >
                  Florence, Italy
                </Select>
                <ChevronDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 text-sm font-semibold sm:ml-2">
                Search my job
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Popular :</span>
              {popularSearches.map((term) => (
                <span
                  key={term}
                  className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {term}
                  {popularSearches.indexOf(term) < popularSearches.length - 1
                    ? ","
                    : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image (only visible on large screens) */}
          <div className="hidden relative justify-end lg:flex">
            <Image
              src="/images/hero-person.png"
              alt="Professional looking for jobs"
              width={450}
              height={500}
              className="relative z-20 object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}