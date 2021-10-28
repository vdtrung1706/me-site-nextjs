import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  return (
    <div className='text-primary bg-base'>
      <Head>
        <title>{"Trung Vu's site"}</title>
        <link rel='icon' href='./favicon.ico' />
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
