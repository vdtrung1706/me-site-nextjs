import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';

const SocialLinks = ({
  className = '',
  liClassName = '',
}: {
  className?: string;
  liClassName?: string;
}) => {
  const aClassName = `flex items-center p-1 cursor-pointer list-link ${liClassName}`;

  return (
    <ul className={className}>
      <li>
        <a
          href='https://www.facebook.com/trunpyonvu/'
          target={'_blank'}
          rel='noreferrer'
          aria-label='facebook'
          title='Facebook'
          className={aClassName}
        >
          <FacebookIcon />
        </a>
      </li>

      <li>
        <a
          href='https://github.com/vdtrung1706'
          target={'_blank'}
          rel='noreferrer'
          aria-label='github'
          title='Github'
          className={aClassName}
        >
          <GitHubIcon />
        </a>
      </li>

      <li>
        <a
          href='https://www.instagram.com/trunpyon/'
          target={'_blank'}
          rel='noreferrer'
          aria-label='instagram'
          title='Instagram'
          className={aClassName}
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default React.memo(SocialLinks);
