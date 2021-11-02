import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          className={aClassName}
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default React.memo(SocialLinks);
