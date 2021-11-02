import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  return (
    <ul className={className}>
      <li>
        <a
          href='https://www.facebook.com/trunpyonvu/'
          target={'_blank'}
          rel='noreferrer'
          className='flex items-center p-1 cursor-pointer list-link'
        >
          <FacebookIcon />
        </a>
      </li>

      <li>
        <a
          href='https://github.com/vdtrung1706'
          target={'_blank'}
          rel='noreferrer'
          className='flex items-center p-1 cursor-pointer list-link'
        >
          <GitHubIcon />
        </a>
      </li>

      <li>
        <a
          href='https://www.instagram.com/trunpyon/'
          target={'_blank'}
          rel='noreferrer'
          className='flex items-center p-1 cursor-pointer list-link'
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default React.memo(SocialLinks);
