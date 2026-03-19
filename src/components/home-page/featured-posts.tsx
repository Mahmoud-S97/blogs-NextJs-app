import { JSX } from "react";
import PostsGrid from "../posts/posts-grid";


const FeaturedPosts = ({ posts }: Posts): JSX.Element => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-40 text-center">
            <h1 className="my-15 text-5xl">Featured Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts;