import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import * as React from 'react';
import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextNProgress
        height={2}
        color='#58a6ff'
        options={{ showSpinner: false }}
      />
      <ThemeProvider attribute='class'>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
