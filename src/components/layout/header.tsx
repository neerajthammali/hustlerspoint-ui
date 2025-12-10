"use client"

import Link from "next/link"
import {
  Menu,
  Sparkle,
  Sun,
  Moon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import React from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Articles" },
  { href: "#", label: "About" },
  { href: "/submit", label: "Share Idea" },
  { href: "#", label: "Contact" },
]

export function Header() {
  // A real implementation would use a theme provider
  const [isDark, setIsDark] = React.useState(false); 
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link
          href="/"
          className="mr-6 flex items-center gap-2"
          prefetch={false}
        >
          <Sparkle className="h-6 w-6 text-primary" />
          <span className="font-bold tracking-tight text-lg">Hustler Point</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
