import ReactMarkdown from 'react-markdown';

type Props = {
  children: string;
}

const ankerLink = ({ ...props }) => {
  return (
    <li
      className='pl-0 py-1.5 font-bold'
    >
      <a
        href={`#${props.children}`}
        className='text-inherit no-underline'
      >
        {props.children}
      </a>
    </li>
  );
};

export const Resume = ({children}: Props): JSX.Element => {
  return (
    <div
      className='px-4 pb-4'
    >
      <ul
        className='list-outside pl-4'
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
    </div>
  );
};