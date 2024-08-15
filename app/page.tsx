import { BlogPosts } from 'app/components/posts';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <strong>Carlomagno Amaya</strong>
      </h1>
      <p className="mb-4">
        {`Hey!! I am a security researcher and software engineer with several years of experience in distributed systems, vulnerability research and intelligence. 
        My background includes hands-on work in both cloud and bare-metal environments, focusing on software development, security architecture, data protection, and system reliability. 
          `}
      </p>
      <p className="mb-4">
        {`Open-source contributor and security enthusiast, I have also worked on web3 projects and conducted smart contract audits. Check my `}
        <Link href="https://github.com/irlcaf">Github</Link>
        {`!`}
      </p>
      <p className="mb-4">
        {`Download Public PGP key `}
        <Link href="/public/public_key.asc" download>
          <strong>[here]</strong>
        </Link>
        {`.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
