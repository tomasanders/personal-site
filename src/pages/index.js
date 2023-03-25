import { ContentWrapper } from '@/components/ContentWrapper';
import { TitleBar } from '@/components/TitleBar';
import { Box } from '@chakra-ui/react';
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
      <main>
        <Box display='flex' flexDir='column' h='full' bgColor='blue.200'>
          <TitleBar />
          <ContentWrapper />
        </Box>
      </main>
    </>
  );
};
