import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

import { imageLoader, pathBuilder } from 'lib/ImageLoader';
import ContentStyle from 'styles/contentStyle';

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
      <Link href={pathBuilder(src)}>
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

export const View = ({children}: Props): JSX.Element => {
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
};
