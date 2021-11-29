import * as React from 'react';
import { IMAGE_BASE } from '../../services/common';
import {
  createHrefOfTMDB,
  formatDate,
  formatVoteAverage,
} from '../../utils/helper';

type SmallMovieCardProps = {
  item: any;
};

const SmallMovieCard: React.FC<SmallMovieCardProps> = ({ item }) => {
  return (
    <a
      href={createHrefOfTMDB(item.id, item.name ? item.name : item.title)}
      target='_blank'
      rel='noreferrer'
    >
      <div className='flex w-full gap-2 p-2 cursor-pointer hover-outlined'>
        <div className='relative bg-opacity-50 w-14'>
          <img src={`${IMAGE_BASE}/w342/${item.poster_path}`} alt='poster' />
        </div>

        <div>
          <h4 className='text-xl leading-none'>
            {item.name ||
              item.original_name ||
              item.title ||
              item.original_title}
          </h4>

          <p className='flex flex-wrap items-center gap-2 mt-1 text-sm text-light-secondary dark:text-dark-secondary'>
            <span>{formatVoteAverage(item.vote_average)}</span>
            <span className='w-1 h-1 bg-opacity-50 rounded-full bg-light-tertiary dark:bg-dark-secondary'></span>
            <span>
              {formatDate(
                new Date(
                  item.first_air_date ? item.first_air_date : item.release_date
                )
              )}
            </span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default React.memo(SmallMovieCard);
