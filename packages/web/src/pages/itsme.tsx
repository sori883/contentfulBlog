import { Divider, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ContainerBox } from 'components/layouts/containerBox';
import { ContentBox } from 'components/layouts/contentBox';
import { SiteHead } from 'components/nonVisual/siteHead';


const ItsMe: NextPage = () => (
  <div>
    <SiteHead
      title='profile'
      description='about me'
    />
    <ContainerBox containerSize='lg'>
      <ContentBox>
        <div className='flex'>
          <Image
            src='/500.webp'
            width='60'
            height='60'
            alt='icon'
            className='rounded-full mr-6'
          />
          <div>
            <Text
              className='font-bold'
            >
              Sorinaji
            </Text>
            <Text>
              <Link href='https://twitter.com/sorinaji' target='_blank'>
              @sorinaji
              </Link>
            </Text>
          </div>
        </div>
        <Divider
          className='my-6'
          variant='dashed'
        />
        <h1>
            Account
        </h1>
        <Text>
          <Link href='https://twitter.com/sorinaji' target='_blank'>
            Twitter
          </Link>
        </Text>
        <Text>
          <Link href='https://github.com/sori883' target='_blank'>
            GitHub
          </Link>
        </Text>
        <Divider
          className='my-6'
          variant='dashed'
        />
        <h1>
            About
        </h1>
        <Text>
          N番煎じの技術ブログで素振りするのがいいと聞いたので、ブログを立ち上げてみました。<br />
          特に何かって経歴がないので、そのうち書ける様なもの作ります。。。
        </Text>
        <Divider
          className='my-6'
          variant='dashed'
        />
        <h1>
            Job
        </h1>
        <Text>
          Backend Engineer
        </Text>
        <Divider
          className='my-6'
          variant='dashed'
        />
        <h1>
            illustration
        </h1>
        <Text variant='body1' component={'p'}>
          <Link  href='https://coconala.com/users/2964176' target='_blank'>熊田様(ココナラ)</Link>
        </Text>
      </ContentBox>
    </ContainerBox>
  </div>
);


export default ItsMe;