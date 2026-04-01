import { Fragment, JSX } from "react";
import Head from "next/head";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "../../../lib/posts-util";

const AllPostsPage = (props: any): JSX.Element => {

    const { posts } = props;
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='A list of all programming-tutorials and posts!' />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    )
}

export const getStaticProps = () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 60
    }
}

export default AllPostsPage;