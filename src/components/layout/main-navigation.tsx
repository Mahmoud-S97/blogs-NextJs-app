import Link from "next/link";
import Logo from "./logo";


const MainNavigation = () => {
    return (
        <header className="w-full h-20 flex justify-between items-center py-2 px-10 md:px-30">
            <Link href='/'>
                <Logo />
            </Link>
            <nav>
                <ul className="flex gap-5 list-none">
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;