import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  About: ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"],
  Resources: ["Help Docs", "Guide", "Updates", "Contact Us"],
}

const socialIcons = [
  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" },
  { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 6V14H2V6L8 2Z" fill="white" />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground font-[var(--font-heading)]">QuickHire</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold text-primary-foreground">{title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted hover:text-background transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground">Get job notifications</h4>
            <p className="mt-4 text-sm text-muted">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="h-10 text-sm bg-input placeholder:text-muted-foreground focus:ring-primary focus:ring-1 focus:ring-offset-0 focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0"
              />
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <Link
                key={icon.label}
                href="#"
                className="text-primary-foreground hover:text-primary-foreground transition-colors"
                aria-label={icon.label}
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
