import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from 'next-themes';
import * as React from 'react';
import MyTooltip from '../common/MyTooltip';

const ToggleThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const title = theme === 'dark' ? 'Turn on the light' : 'Turn off the light';

  const handleToggle = (): React.MouseEventHandler<HTMLButtonElement> | void =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <MyTooltip title={title}>
      <button onClick={handleToggle} className='h-full btn-outlined'>
        {theme === 'dark' ? (
          <LightModeOutlinedIcon fontSize='small' />
        ) : (
          <DarkModeOutlinedIcon
            className='text-light-quaternary'
            fontSize='small'
          />
        )}
      </button>
    </MyTooltip>
  );
};

export default ToggleThemeMode;
