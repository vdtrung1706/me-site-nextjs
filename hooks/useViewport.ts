import { useState, useEffect } from 'react';

type Viewport = {
  viewWidth: number;
  viewHeight: number;
};

export const useViewport = (): Viewport => {
  const [viewWidth, setViewWidth] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
    setViewHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setViewWidth(window.innerWidth);
      setViewHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { viewHeight, viewWidth };
};
