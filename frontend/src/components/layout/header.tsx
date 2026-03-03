"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 6V14H2V6L8 2Z" fill="white" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground font-[var(--font-heading)]">QuickHire</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Browse Companies
            </Link>
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Login
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5">
            Sign Up
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Browse Companies
            </Link>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Login
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground rounded-lg px-5">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
