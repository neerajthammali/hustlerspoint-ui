import Link from "next/link"
import { Sparkle } from "lucide-react"

const categories = [
    { name: "Brands & Inspiration", href: "#"},
    { name: "Tech & AI", href: "#"},
    { name: "Business & Industry", href: "#"},
    { name: "Brands & Startups", href: "#"},
    { name: "Fintech & Startups", href: "#"},
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
             <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <Sparkle className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-tight">Hustler Point</span>
            </Link>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Articles</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/submit" className="text-muted-foreground hover:text-foreground">Share Idea</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
                {categories.map(cat => (
                     <li key={cat.name}><Link href={cat.href} className="text-muted-foreground hover:text-foreground">{cat.name}</Link></li>
                ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            {/* Social links can be added here */}
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hustler Point. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
