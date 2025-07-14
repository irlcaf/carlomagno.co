import { getTranslations, type Locale } from 'app/lib/translations';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: 'PGP Encryption Guide',
    description: 'How to use PGP encryption for secure communications',
  };
}

export default async function PGPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">
        Secure Communications with PGP
      </h1>
      
      <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <Link href="/carlomagno-pgp.asc" className="text-blue-600 dark:text-blue-400 hover:underline">
              Download my PGP public key
            </Link>
          </li>
          <li>Import the key into your PGP software</li>
          <li>Compose your encrypted message</li>
          <li>Send to: <strong>contact@carlomagno.xyz</strong></li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mb-4">My PGP Keys</h2>
      
      <div className="bg-neutral-50 dark:bg-neutral-950 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
        <p className="mb-2"><strong>Primary Key Fingerprint:</strong></p>
        <p className="text-xs">1992 1B4B 7100 4DF0 BB2B  145B EE76 0915 9987 4267</p>
        
        <p className="mt-4 mb-2"><strong>Secondary Key Fingerprint:</strong></p>
        <p className="text-xs">9E59 7104 27B7 CBB3 3EA8  39F9 E8CC F0AA 54BE F63B</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Use PGP Encryption?</h2>
      
      <p className="mb-4">
        When discussing sensitive security matters, vulnerability disclosures, or confidential business information, 
        PGP encryption ensures that only the intended recipient can read the message. This is especially important for:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Security vulnerability reports</li>
        <li>Confidential project discussions</li>
        <li>Sensitive infrastructure details</li>
        <li>Private business communications</li>
      </ul>

    </section>
  );
}