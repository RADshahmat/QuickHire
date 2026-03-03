import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-cta-bg px-6 py-12 lg:px-16 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-white font-[var(--font-heading)] md:text-4xl text-balance">
                Start posting jobs today
              </h2>
              <p className="mt-4 text-base text-white/70">
                Start posting jobs for only $10.
              </p>
              <Button className="mt-6 rounded-lg border border-white/20 bg-white px-6 py-5 text-sm font-semibold text-cta-bg hover:bg-white/90">
                Sign Up For Free
              </Button>
            </div>

            <div className="hidden lg:flex lg:justify-end">
              <div className="grid grid-cols-3 gap-3">
                {/* Dashboard mockup cards */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold text-white">76</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-primary/60" />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold text-white">2,342</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-green-500/60" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-lg font-bold text-amber-400">24</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-amber-400/60" />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="mt-1 text-xs text-white/50">Applications</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-lg font-bold text-green-400">158</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-green-400/60" />
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-2xl font-bold text-white">67</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-primary/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorative element */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-primary/5" />
        </div>
      </div>
    </section>
  )
}
