import { GetStaticProps } from "next";
import Head from "next/head";
import PostContent from "@/components/posts/post-detail/post-content";
import { ContextType, Fragment, JSX } from "react";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";



const PostDetailPage = ({ post }: PostPreview): JSX.Element => {

    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </Fragment>
    )
}

export const getStaticProps = (context: GetStaticProps) => {

    const { params }: any = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = () => {

    const postsFiles = getPostsFiles();

    const slugs = postsFiles.map(fileName => fileName.replace(/\.md$/, ''));

    const preparedPaths = slugs.map(slug => ({ params: { slug: slug } }))

    return {
        paths: preparedPaths,
        fallback: false
    }
}

export default PostDetailPage;