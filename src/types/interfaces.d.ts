
interface Post {
    slug: string
    title: string
    image: string
    excerpt: string
    date: Date | string,
    content: string,
    isFeatured: boolean
}

interface Posts {
    posts: Post[]
}

interface PostPreview {
    post: Pick<Post, 'title' | 'image' | 'excerpt' | 'date' | 'slug' | 'content' | 'isFeatured'>
}

type StatusType = 'pending' | 'success' | 'error' | null;
interface ResponseUIAlert {
    title: string;
    body: string;
    status: StatusType
}