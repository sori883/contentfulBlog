import { useState } from 'react';

import { Button, Popover, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';


import { Resume } from 'components/elements/resume';
import { TwitterLink } from 'components/elements/shareButtons';

type Props = {
  markdown: string
}

export const ShareAndResume = ({markdown}:Props):JSX.Element => {
  const [opened, setOpened] = useState(false);
  
  return ( 
    <div
      className='flex justify-between min-w-full'
    >
      <div
        className='flex not-a-color'
      >
        <TwitterLink />
      </div>
      <Popover width={200} position='bottom' withArrow shadow='md' opened={opened} onChange={setOpened}>
        <Popover.Target>
          <Button
            onClick={() => setOpened((o) => !o)}
            className='text-inherit'
          >
            <Text
              className='my-2 inline-flex items-center'
            >
                目次
              <IconChevronDown />
            </Text>
          </Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Resume>
            {markdown}
          </Resume>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};