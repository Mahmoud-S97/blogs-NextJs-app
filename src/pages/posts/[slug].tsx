import PostContent from "@/components/posts/post-detail/post-content";
import { GetStaticProps } from "next";
import { ContextType, JSX } from "react";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";


const PostDetailPage = ({ post }: PostPreview): JSX.Element => {

    return (
        <PostContent post={post} />
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