import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from 'next-themes';
import * as React from 'react';

const ToggleThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const title = theme === 'dark' ? 'Turn on the light' : 'Turn off the light';

  const handleToggle = (): React.MouseEventHandler<HTMLButtonElement> | void =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Tooltip title={title} arrow>
      <button onClick={handleToggle} className='btn-system'>
        {theme === 'dark' ? (
          <LightModeOutlinedIcon className='svg-single' />
        ) : (
          <DarkModeOutlinedIcon className='svg-single text-lgt-blue' />
        )}
      </button>
    </Tooltip>
  );
};

export default ToggleThemeMode;
