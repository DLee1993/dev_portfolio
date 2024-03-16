/* eslint-disable react/prop-types */
import { useLenis } from "@studio-freight/react-lenis";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Header = () => {
    const lenis = useLenis();

    function scrollToTop() {
        lenis.scrollTo(0);
    }

    return (
        <header
            id="header"
            className="min-h-20 sticky top-0 flex justify-between items-center componentXPadding"
        >
            <p onClick={scrollToTop} className="uppercase font-bold cursor-pointer">
                david lee
            </p>
            <nav>
                <ul className="flex gap-x-2">
                    <li>
                        <a
                            href="https://github.com/DLee1993"
                            target="_blank"
                            className="relative w-10 h-10 hover:w-36 flex justify-start px-3 items-center bg-csBlack hover:bg-csWhite text-csBlack transition-all duration-300 rounded-full overflow-hidden group"
                        >
                            @DLee1993
                            <span className="w-10 h-10 flex justify-center items-center absolute top-0 right-0 bg-csBlack text-csWhite p-2 rounded-full group-hover:scale-90 transition-colors">
                                <FaGithub size="1.25rem" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/David_Lee147"
                            target="_blank"
                            className="relative w-10 h-10 hover:w-40 flex justify-start px-2 items-center bg-csBlack hover:bg-csWhite text-csBlack transition-all duration-300 rounded-full overflow-hidden group"
                        >
                            @david_lee147
                            <span className="w-10 h-10 flex justify-center items-center absolute top-0 right-0 bg-csBlack text-csWhite p-2 rounded-full group-hover:scale-90 transition-colors">
                                <BsTwitterX size="1.25rem" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.frontendmentor.io/profile/DLee1993"
                            target="_blank"
                            className="relative w-10 h-10 hover:w-36 flex justify-start px-3 items-center bg-csBlack hover:bg-csWhite text-csBlack transition-all duration-300 rounded-full overflow-hidden group"
                        >
                            @DLee1993
                            <span className="w-10 h-10 flex justify-center items-center text-lg font-bold absolute top-0 right-0 bg-csBlack text-csWhite p-2 rounded-full group-hover:scale-90 transition-colors">
                                F
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <button role="menuButton">menu button</button>
        </header>
    );
};

export default Header;
