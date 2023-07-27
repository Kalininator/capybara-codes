import Image from "next/image";
import Head from "next/head";
import { Status, statuses } from "@/lib/status";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  status: Status;
}> = async (context) => {
  const code = context.params?.code;
  const status = statuses[code as string];
  if (!status) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { status } };
};

export default function Page({
  status,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const code = status.code;
  const statusString = `${code} - ${status.message}`;
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://${
            process.env.VERCEL_URL || "localhost:3000"
          }/${code}.jpg`}
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="1400" />
        <meta property="og:image:alt" content={statusString} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={statusString} />
        <meta name="twitter:description" content={statusString} />
        <meta
          name="twitter:image"
          content={`https://${
            process.env.VERCEL_URL || "localhost:3000"
          }/${code}.jpg`}
        />
      </Head>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          src={`/${code}.jpg`}
          alt={`Status code ${code} image`}
          width={800}
          height={700}
        />
      </div>
    </>
  );
}
