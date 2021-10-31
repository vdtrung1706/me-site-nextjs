import * as React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <div className='text-red-500'>Welcome to Trung Vu</div>;
};

Home.getLayout = function (page: React.ReactElement) {
  return <Layout title='Trung Vu - Home'>{page}</Layout>;
};

export default Home;
