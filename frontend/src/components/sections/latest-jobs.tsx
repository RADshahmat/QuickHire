import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const latestJobs = [
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "N",
    logoBg: "bg-green-100",
    logoColor: "text-green-600",
  },
  {
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "N",
    logoBg: "bg-teal-100",
    logoColor: "text-teal-600",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "D",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-600",
  },
  {
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "M",
    logoBg: "bg-amber-100",
    logoColor: "text-amber-600",
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "T",
    logoBg: "bg-violet-100",
    logoColor: "text-violet-600",
  },
  {
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "U",
    logoBg: "bg-sky-100",
    logoColor: "text-sky-600",
  },
  {
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "P",
    logoBg: "bg-orange-100",
    logoColor: "text-orange-600",
  },
  {
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: ["Full-Time", "Marketing", "Design"],
    logo: "W",
    logoBg: "bg-indigo-100",
    logoColor: "text-indigo-600",
  },
];

export function LatestJobs() {
  return (
    <section className="relative bg-[#F8F8FD] py-14 lg:py-15 z-10 overflow-hidden [clip-path:polygon(70px_0,_100%_0,_100%_100%,_0_100%,_0_70px)]">
      <Image
        src="/images/pattern2.svg"
        alt="Pattern"
        width={700}
        height={600}
        className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:-z-10 object-cover opacity-80"
      />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-foreground font-title md:text-4xl">
            Latest <span className="text-accent-blue">jobs open</span>
          </h2>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline md:flex"
          >
            Show all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {latestJobs.map((job, i) => (
            <Link
              key={`${job.title}-${job.company}-${i}`}
              href="#"
              className="group flex items-start gap-4 bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md lg:p-5"
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${job.logoBg} ${job.logoColor}`}
              >
                {job.logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground">
                  {job.title}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.company} &middot; {job.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-xs font-medium rounded-xl ${
                        tag === "Full-Time"
                          ? "border-chart-2 text-chart-2"
                          : tag === "Marketing"
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-primary/20 bg-primary/5 text-primary"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
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
  );
}
