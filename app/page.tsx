import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">My Portfolio</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a data engineer, building automated systems to process data ta scale.
        </p>
        <p>
          Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
          Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Please check out my projects at 
          <a href="/projects/">Projects</a> post.
        </p>
      </div>
    </section>
  );
}
