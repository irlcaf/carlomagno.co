import { BlogPosts } from 'app/components/posts';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <strong>Carlomagno Amaya</strong>
      </h1>
      <p className="mb-4">
        {`Hey!! I am a security researcher and software engineer with 5 years of experience in distributed systems, vulnerability research and intelligence. 
        I do vuln research for my day job and at night focused on building a software development company. 
          `}
      </p>
      <p className="mb-4">
        {`Also worked as a lead software and security engineer for `}
        <u>
          <Link href="https://uledger.io">Uledger</Link>
        </u>
        {` creating a propietary blockchain for their data integrity platform and also worked for government agencies in Honduras `}
        <u>
          <Link href="https://sit.gob.hn/">SIT</Link>
        </u>
        {`and in El Salvador developing software that was adopted for nationwide use. Check my  `}
        <u>
          <Link href="https://github.com/irlcaf">Github</Link>
        </u>
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
