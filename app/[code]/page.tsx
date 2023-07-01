import { Metadata } from "next"
import Image from "next/image"

export async function generateMetadata(
  { params }: { params: { code: string } }
): Promise<Metadata> {
  // read route params
  const code = params.code
 
  // fetch data
  return {
    title: `Capybara Codes - ${code}`,
    openGraph: {
      images:       {
	url: `/${code}.jpg`,
	width: 1600,
	height: 1400,
	alt: `Capybara Codes - ${code}`,
      }

    }
  }
}

export default function CodePage({ params }: { params: { code: string } }) {
  return <div className="w-screen h-screen flex flex-col justify-center items-center">
    <Image src={`/${params.code}.jpg`} alt="Status code {code} image" width={800} height={700}/>
    </div>
}
