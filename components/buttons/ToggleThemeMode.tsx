import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { useViewport } from '../../hooks/useViewport';

const ToggleThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const { viewWidth } = useViewport();
  const title = theme === 'dark' ? 'Turn on the light' : 'Turn off the light';

  const handleToggle = (): React.MouseEventHandler<HTMLButtonElement> | void =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Tooltip title={title} arrow>
      <button onClick={handleToggle} className='h-full btn-outlined'>
        {theme === 'dark' ? (
          <LightModeOutlinedIcon fontSize='small' />
        ) : (
          <DarkModeOutlinedIcon className='text-light-blue' fontSize='small' />
        )}
      </button>
    </Tooltip>
  );
};

export default ToggleThemeMode;
