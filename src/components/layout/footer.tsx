import Link from "next/link"
import { Sparkle } from "lucide-react"

const categories = [
    { name: "Hustler Stories", href: "/stories"},
    { name: "Tech & AI", href: "/blog"},
    { name: "Business & Industry", href: "/blog"},
    { name: "SaaS & Tools", href: "/blog"},
    { name: "Productivity", href: "/blog"},
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
              <span className="font-headline text-lg font-bold tracking-tight">HustlersPoint</span>
            </Link>
            <p className="text-sm text-muted-foreground">Real Stories, Real Insights.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/stories" className="text-muted-foreground hover:text-foreground">Stories</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/polls" className="text-muted-foreground hover:text-foreground">Polls</Link></li>
              <li><Link href="/submit" className="text-muted-foreground hover:text-foreground">Submit</Link></li>
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
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter / X</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HustlersPoint. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
