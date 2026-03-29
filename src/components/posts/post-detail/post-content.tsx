import { JSX } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PostHeader from "./post-header";
import classes from './post-content.module.css';
import Image from 'next/image';


const PostContent = ({ post }: PostPreview): JSX.Element => {

    if (!post) return <h2 className='text-2xl text-center'>Loading...</h2>

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderes = {
        code(code: any) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        }
    }

    return (
        <article className={`w-[90%] md:w-1/2 h-1/2 mx-auto mt-20 p-4 md:p-10 flex flex-col items-center md:items-start justify-center bg-gray-400 ${classes.article}`}>
            <PostHeader title={post.title} image={imagePath} />
            <div className='w-full h-1 bg-purple-500 my-4' />
            <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;