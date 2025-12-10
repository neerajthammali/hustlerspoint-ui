import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | HustlersPoint",
    description: "Read the Privacy Policy for HustlersPoint.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p>This is a placeholder for your Privacy Policy. It's important to have a comprehensive policy that details how you collect, use, and protect your users' data. You should consult with a legal professional to draft a policy that is compliant with regulations like GDPR, CCPA, etc., especially if you collect personal information.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us. For example, we collect information when you subscribe to our newsletter, submit a story, or otherwise communicate with us. The types of information we may collect include your name, email address, and any other information you choose to provide.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We may use the information we collect to:</p>
            <ul>
                <li>Provide, maintain, and improve our services;</li>
                <li>Send you technical notices, updates, security alerts, and support messages;</li>
                <li>Respond to your comments, questions, and requests;</li>
                <li>Communicate with you about products, services, offers, and events offered by HustlersPoint and others;</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>We do not share or sell your personal information with third parties except in the following limited circumstances...</p>

            <h2>4. Your Choices</h2>
            <p>You may opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.</p>
            
            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: [Your Contact Email]</p>
        </div>
    </div>
  );
}
