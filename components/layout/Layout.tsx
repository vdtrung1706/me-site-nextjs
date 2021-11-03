import Head from 'next/head';
import * as React from 'react';
import Footer from './Footer';
import Nav from './Nav';

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'Trung Vu' }) => {
  return (
    <div className='text-light-txt-pri dark:text-dark-txt-pri'>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Nav />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
