import * as React from 'react';
import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import { ListUserReposResponse } from '../types/common';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { updatedAtConverter } from '../utils/helper';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

interface ProjectsProps {
  repos: ListUserReposResponse[];
}

const Projects: React.FC<ProjectsProps> & {
  getLayout: (page: React.ReactNode) => JSX.Element;
} = ({ repos }) => {
  return (
    <>
      <div className='relative flex flex-col md:grid gap-10 md:gap-4 min-h-[100vh-64px] md:grid-cols-5 px-[2%] py-10'>
        <section className='hidden h-full md:block'>
          <h1 className='fixed ml-16 text-5xl font-semibold font-jost text-vertical-rl'>
            PROJECTS
          </h1>
        </section>

        <section className='relative flex flex-col md:col-span-4'>
          <h2 className='pb-1 text-3xl font-semibold font-jost'>GITHUB</h2>
          {!repos && (
            <p className='text-sm leading-tight text-light-txt-sec'>Error!</p>
          )}

          {repos.length === 0 && (
            <p className='text-sm leading-tight text-light-txt-sec'>Empty!</p>
          )}

          {repos.map((repo) => (
            <div
              key={repo.node_id}
              className='p-2 mx-2 border-b border-light-txt-sec border-opacity-30 hover-outlined'
            >
              <div className='flex items-baseline gap-2'>
                <a
                  href={repo.html_url}
                  target={'_black'}
                  className='text-xl font-semibold cursor-pointer max-w-max md:hover:underline'
                >
                  {repo.name}
                </a>
                {!repo.private && (
                  <span className='px-2 py-px my-auto text-xs border rounded-xl border-light-txt-sec border-opacity-30'>
                    Public
                  </span>
                )}
              </div>

              <p className='text-sm leading-tight text-light-txt-sec'>
                {repo.description}
              </p>

              <p className='flex items-center gap-4 pt-2 text-xs leading-tight select-none text-light-txt-sec'>
                {repo.language && (
                  <span>
                    <CircleRoundedIcon
                      className='font-base'
                      fontSize='inherit'
                    />
                    <span className='ml-1'>{repo.language}</span>
                  </span>
                )}

                <span>
                  <StarBorderRoundedIcon fontSize='small' />
                  <span className='align-middle'>{repo.stargazers_count}</span>
                </span>

                <span>Updated {updatedAtConverter(repo.updated_at)}</span>
              </p>
            </div>
          ))}

          <div className='absolute w-full h-20 border-b text-light-txt-sec border-light-txt-sec border-opacity-60 -bottom-4 bg-gradient-to-t from-dark-txt-sec'>
            <span className='absolute p-1 transform -translate-x-1/2 border rounded-full border-light-txt-sec bottom-[-18px] left-1/2'>
              <KeyboardArrowDownRoundedIcon />
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

Projects.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Projects'>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const reposRes = await fetch(
    'https://api.github.com/users/vdtrung1706/repos'
  );
  const repos: ListUserReposResponse[] = await reposRes.json();

  return {
    props: {
      repos: repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      }),
    },
  };
};

export default Projects;
