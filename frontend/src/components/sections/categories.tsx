import Link from "next/link";
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
} from "lucide-react";

const categories = [
  { name: "Design", count: 235, icon: Palette },
  { name: "Sales", count: 756, icon: BarChart3 },
  { name: "Marketing", count: 140, icon: Megaphone },
  { name: "Finance", count: 325, icon: DollarSign },
  { name: "Technology", count: 436, icon: Monitor },
  { name: "Engineering", count: 542, icon: Code2 },
  { name: "Business", count: 211, icon: Briefcase },
  { name: "Human Resource", count: 346, icon: Users },
];

export function Categories() {
  return (
    <section className="bg-background py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-foreground font-title md:text-4xl">
            Explore by <span className="text-accent-blue">category</span>
          </h2>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline md:flex"
          >
            Show all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 lg:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href="#"
                className="group flex gap-15 md:gap-5 md:flex-col items-center md:items-start border border-border bg-background p-5 text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md lg:p-6"
              >
                <Icon className="size-8 text-primary transition-colors group-hover:text-primary-foreground" />
                <div>
                  <h3 className="mt-4 text-base font-bold font-[var(--font-heading)] transition-colors group-hover:text-primary-foreground">
                    {cat.name}
                  </h3>
                  <div className="mt-1 flex items-center space-x-20 >">
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                      {cat.count} jobs available
                    </span>
                    <ArrowRight className="size-4.5 text-foreground font-bold transition-colors group-hover:text-primary-foreground/80" />
                  </div>
                </div>
              </Link>
            );
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
  );
}
