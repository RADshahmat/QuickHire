import { Button } from "@/components/ui/button";
import Image from "next/image";
export function CtaBanner() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden bg-primary [clip-path:polygon(15%_0,100%_0,100%_85%,85%_100%,0_100%,0_15%)]">
          <div className="grid grid-cols-1 items-center lg:gap-8 lg:grid-cols-2">
            <div className="px-10 py-10 lg:px-16 lg:py-16">
              <h2 className="text-3xl font-semibold text-white font-title md:text-4xl text-balance">
                Start posting jobs today
              </h2>
              <p className="mt-4 text-base text-white/70">
                Start posting jobs for only $10.
              </p>
              <Button className="mt-6 rounded-lg border border-white/20 bg-white px-6 py-5 text-sm font-semibold text-cta-bg hover:bg-white/90">
                Sign Up For Free
              </Button>
            </div>

            <div className="lg:flex lg:justify-end lg:pt-16 lg:pr-16">
              <Image
                src="/images/3.1 Dashboard Company.png"
                alt="CTA Image"
                width={565}
                height={347}
                className="mx-auto lg:mx-0 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
