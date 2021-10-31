import Layout from '../components/Layout';

const Gallery = () => {
  return <div className='text-primary'>Gallery</div>;
};

Gallery.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Gallery'>{page}</Layout>;
};

export default Gallery;
