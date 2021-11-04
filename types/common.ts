import { Endpoints } from '@octokit/types';

export type ListUserReposResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export interface TMDBMovie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface TMDBTv {
  id: number;
  name: string;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  first_air_date: Date;
}

export type TMDBDataResponse = {
  date?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  total_pages: number;
  total_results: number;
  results: unknown;
};

export type TMDBDataMovieListResponse = TMDBDataResponse & {
  results: TMDBMovie[];
};

export type TMDBDataTvListResponse = TMDBDataResponse & { results: TMDBTv[] };
