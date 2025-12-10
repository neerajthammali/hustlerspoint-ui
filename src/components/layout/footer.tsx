import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <span className="font-headline text-lg font-bold tracking-tighter text-white">HustlersPoint</span>
            </Link>
            <p className="text-sm">
              By the people, for the people. Built WITH the community.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white hover:underline">Blog</Link></li>
              <li><Link href="/stories" className="hover:text-white hover:underline">Hustler Stories</Link></li>
              <li><Link href="/services" className="hover:text-white hover:underline">Boost Services</Link></li>
              <li><Link href="/polls" className="hover:text-white hover:underline">Polls</Link></li>
              <li><Link href="/submit" className="hover:text-white hover:underline">Submit Your Idea</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold text-white">Stay Updated</h4>
            <p className="text-sm">
              Subscribe to our newsletter for weekly insights and polls.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
       <div className="bg-slate-950/50">
        <div className="container px-4 md:px-6 py-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
            <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center mb-2 sm:mb-0">
                <Link href="#" className="hover:text-white">About</Link>
                <Link href="#" className="hover:text-white">Contact</Link>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
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
