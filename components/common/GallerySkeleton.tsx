import * as React from 'react';

const GallerySkeleton = () => {
  return (
    <ul className='w-full py-10 md:flex-row flex flex-col gap-4 px-[2%] md:px-[5%] min-h-screen'>
      <li className='w-full h-full'>
        <div className='w-20 h-5 md:h-6 md:w-32 skeleton-box dark:skeleton-box-dark'></div>
        <div className='w-full h-60 md:h-96 skeleton-box dark:skeleton-box-dark'></div>
      </li>

      <li className='w-full h-full'>
        <div className='w-20 h-5 md:h-6 md:w-32 skeleton-box dark:skeleton-box-dark'></div>
        <div className='w-full h-60 md:h-96 skeleton-box dark:skeleton-box-dark'></div>
      </li>
    </ul>
  );
};

export default GallerySkeleton;
