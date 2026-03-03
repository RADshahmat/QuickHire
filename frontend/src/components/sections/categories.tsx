import Link from "next/link"
import {
  Palette,
  BarChart3,
  Megaphone,
  DollarSign,
  Monitor,
  Code2,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react"

const categories = [
  { name: "Design", count: 235, icon: Palette, highlighted: false },
  { name: "Sales", count: 756, icon: BarChart3, highlighted: false },
  { name: "Marketing", count: 140, icon: Megaphone, highlighted: true },
  { name: "Finance", count: 325, icon: DollarSign, highlighted: false },
  { name: "Technology", count: 436, icon: Monitor, highlighted: false },
  { name: "Engineering", count: 542, icon: Code2, highlighted: false },
  { name: "Business", count: 211, icon: Briefcase, highlighted: false },
  { name: "Human Resource", count: 346, icon: Users, highlighted: false },
]

export function Categories() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-foreground font-title md:text-4xl">
            Explore by{" "}
            <span className="text-accent-blue">category</span>
          </h2>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline md:flex"
          >
            Show all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.name}
                href="#"
                className={`group flex flex-col items-start rounded-xl border p-5 transition-all hover:border-primary hover:shadow-md lg:p-6 ${
                  cat.highlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-background text-foreground"
                }`}
              >
                <Icon
                  className={`size-8 ${
                    cat.highlighted
                      ? "text-primary-foreground"
                      : "text-primary"
                  }`}
                />
                <h3
                  className={`mt-4 text-base font-bold font-[var(--font-heading)] ${
                    cat.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {cat.name}
                </h3>
                <div className="mt-1 flex items-center gap-1">
                  <span
                    className={`text-sm ${
                      cat.highlighted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {cat.count} jobs available
                  </span>
                  <ArrowRight
                    className={`size-3.5 ${
                      cat.highlighted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </Link>
            )
          })}
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
