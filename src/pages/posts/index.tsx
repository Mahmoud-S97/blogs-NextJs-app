import { JSX } from "react";
import AllPosts from "@/components/posts/all-posts";

import { DUMMY_POSTS } from '../index';


const AllPostsPage = (): JSX.Element => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage;