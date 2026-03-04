import Image from "next/image";
const companies = [
  { name: "Vodafone", icon: "/images/vodafone-2017-logo.png" },
  { name: "Intel", icon: "/images/Intel.png" },
  { name: "Tesla", icon: "/images/TESLA.png" },
  { name: "AMD", icon: "/images/amd-logo-1.png" },
  { name: "Talkit", icon: "/images/talkit 1.png" },
];

export function Companies() {
  return (
    <section className="border-t border-border bg-background py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-md text-muted-foreground">
          Companies we helped grow
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-8">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.icon}
              alt="Pattern"
              width={100}
              height={100}
              className="text-xl font-semibold tracking-wide text-muted-foreground/60 md:text-2xl "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
