
interface Post {
    slug: string
    title: string
    image: string
    excerpt: string
    date: Date | string
}

interface Posts {
    posts: Post[]
}

interface PostPreview {
    post: Pick<Post, 'title' | 'image' | 'excerpt' | 'date' | 'slug'>
}