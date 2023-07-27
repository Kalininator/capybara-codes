import CodeSnippet from "@/components/CodeSnippet";
import { statuses } from "@/lib/status";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="title" content="Capybara Codes" />
        <meta name="description" content="A capybara for every status code." />
      </Head>
      <main className="flex min-h-screen gap-6 flex-col items-center justify-center py-16 lg:px-24">
        <h1 className="text-4xl font-bold">Capybara Codes</h1>
        <p>A capybara for every HTTP status code</p>
        <CodeSnippet>https://capybara.codes/[code]</CodeSnippet>
        <CodeSnippet>https://capybara.codes/[code].jpg</CodeSnippet>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center content-evenly">
          {Object.values(statuses).map((status) => (
            <Link
              key={status.code}
              href={`/${status.code}`}
              className="w-2/5 md:w-1/4 xl:w-1/5"
            >
              <Image
                src={`/${status.code}.jpg`}
                alt={status.message}
                width={320}
                height={280}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
