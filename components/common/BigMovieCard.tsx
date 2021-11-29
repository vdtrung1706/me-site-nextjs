import * as React from 'react';
import { IMAGE_BASE } from '../../services/common';
import { TMDBMovie, TMDBTv } from '../../types/common';
import { createHrefOfTMDB } from '../../utils/helper';

type BigMovieCardProps = {
  item: any;
};

const BigMovieCard: React.FC<BigMovieCardProps> = ({ item }) => {
  return (
    <a
      href={createHrefOfTMDB(item.id, item.name ? item.name : item.title)}
      target='_blank'
      rel='noreferrer'
    >
      <div className='relative w-full cursor-pointer group'>
        <img
          src={`${IMAGE_BASE}/w1280/${item.backdrop_path}`}
          alt='backdrop'
          className='w-full bg-cover opacity-90'
        />
        <div className='absolute top-0 z-10 w-full h-full bg-black md:group-hover:bg-opacity-15 active:bg-opacity-15 bg-opacity-30'></div>
        <button className='absolute z-0 px-6 py-3 font-semibold transform -translate-x-1/2 -translate-y-1/2 rounded-3xl btn-secondary top-1/2 left-1/2'>
          Show Detail
        </button>
      </div>
    </a>
  );
};

export default React.memo(BigMovieCard);
