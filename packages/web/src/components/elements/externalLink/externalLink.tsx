import { FC, ReactNode } from 'react';

import { css } from '@emotion/react';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link as MuiLink } from '@mui/material';

type Props = {
  url: string
  icon?: boolean;
  children: ReactNode;
}

export const ExternalLink: FC<Props> = ({
  url,
  icon = true,
  children
}: Props) => {
  return (
    <MuiLink
      href={url} target='_blank' rel='noopener noreferrer'
      css={css`
      color: inherit;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    `}
    >
      { children }
      { icon && <LaunchIcon fontSize='inherit' />}
    </MuiLink>
  );
};