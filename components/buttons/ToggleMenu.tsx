import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { ButtonCommonProps } from '../../types/common.types';

type ToggleMenu = ButtonCommonProps & {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleMenu = (props: ToggleMenu) => {
  const title = props.expanded ? 'Close menu' : 'Open menu';

  return (
    <Tooltip title={title} arrow>
      <button
        onClick={() => props.setExpanded((pre) => !pre)}
        className='btn-system'
      >
        {props.expanded ? (
          <CloseIcon className='svg-single' />
        ) : (
          <MenuRoundedIcon className='svg-single' />
        )}
      </button>
    </Tooltip>
  );
};

export default ToggleMenu;
