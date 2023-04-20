import { Tabs } from '@mantine/core';

import posts from '.contents/posts.json';
import { ArticleList, Props as ArticleListProps } from 'components/domains/articleTopList';
import { ZennList } from 'components/domains/zennList';
import { Pagination } from 'components/elements/pagination';

type Props = ArticleListProps & {
  handleOnChange: (value: number)=>void;
}

export const TopTab = ({ fallbackArticle, handleOnChange }: Props):JSX.Element => {
  
  return (
    <Tabs defaultValue='main'>
      <Tabs.List>
        <Tabs.Tab 
          value='main'
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.md,
          })}
        >
          Blog
        </Tabs.Tab>
        <Tabs.Tab 
          value='Zenn'
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.md,
          })}
        >
          Zenn
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        className='pt-6'
        value='main'
      >
        <ArticleList
          fallbackArticle={fallbackArticle}
        />
        <div className='flex justify-center'>
          <Pagination
            total={Math.ceil(Number(fallbackArticle?.total) / 20)}
            defaultPage={1}
            onChange={handleOnChange}
          />
        </div>
      </Tabs.Panel>

      <Tabs.Panel
        className='pt-6'
        value='Zenn'
      >
        <ZennList
          posts={posts}
        />
      </Tabs.Panel>
    </Tabs>
  );
};