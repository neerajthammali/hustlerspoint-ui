import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
             <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <span className="font-headline text-lg font-bold tracking-tighter text-primary">HustlersPoint</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              By the people, for the people. Built WITH the community.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/stories" className="text-muted-foreground hover:text-foreground">Hustler Stories</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Boost Services</Link></li>
              <li><Link href="/polls" className="text-muted-foreground hover:text-foreground">Polls</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/submit" className="text-muted-foreground hover:text-foreground">Submit Your Idea</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-foreground">Image Gallery</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-muted-foreground hover:text-foreground">Sitemap</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for weekly insights and polls.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HustlersPoint. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
