import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Link as Scroll } from 'react-scroll';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

import { imageLoader, pathBuilder } from 'lib/ImageLoader';
import ContentStyle from 'styles/cotentStyle';

type Props = {
  children: string;
}

const H2 = ({ ...props }) => {
  return (
    <h2 id={`${props.children}`}>{props.children}</h2>
  );
};

const IMG = ({ ...props }) => {
  const { src, alt } = props;
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center'}}
    >
      <Link href={pathBuilder(src)} target='_blank'>
        <Image
          loader={imageLoader}
          src={src}
          alt={alt}
          width={700}
          height={475}
          priority
          sizes='(max-width: 600px) 90vw, (max-width: 900px) 60vw,  (max-width: 1200px) 40vw, 25vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Link>
    </Box>
  );
};


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

const CodeBlock = ({ ...props }) => {
  const match = /language-(\w+)/.exec(props.className || '');
  return !props.inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={props.className} {...props}>
      {props.children}
    </code>
  );
};

export function View({children}: Props): JSX.Element {
  return (
    <ContentStyle>
      <ReactMarkdown
        components={{
          h2: H2,
          img: IMG,
          code: CodeBlock
        }}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {children}
      </ReactMarkdown>
    </ContentStyle>
  );
}

export function Resume({children}: Props): JSX.Element {
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
}