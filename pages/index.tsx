import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trung Vu</title>
        <meta name='description' content='This is something about Trung Vu' />
        <link rel='icon' href='./favicon.ico' />
      </Head>

      <main>
        <div className='text-red-500'>Welcome to Trung Vu</div>
      </main>

      <footer>
        <div>This is footer</div>
      </footer>
    </div>
  );
};

export default Home;
