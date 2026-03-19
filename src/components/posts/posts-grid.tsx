import { JSX } from "react";
import Link from "next/link";
import PostItem from "./posts-item";



const PostsGrid = ({ posts }: Posts): JSX.Element => {
    return (
        <ul className="grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {posts.map((post => <PostItem key={post.slug} post={post} />))}
        </ul>
    )
}

export default PostsGrid;