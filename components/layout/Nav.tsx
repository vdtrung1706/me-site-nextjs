import * as React from 'react';
import { useViewport } from '../../hooks/useViewport';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

const Nav = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { viewWidth } = useViewport();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className='relative z-50 bg-gradient-to-r from-light-gray dark:from-black dark:via-black dark:to-gray-900'>
        <div className='flex flex-col mx-[2%] md:mx-[4%] md:flex-row md:justify-between md:items-center'>
          <PrimaryNav expanded={expanded} setExpaned={setExpanded} />
          {expanded || viewWidth >= 768 ? <SecondaryNav /> : null}
        </div>
      </nav>

      <div className='relative z-20'>
        <svg
          className='absolute left-0 w-full h-6 pointer-events-none diagonal top-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 10'
          preserveAspectRatio='none'
        >
          <defs>
            <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#1056c9'></stop>
              <stop offset='100%' stopColor='#ec633a'></stop>
            </linearGradient>
          </defs>
          <polygon points='0,2 0,0 100,0 100,10' fill='url(#linear)'></polygon>
        </svg>
      </div>
    </>
  );
};

export default React.memo(Nav);
