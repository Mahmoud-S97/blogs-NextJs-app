import { JSX } from "react";
import PostsGrid from "./posts-grid";


const AllPosts = ({ posts }: Posts): JSX.Element => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-40 text-center">
            <h1 className="text-5xl my-15">All Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default AllPosts;