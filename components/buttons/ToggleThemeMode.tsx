import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { ButtonCommonProps } from '../../types/common.types';

const ToggleThemeMode = ({ theme = 'DARK' }: ButtonCommonProps) => {
  const title = theme === 'DARK' ? 'Turn on the light' : 'Turn off the light';

  return (
    <Tooltip title={title} arrow>
      <button className='btn-system'>
        {theme === 'DARK' ? (
          <LightModeOutlinedIcon className='svg-single' />
        ) : (
          <DarkModeOutlinedIcon className='svg-single' color='primary' />
        )}
      </button>
    </Tooltip>
  );
};

export default ToggleThemeMode;
