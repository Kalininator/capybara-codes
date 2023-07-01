// import { statuses } from "@/lib/status"
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
// const status = statuses["400"];

// export const metadata: Metadata = {
//     title: `Capybara Codes - ${status.code}`,
//     openGraph: {
//       images:       {
// 	url: `/${status.code}.jpg`,
// 	width: 1600,
// 	height: 1400,
// 	alt: `${status.code} - ${status.message}`,
//       }
//
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${status.code} - ${status.message}`,
//       description: `${status.code} - ${status.message}`,
//       // siteId: '1467726470533754880',
//       // creator: '@nextjs',
//       // creatorId: '1467726470533754880',
//       images: [`/${status.code}.jpg`],
//     },
// }

export default function NotFound() {
  return (
    <>
      <head>
        <meta
          property="og:image"
          content={`https://${
            process.env.VERCEL_URL || "localhost:3000"
          }/404.jpg`}
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="1400" />
        <meta property="og:image:alt" content="404 - Not found" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Not found" />
        <meta name="twitter:description" content="404 - Not found" />
        <meta
          name="twitter:image"
          content={`https://${
            process.env.VERCEL_URL || "localhost:3000"
          }/404.jpg`}
        />
      </head>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          src="/404.jpg"
          alt="Status code {code} image"
          width={800}
          height={700}
        />
      </div>
    </>
  );
}
