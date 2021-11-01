import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

type ToggleMenu = {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleMenu = (props: ToggleMenu) => {
  const title = props.expanded ? 'Close menu' : 'Open menu';

  return (
    <Tooltip title={title} arrow>
      <button
        onClick={() => props.setExpanded((pre) => !pre)}
        className='btn-outlined'
      >
        {props.expanded ? (
          <CloseIcon fontSize='small' />
        ) : (
          <MenuRoundedIcon fontSize='small' />
        )}
      </button>
    </Tooltip>
  );
};

export default ToggleMenu;
