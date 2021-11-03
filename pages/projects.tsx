import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import classNames from 'classnames';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import Layout from '../components/layout/Layout';
import { ListUserReposResponse } from '../types/common';
import { updatedAtConverter } from '../utils/helper';

interface ProjectsProps {
  repos: ListUserReposResponse[];
}

const Projects: React.FC<ProjectsProps> & {
  getLayout: (page: React.ReactNode) => JSX.Element;
} = ({ repos }) => {
  const [moreRepos, setMoreRepos] = React.useState(false);

  return (
    <>
      <div className='relative flex flex-col md:grid gap-10 md:gap-4 min-h-[100vh-64px] md:grid-cols-5 px-[2%] py-10'>
        <section className='hidden h-full md:block'>
          <h1 className='fixed mt-1 ml-16 text-5xl font-semibold font-jost text-vertical-rl'>
            PROJECTS
          </h1>
        </section>

        <section className='relative z-20 flex flex-col md:col-span-4'>
          <h2 className='px-2 text-3xl font-semibold font-jost'>GITHUB</h2>

          {!repos && <p className='text-sm text-light-secondary'>Error!</p>}
          {repos.length === 0 && (
            <p className='text-sm text-light-secondary'>Empty!</p>
          )}

          <div
            className={classNames('relative overflow-hidden pb-10', {
              'max-h-[560px]': !moreRepos,
            })}
          >
            {repos.map((repo) => (
              <div
                key={repo.node_id}
                className='p-2 mx-2 border-b text-light-secondary dark:text-dark-secondary opacity-line hover-outlined active:bg-opacity-10'
              >
                <div className='flex items-baseline gap-2'>
                  <a
                    href={repo.html_url}
                    target={'_black'}
                    className='text-xl font-semibold cursor-pointer text-light-quaternary dark:text-dark-quaternary max-w-max md:hover:underline'
                  >
                    {repo.name}
                  </a>
                  {!repo.private && (
                    <span className='px-2 py-px my-auto text-xs border rounded-xl opacity-line'>
                      Public
                    </span>
                  )}
                </div>

                <p className='text-sm'>{repo.description}</p>

                <p className='flex items-center gap-4 py-2 text-xs'>
                  {repo.language && (
                    <span className='flex items-center whitespace-nowrap'>
                      <CircleRoundedIcon
                        className='font-sm'
                        fontSize='inherit'
                      />
                      <span className='ml-1'>{repo.language}</span>
                    </span>
                  )}

                  <span>
                    <StarBorderRoundedIcon fontSize='small' />
                    <span className='align-middle'>
                      {repo.stargazers_count}
                    </span>
                  </span>

                  <span>Updated {updatedAtConverter(repo.updated_at)}</span>
                </p>
              </div>
            ))}
          </div>

          <div className='absolute bottom-0 z-0 w-full border-b-2 border-light-base dark:border-dark-base'></div>
          <div
            className={classNames(
              'absolute bottom-0 z-10 w-full h-10 border-b border-light-tertiary border-opacity-30 bg-gradient-to-t from-light-nav dark:border-dark-quinary dark:border-opacity-30 dark:from-dark-tertiary',
              {
                'h-0': moreRepos,
              }
            )}
          >
            <button
              onClick={() => setMoreRepos((pre) => !pre)}
              className='absolute p-1 transform -translate-x-1/2 border rounded-full border-light-tertiary dark:border-dark-quinary dark:border-opacity-15 border-opacity-15 hover-outlined bottom-[-18px] left-1/2'
            >
              {moreRepos ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

Projects.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Projects'>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
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
