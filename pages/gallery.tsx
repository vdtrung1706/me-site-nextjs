import * as React from 'react';
import useSWR from 'swr';
import Layout from '../components/layout/Layout';
import { tmdbMultiFetcher } from '../services/common';
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

  return (
    <div>
      {data[0].results.map((mv) => (
        <div key={mv.id}>{mv.name}</div>
      ))}
      {data[1].results.map((mv) => (
        <div key={mv.id}>{mv.name}</div>
      ))}
      {data[2].results.map((mv) => (
        <div key={mv.id}>{mv.title}</div>
      ))}
      {data[3].results.map((mv) => (
        <div key={mv.id}>{mv.title}</div>
      ))}
    </div>
  );
};

Gallery.getLayout = function (page: React.ReactNode) {
  return <Layout title='Trung Vu - Gallery'>{page}</Layout>;
};

export default Gallery;
