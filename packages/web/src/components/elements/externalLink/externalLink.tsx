import { FC, ReactNode } from 'react';

type Props = {
  url: string
  children: ReactNode;
}

export const ExternalLink: FC<Props> = ({
  url,
  children,
  ...props
}: Props) => {
  return (
    <a
      href={url} target='_blank' rel='noopener noreferrer'
      className='text-inherit no-underline inline-flex items-center'
      {...props}
    >
      { children }
    </a>
  );
};