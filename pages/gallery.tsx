import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import useSWR from 'swr';
import Layout from '../components/layout/Layout';
import { IMAGE_BASE, tmdbMultiFetcher } from '../services/common';
import {
  NOW_PLAYING_MOVIES_URL,
  POPULAR_TVS_URL,
  TOP_RATED_TVS_URL,
  UPCOMING_MOVIES_URL,
} from '../services/fetch-urls';
import {
  TMDBDataMovieListResponse,
  TMDBDataTvListResponse,
} from '../types/common';
import {
  createIdByWords,
  formatDate,
  formatVoteAverage,
} from '../utils/helper';

// BIG BIG BIG
// This page has't done yet!

type DataResponse = [
  TMDBDataTvListResponse,
  TMDBDataTvListResponse,
  TMDBDataMovieListResponse,
  TMDBDataMovieListResponse
];

const FETCH_URLS = [
  POPULAR_TVS_URL,
  TOP_RATED_TVS_URL,
  UPCOMING_MOVIES_URL,
  NOW_PLAYING_MOVIES_URL,
];

type GalleryProps = React.FC & {
  getLayout: (page: React.ReactNode) => JSX.Element;
};

const Gallery: GalleryProps = () => {
  const { data, error } = useSWR<DataResponse>(FETCH_URLS, tmdbMultiFetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  const [popTvs, topRatedTvs, upcommingMovie, nowPlaying] = data;

  function createHrefOfTMDB(id: number, name: string) {
    return `https://www.themoviedb.org/tv/${id}-${createIdByWords(name)}`;
  }

  return (
    <div className='py-10 px-[2%] md:px-[5%]'>
      <h2 className='flex flex-col mb-5 text-3xl font-semibold uppercase md:block font-jost'>
        What to watch?
        <span className='text-sm'>(This page has not done yet!)</span>
      </h2>

      <hr className='hr-border' />

      <section className='relative flex flex-col min-h-screen gap-4 py-2 md:grid md:grid-cols-2'>
        <ul className='relative w-full'>
          <li className='p-2'>
            <h3 className='flex items-baseline justify-between w-full mb-3'>
              <span className='text-3xl text-light-quaternary'>
                Popular Movies
              </span>
              <span className='flex items-center leading-none cursor-pointer text-light-secondary hover:underline'>
                <span>See All</span>
                <MoreVertIcon fontSize='small' />
              </span>
            </h3>
            {popTvs.results.slice(0, 4).map((tv, idx) => (
              <div
                key={idx}
                className='border-b select-none border-opacity-15 border-light-tertiary dark:border-opacity-15 dark:border-dark-quinary'
              >
                <div className='flex w-full gap-2 p-2 hover-outlined'>
                  <a
                    href={createHrefOfTMDB(tv.id, tv.name)}
                    className='relative bg-opacity-50 w-14 '
                  >
                    <img
                      src={`${IMAGE_BASE}/w342/${tv.poster_path}`}
                      alt='poster'
                    />
                  </a>

                  <div>
                    <h4 className='text-xl leading-none'>
                      {tv.name || tv.original_name}
                    </h4>

                    <p className='flex flex-wrap items-center gap-2 mt-1 text-sm text-light-secondary'>
                      <span>{formatVoteAverage(tv.vote_average)}</span>
                      <span className='w-1 h-1 bg-opacity-50 rounded-full bg-light-tertiary'></span>
                      <span>{formatDate(new Date(tv.first_air_date))}</span>
                    </p>
                  </div>
                </div>

                {idx === 0 && (
                  <div className='relative w-full cursor-pointer group'>
                    <a href={createHrefOfTMDB(tv.id, tv.name)}>
                      <img
                        src={`${IMAGE_BASE}/w1280/${tv.backdrop_path}`}
                        alt='backdrop'
                        className='w-full bg-cover opacity-90'
                      />
                    </a>
                    <div className='absolute top-0 z-10 w-full h-full bg-black group-hover:bg-opacity-15 bg-opacity-30'></div>
                    <button className='absolute z-0 px-4 py-1 font-bold transform -translate-x-1/2 -translate-y-1/2 rounded-2xl btn-secondary group-hover:bg-orange-hv top-1/2 left-1/2'>
                      Show Detail
                    </button>
                  </div>
                )}
              </div>
            ))}
          </li>

          <li className='p-2'>
            <h3 className='flex items-baseline justify-between w-full mb-3'>
              <span className='text-3xl text-light-quaternary'>
                Top Rated Shows
              </span>
              <span className='flex items-center leading-none cursor-pointer text-light-secondary hover:underline'>
                <span>See All</span>
                <MoreVertIcon fontSize='small' />
              </span>
            </h3>
            {topRatedTvs.results.slice(0, 4).map((tv, idx) => (
              <div
                key={idx}
                className='border-b select-none border-opacity-15 border-light-tertiary dark:border-opacity-15 dark:border-dark-quinary'
              >
                <div className='flex w-full gap-2 p-2 hover-outlined'>
                  <a
                    href={createHrefOfTMDB(tv.id, tv.name)}
                    className='relative bg-opacity-50 w-14 '
                  >
                    <img
                      src={`${IMAGE_BASE}/w342/${tv.poster_path}`}
                      alt='poster'
                    />
                  </a>

                  <div>
                    <h4 className='text-xl leading-none'>
                      {tv.name || tv.original_name}
                    </h4>

                    <p className='flex flex-wrap items-center gap-2 mt-1 text-sm text-light-secondary'>
                      <span>{formatVoteAverage(tv.vote_average)}</span>
                      <span className='w-1 h-1 bg-opacity-50 rounded-full bg-light-tertiary'></span>
                      <span>{formatDate(new Date(tv.first_air_date))}</span>
                    </p>
                  </div>
                </div>

                {idx === 0 && (
                  <div className='relative w-full cursor-pointer group'>
                    <a href={createHrefOfTMDB(tv.id, tv.name)}>
                      <img
                        src={`${IMAGE_BASE}/w1280/${tv.backdrop_path}`}
                        alt='backdrop'
                        className='w-full bg-cover opacity-90'
                      />
                    </a>
                    <div className='absolute top-0 z-10 w-full h-full bg-black group-hover:bg-opacity-15 bg-opacity-30'></div>
                    <button className='absolute z-0 px-4 py-1 font-bold transform -translate-x-1/2 -translate-y-1/2 rounded-2xl btn-secondary group-hover:bg-orange-hv top-1/2 left-1/2'>
                      Show Detail
                    </button>
                  </div>
                )}
              </div>
            ))}
          </li>
        </ul>

        <ul className='relative w-full'>
          <li className='p-2'>
            <h3 className='flex items-baseline justify-between w-full mb-3'>
              <span className='text-3xl text-light-quaternary dark:text-dark-quaternary'>
                Up Comming Movies
              </span>
              <span className='flex items-center leading-none cursor-pointer text-light-secondary dark:text-dark-secondary hover:underline'>
                <span>See All</span>
                <MoreVertIcon fontSize='small' />
              </span>
            </h3>

            {upcommingMovie.results.slice(0, 2).map((mv, idx) => (
              <div
                key={idx}
                className='border-b select-none border-opacity-15 border-light-tertiary dark:border-opacity-15 dark:border-dark-quinary'
              >
                <div className='flex w-full gap-2 p-2 hover-outlined'>
                  <a
                    href={createHrefOfTMDB(mv.id, mv.title)}
                    className='relative bg-opacity-50 w-14 '
                  >
                    <img
                      src={`${IMAGE_BASE}/w342/${mv.poster_path}`}
                      alt='poster'
                    />
                  </a>

                  <div>
                    <h4 className='text-xl leading-none'>
                      {mv.title || mv.original_title}
                    </h4>

                    <p className='flex flex-wrap items-center gap-2 mt-1 text-sm text-light-secondary dark:text-dark-secondary'>
                      <span>{formatVoteAverage(mv.vote_average)}</span>
                      <span className='w-1 h-1 bg-opacity-50 rounded-full bg-light-tertiary dark:bg-dark-quinary dark:bg-opacity-50'></span>
                      <span>{formatDate(new Date(mv.release_date))}</span>
                    </p>
                  </div>
                </div>

                {idx === 0 && (
                  <div className='relative w-full cursor-pointer group'>
                    <a href={createHrefOfTMDB(mv.id, mv.title)}>
                      <img
                        src={`${IMAGE_BASE}/w1280/${mv.backdrop_path}`}
                        alt='backdrop'
                        className='w-full bg-cover opacity-90'
                      />
                    </a>
                    <div className='absolute top-0 z-10 w-full h-full bg-black dark:bg-white dark:bg-opacity-15 group-hover:bg-opacity-15 bg-opacity-30'></div>
                    <button className='absolute z-0 px-4 py-1 font-bold transform -translate-x-1/2 -translate-y-1/2 rounded-2xl btn-secondary group-hover:bg-orange-hv top-1/2 left-1/2'>
                      Show Detail
                    </button>
                  </div>
                )}
              </div>
            ))}
          </li>

          <li className='p-2'>
            <h3 className='flex items-baseline justify-between w-full mb-3'>
              <span className='text-3xl text-light-quaternary'>
                Now Playing
              </span>
              <span className='flex items-center leading-none cursor-pointer text-light-secondary hover:underline'>
                <span>See All</span>
                <MoreVertIcon fontSize='small' />
              </span>
            </h3>
            {nowPlaying.results.slice(0, 2).map((mv, idx) => (
              <div
                key={idx}
                className='border-b select-none border-opacity-15 border-light-tertiary dark:border-opacity-15 dark:border-dark-quinary'
              >
                <div className='flex w-full gap-2 p-2 hover-outlined'>
                  <a
                    href={createHrefOfTMDB(mv.id, mv.title)}
                    className='relative bg-opacity-50 w-14 '
                  >
                    <img
                      src={`${IMAGE_BASE}/w342/${mv.poster_path}`}
                      alt='poster'
                    />
                  </a>

                  <div>
                    <h4 className='text-xl leading-none'>
                      {mv.title || mv.original_title}
                    </h4>

                    <p className='flex flex-wrap items-center gap-2 mt-1 text-sm text-light-secondary'>
                      <span>{formatVoteAverage(mv.vote_average)}</span>
                      <span className='w-1 h-1 bg-opacity-50 rounded-full bg-light-tertiary'></span>
                      <span>{formatDate(new Date(mv.release_date))}</span>
                    </p>
                  </div>
                </div>

                {idx === 0 && (
                  <div className='relative w-full cursor-pointer group'>
                    <a href={createHrefOfTMDB(mv.id, mv.title)}>
                      <img
                        src={`${IMAGE_BASE}/w1280/${mv.backdrop_path}`}
                        alt='backdrop'
                        className='w-full bg-cover opacity-90'
                      />
                    </a>
                    <div className='absolute top-0 z-10 w-full h-full bg-black group-hover:bg-opacity-15 bg-opacity-30'></div>
                    <button className='absolute z-0 px-4 py-1 font-bold transform -translate-x-1/2 -translate-y-1/2 rounded-2xl btn-secondary group-hover:bg-orange-hv top-1/2 left-1/2'>
                      Show Detail
                    </button>
                  </div>
                )}
              </div>
            ))}
          </li>
        </ul>
      </section>
    </div>
  );
};

Gallery.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Gallery'>{page}</Layout>;
};

export default Gallery;
