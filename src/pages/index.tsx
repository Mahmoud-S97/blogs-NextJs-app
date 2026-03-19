import React, { Fragment, JSX } from 'react';
import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';


export const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2026-03-17'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs2.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2026-03-17'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs3.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2026-03-17'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs4.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2026-03-17'
  }
]

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}
