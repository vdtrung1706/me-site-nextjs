import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className='text-light-txt-pri dark:text-dark-txt-pri'>
      <Head>
        <title>{"Trung Vu's site"}</title>
        <link rel='icon' href='./favicon.svg' />
      </Head>

      <main>
        <Nav />
        <div className='text-red-500'>Welcome to Trung Vu</div>
      </main>

      <footer>
        <div>This is footer</div>
      </footer>
    </div>
  );
};

export default Home;
