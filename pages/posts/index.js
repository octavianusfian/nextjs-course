import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with NextJS",
      date: "2025-01-06",
      excerpt:
        "NextJS is a the React Framework for production - it makes building fullstack react app.",
      image: "getting-started-nextjs.png",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with NextJS",
      date: "2025-01-06",
      excerpt:
        "NextJS is a the React Framework for production - it makes building fullstack react app.",
      image: "getting-started-nextjs.png",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting started with NextJS",
      date: "2025-01-06",
      excerpt:
        "NextJS is a the React Framework for production - it makes building fullstack react app.",
      image: "getting-started-nextjs.png",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting started with NextJS",
      date: "2025-01-06",
      excerpt:
        "NextJS is a the React Framework for production - it makes building fullstack react app.",
      image: "getting-started-nextjs.png",
    },
  ];
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming project especially in react!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
