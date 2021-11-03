import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import * as React from 'react';
import MyTooltip from '../common/MyTooltip';

type ToggleMenu = {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleMenu = (props: ToggleMenu) => {
  const title = props.expanded ? 'Close menu' : 'Open menu';

  return (
    <MyTooltip title={title}>
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
    </MyTooltip>
  );
};

export default ToggleMenu;
