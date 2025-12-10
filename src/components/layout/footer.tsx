import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const freeTools = [
    { name: "Robots.txt Generator", href: "#" },
    { name: "HTML Table Generator", href: "#" },
    { name: "Direct Link Generator", href: "#" },
    { name: "FAQ Schema Generator", href: "#" },
    { name: "HTML Parse Tool", href: "#" },
    { name: "CSS Minify Tool", href: "#" },
  ]

  const popularPosts = [
    { name: "The Rise of CivilTech", href: "/blog/res1" },
    { name: "Top 5 SaaS Tools", href: "/blog/res2" },
    { name: "From 0 to 10k MRR", href: "/stories/story1" },
    { name: "The Deep Work Framework", href: "/blog/res3" },
    { name: "Landing High-Ticket Clients", href: "/stories/story2" },
  ]
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold text-white">About us</h4>
            <p className="text-sm">
              HustlersPoint is the information hub for founders, builders, and creators. We share real-world business insights, case studies, and practical advice to help you build and grow.
            </p>
            <Button asChild variant="secondary" size="sm">
                <Link href="/about">More About Us <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold text-white">Free Tools</h4>
            <ul className="space-y-2 text-sm">
              {freeTools.map(tool => (
                 <li key={tool.name}><Link href={tool.href} className="hover:text-white hover:underline">{tool.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold text-white">Popular Posts</h4>
            <ul className="space-y-2 text-sm">
              {popularPosts.map(post => (
                  <li key={post.name}><Link href={post.href} className="hover:text-white hover:underline">{post.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-950/50">
        <div className="container px-4 md:px-6 py-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
            <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center mb-2 sm:mb-0">
                <Link href="#" className="hover:text-white">Sitemap</Link>
                <Link href="/about" className="hover:text-white">About</Link>
                <Link href="/contact" className="hover:text-white">Contact</Link>
                <Link href="/newsletter" className="hover:text-white">Subscribe</Link>
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/submit" className="hover:text-white">Write For Us</Link>
            </div>
            <p className="text-slate-400 text-center sm:text-right">
              © {new Date().getFullYear()} HustlersPoint.
            </p>
        </div>
      </div>
    </footer>
  )
}
