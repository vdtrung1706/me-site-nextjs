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
    borderRadius: '100%',
  },
}));

const MyTooltipTitle: React.FC = ({ children }) => {
  return (
    <div className='px-3 py-[6px] font-sans text-white rounded-lg font-xs bg-light-secondary'>
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
