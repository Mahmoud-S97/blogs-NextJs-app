import React, { Fragment, JSX } from 'react';
import Head from 'next/head';
import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';
import { getFeaturedPosts } from '../../lib/posts-util';


export default function Home(props: any): JSX.Element {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Mahmoud's Blog</title>
        <meta name='description' content='I post about programming, web, and mobile development.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}