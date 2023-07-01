import { statuses } from "@/lib/status"
import { Metadata } from "next"
import Image from "next/image"

export async function generateMetadata(): Promise<Metadata> {
  const status = statuses["400"];
  return {
    title: `Capybara Codes - ${status.code}`,
    openGraph: {
      images:       {
	url: `/${status.code}.jpg`,
	width: 1600,
	height: 1400,
	alt: `${status.code} - ${status.message}`,
      }

    },
    twitter: {
      card: 'summary_large_image',
      title: `${status.code} - ${status.message}`,
      description: `${status.code} - ${status.message}`,
      // siteId: '1467726470533754880',
      // creator: '@nextjs',
      // creatorId: '1467726470533754880',
      images: [`/${status.code}.jpg`],
    },
  }
}

export default function CodePage() {
  return <div className="w-screen h-screen flex flex-col justify-center items-center">
    <Image src="/404.jpg" alt="Status code {code} image" width={800} height={700}/>
  </div>
}

