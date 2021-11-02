import Layout from '../components/layout/Layout';

const Projects = () => {
  return <div className='text-primary'>Projects</div>;
};

Projects.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Projects'>{page}</Layout>;
};

export default Projects;
