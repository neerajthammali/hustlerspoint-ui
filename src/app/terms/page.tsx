import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | HustlersPoint",
    description: "Read the Terms of Service for HustlersPoint.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p>This is a placeholder for your Terms of Service. It's a legal agreement between you (the service provider) and the user. You should consult with a legal professional to create a document that fits your specific needs.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the HustlersPoint website (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2>2. Content</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
            <p>By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of HustlersPoint and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

            <h2>4. Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by HustlersPoint. HustlersPoint has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

            <h2>5. Termination</h2>
            <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>

            <h2>7. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: [Your Contact Email]</p>
        </div>
    </div>
  );
}
