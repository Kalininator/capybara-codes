import Image from "next/image";
import { statuses } from "../lib/status";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Capybara status codes.</p>
      <a href="/200">capybara.codes/200</a>
      <p>Actual home page soon ™️</p>
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center content-evenly">
        {Object.values(statuses).map((status) => (
          <Link key={status.code} href={`/${status.code}`}>
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
  );
}
