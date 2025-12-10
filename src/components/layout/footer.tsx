import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <span className="font-headline text-base font-bold tracking-tighter text-white">HustlersPoint</span>
            </Link>
            <p className="text-xs text-slate-400">
              By the people, for the people. Built WITH the community.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-base font-bold text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/stories" className="hover:text-white hover:underline">Stories</Link></li>
              <li><Link href="/services" className="hover:text-white hover:underline">Services</Link></li>
              <li><Link href="/submit" className="hover:text-white hover:underline">Submit</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-base font-bold text-white">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white hover:underline">About</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Contact</Link></li>
              <li><Link href="/submit" className="hover:text-white hover:underline">Write For Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
       <div className="bg-slate-950/50">
        <div className="container px-4 md:px-6 py-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
            <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center mb-2 sm:mb-0">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
            <p className="text-slate-400 text-center sm:text-right">
              © {new Date().getFullYear()} HustlersPoint.
            </p>
        </div>
      </div>
    </footer>
  )
}
