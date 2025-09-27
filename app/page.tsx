import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      <h1 className="mb-8 text-2xl font-medium">My Portfolio</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a data engineer, building automated systems to process data at scale.
        </p>
        <p>
          Please check out my 
          <a href="/projects/">Projects.</a>
        </p>
      </div>
    </section>
  );
}
