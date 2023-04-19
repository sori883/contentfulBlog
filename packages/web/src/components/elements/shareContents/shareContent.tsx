import { TwitterLink } from 'components/elements/shareButtons';


export const ShareContents = (): JSX.Element => {

  return (
    <div
      className='py-6 flex w-full justify-center'
    >
      <TwitterLink />
    </div>
  );
};