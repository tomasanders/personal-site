import { Ide } from '@/components/Ide';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Sanders - Portfolio</title>
        <meta name="description" content="Personal Website for Tom Sanders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>

      <Ide />
    </>
  );
};
