import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { Link as Scroll } from 'react-scroll';

type Props = {
  children: string;
}

const ankerLink = ({ ...props }) => {
  return (
    <li>
      <Scroll
        css={css`
        &&& {
          cursor: pointer;
        }
    `}
        to={`${props.children}`} smooth={true} duration={600}>
        {props.children}
      </Scroll>
    </li>
  );
};

export const Resume = ({children}: Props): JSX.Element => {
  return (
    <>
      <ul>
        <ReactMarkdown
          allowedElements={['h2']}
          components={{
            h2: ankerLink,
          }}
        >
          {children}
        </ReactMarkdown>
      </ul>
    </>
  );
};