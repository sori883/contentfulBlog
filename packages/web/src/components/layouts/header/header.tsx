import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Transition,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import getConfig from 'next/config';
import Link from 'next/link';

import { ToggleTheme } from 'components/elements/toggleTheme';
import { pagesPath } from 'lib/$path';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    borderBottom: 0,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    textDecoration: 'none',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

type HeaderResponsiveProps = { link: string; label: string }[];

const links: HeaderResponsiveProps = [
  { link: pagesPath.$url().pathname, label: 'home'},
  { link: pagesPath.itsme.$url().pathname, label: 'profile'},
];

const { publicRuntimeConfig } = getConfig();

export function HeaderResponsive() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link
          href={pagesPath.$url()}
          className='no-underline text-inherit'
        >
          🦊{ publicRuntimeConfig.BLOG_TITLE || '' }
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
          <ToggleTheme />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />

        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <div
                className='min-w-full grid place-items-center my-5'
              >
                <ToggleTheme />
              </div>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}