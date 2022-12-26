import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';

type Props = {
  children: string;
}

const ankerLink = ({ ...props }) => {
  return (
    <li
      css={css`
      &&&{
        padding-left: 0x;
        font-size: 14px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 600;
      }
    `}
    >
      <a href={`#${props.children}`}>
        {props.children}
      </a>
    </li>
  );
};

export const Resume = ({children}: Props): JSX.Element => {
  return (
    <Box
      sx={{padding: 2}}
    >
      <ul
        css={css`
        &&&{
          list-style-position: outside;
          padding-left: 15px;
        }
        `}
      >
        <ReactMarkdown
          allowedElements={['h2']}
          components={{
            h2: ankerLink,
          }}
        >
          {children}
        </ReactMarkdown>
      </ul>
    </Box>
  );
};