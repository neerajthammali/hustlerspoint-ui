"use client"

import Link from "next/link"
import {
  Feather,
  Menu,
  MessageCircle,
  Users,
  Home,
  BookOpen,
  Vote,
  Briefcase,
  Send
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/stories", label: "Stories", icon: Feather },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/polls", label: "Polls", icon: Vote },
  { href: "/submit", label: "Submit", icon: Send },
]

export function Header() {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link
          href="/"
          className="mr-6 flex items-center gap-2"
          prefetch={false}
        >
          <span className="font-headline text-lg font-bold tracking-tighter text-primary">HustlersPoint</span>
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
        <div className="flex flex-1 items-center justify-end gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                 <Link
                  href="/"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <link.icon className="h-5 w-5" />
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
