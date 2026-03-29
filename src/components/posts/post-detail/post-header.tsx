import Image from "next/image";
import { JSX } from "react";

type PostHeaderProps = {
    title: string,
    image: string
}

const PostHeader = ({ title, image }: PostHeaderProps): JSX.Element => {
    return (
        <header className="w-full flex flex-col md:flex-row items-center space-between gap-8 md:gap-0">
            <h2 className="w-full text-3xl sm:text-4xl md:text-5xl text-center md:text-start md:w-1/2 tracking-[1] leading-[1.2]">{title}</h2>
            <div className="w-1/2 flex items-center justify-center md:justify-end">
                <Image src={image} alt={title} width={150} height={100} className="object-fit" />
            </div>
        </header>
    )
}

export default PostHeader;