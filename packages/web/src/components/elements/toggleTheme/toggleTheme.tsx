import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export const ToggleTheme = (): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant='outline'
      color={dark ? 'orange' : 'blue'}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
    </ActionIcon>
  );
};