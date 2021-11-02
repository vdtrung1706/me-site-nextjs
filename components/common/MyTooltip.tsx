import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import React from 'react';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 220,
    margin: 0,
    padding: 0,
  },
}));

const MyTooltipTitle: React.FC = ({ children }) => {
  return (
    <div className='px-3 py-2 text-white rounded-md text-opacity-90 font-open-sans font-xs bg-black-400'>
      {children}
    </div>
  );
};

const MyTooltip = (props: TooltipProps) => {
  return (
    <HtmlTooltip
      {...props}
      title={<MyTooltipTitle>{props.title}</MyTooltipTitle>}
    >
      {props.children}
    </HtmlTooltip>
  );
};

export default MyTooltip;
