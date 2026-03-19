import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';


type PostProps = PostPreview;

const PostItem = ({ post }: PostProps): JSX.Element => {

    const { slug, title, image, excerpt, date } = post;


    const formatedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className='w-full sm:max-w-[300] bg-gray-200 dark:bg-gray-900 shadow-lg rounded-md'>
            <Link href={linkPath}>
                <div className='w-full h-[200] flex justify-center'>
                    <Image src={imagePath} alt={title} className='object-fit' width={300} height={200} layout='responsive' />
                </div>
                <div className='flex flex-col gap-2 p-5 mt-4'>
                    <h3 className='text-lg'>{title}</h3>
                    <time className='text-sm dark:text-gray-400 italic'>{formatedDate}</time>
                    <p className='text-sm'>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem;