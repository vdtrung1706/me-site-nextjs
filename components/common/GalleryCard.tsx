import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import {
  TMDBDataMovieListResponse,
  TMDBDataTvListResponse,
} from '../../types/common';
import BigMovieCard from './BigMovieCard';
import SmallMovieCard from './SmallMovieCard';

type GalleryCardProps = {
  data: TMDBDataTvListResponse | TMDBDataMovieListResponse;
  title: string;
  maxLength?: number;
};

const GalleryCard: React.FC<GalleryCardProps> = ({
  data,
  title,
  maxLength = 4,
}) => {
  return (
    <li className='p-2 mb-5'>
      <h3 className='flex items-baseline justify-between w-full mb-3'>
        <span className='text-3xl text-light-quaternary'>{title}</span>
        <span className='flex items-center leading-none cursor-pointer whitespace-nowrap text-light-secondary hover:underline'>
          <span>See All</span>
          <MoreVertIcon fontSize='small' />
        </span>
      </h3>
      {data.results.slice(0, maxLength).map((tv, idx) => (
        <div
          key={idx}
          className='border-b select-none border-opacity-15 border-light-tertiary dark:border-opacity-15 dark:border-dark-quinary'
        >
          <SmallMovieCard item={tv} />
          {idx === 0 && <BigMovieCard item={tv} />}
        </div>
      ))}
    </li>
  );
};

export default GalleryCard;
