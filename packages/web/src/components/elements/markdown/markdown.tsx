import { Code, Divider } from '@mantine/core';
import { Prism } from '@mantine/prism';
import Image from 'next/image';
import Link from 'next/link';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import gfm from 'remark-gfm';

import { imageLoader, pathBuilder } from 'lib/ImageLoader';
import ContentStyle from 'styles/contentStyle';
import { isLanguage } from 'types/isLanguage';

type Props = {
  children: string;
}

const H2 = ({ ...props }) => {
  return (
    <div>
      <h2
        id={`${props.children}`}
        className='mb-2'
      >
        {props.children}
      </h2>
      <Divider
        className='mb-6'
      />
    </div>
  );
};

const IMG = ({ ...props }) => {
  const { src, alt } = props;
  return (
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
  );
};

const CodeBlock = ({ ...props }) => {
  const match = /language-(\w+)/.exec(props.className || '');
  return !props.inline && match && isLanguage(match[1]) ? (
    <Prism
      language={match[1]}
      withLineNumbers
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === 'light' ? duotoneLight : duotoneDark
      }
      {...props}
    >
      {String(props.children).replace(/\n$/, '')}
    </Prism>
  ) : (
    <Code
      block
      className={props.className}
      sx={(theme) => ({
        fontSize: theme.fontSizes.md
      })}
    >
      {props.children}
    </Code>
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
        remarkPlugins={[gfm,remarkBreaks]}
        rehypePlugins={[rehypeRaw]}
      >
        {children.replace(/\n/gi, '\n')}
      </ReactMarkdown>
    </ContentStyle>
  );
};