import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import useSWR from 'swr';
import BigMovieCard from '../components/common/BigMovieCard';
import GalleryCard from '../components/common/GalleryCard';
import SmallMovieCard from '../components/common/SmallMovieCard';
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
      </h2>

      <hr className='hr' />

      <section className='relative flex flex-col min-h-screen gap-4 py-2 md:grid md:grid-cols-2'>
        <ul className='relative w-full'>
          <GalleryCard data={popTvs} title={'Popular TVs'} />
          <GalleryCard
            data={topRatedTvs}
            title={'Top Rated Shows'}
            maxLength={6}
          />
        </ul>

        <ul className='relative w-full'>
          <GalleryCard
            data={upcommingMovie}
            title={'Up Comming Movies'}
            maxLength={2}
          />
          <GalleryCard data={nowPlaying} title={'Now Playing'} maxLength={5} />
        </ul>
      </section>
    </div>
  );
};

Gallery.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Gallery'>{page}</Layout>;
};

export default Gallery;
