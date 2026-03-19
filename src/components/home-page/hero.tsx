import { JSX } from 'react';
import Image from 'next/image';


const Hero = (): JSX.Element => {
    return (
        <div className="w-full h-[70%] text-center p-20 bg-main-gradient">
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center w-[300] h-[300] overflow-hidden rounded-full'>
                    <Image className='rounded-full object-cover' src='/images/site/me.jpeg' alt='An image showing Mahmoud' width={300} height={300} />
                </div>
            </div>
            <h1 className='mt-10 mb-5 text-5xl font-bold'>Hi, I'm Mahmoud</h1>
            <p className='text-xl'>I blog about web & mobile development - especially frontend frameworks like Next.js, React and React Native</p>
        </div>
    )
}

export default Hero;