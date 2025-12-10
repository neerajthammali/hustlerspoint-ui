import Link from "next/link"
import { Briefcase } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
             <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-semibold tracking-tighter">HUSTLERSPOINT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The premier community for entrepreneurs, innovators, and go-getters.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/feed" className="text-muted-foreground hover:text-foreground">Feed</Link></li>
              <li><Link href="/groups" className="text-muted-foreground hover:text-foreground">Groups</Link></li>
              <li><Link href="/members" className="text-muted-foreground hover:text-foreground">Members</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive content and updates.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HUSTLERSPOINT. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
