const companies = [
  { name: "Vodafone", text: "vodafone" },
  { name: "Intel", text: "intel" },
  { name: "Tesla", text: "TESLA" },
  { name: "AMD", text: "AMD" },
  { name: "Talkit", text: "Talkit" },
]

export function Companies() {
  return (
    <section className="border-t border-border bg-background py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm text-muted-foreground">Companies we helped grow</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-8">
          {companies.map((company) => (
            <span
              key={company.name}
              className="text-xl font-semibold tracking-wide text-muted-foreground/60 md:text-2xl "
            >
              {company.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
