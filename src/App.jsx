import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { links, projectLiveSiteLinks } from "./data/data";
import { useLenis } from "@studio-freight/react-lenis";

function App() {
    const lenis = useLenis();
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = useRef();
    const menuBtn = useRef();
    const tl = gsap.timeline({ paused: true });

    useGSAP(() => {
        gsap.set(menu.current, {
            opacity: 0,
            pointerEvents: "none",
        });

        tl.to(menu.current, {
            opacity: 1,
            pointerEvents: "all",
        }).reverse();

        document.getElementById("menuBtn").addEventListener("click", toggleMenu);

        document
            .querySelectorAll("#pageLinks li a")
            .forEach((link) => link.addEventListener("click", closeMenu));

        document.getElementById("logoText").addEventListener("click", closeMenu);
    });

    const toggleMenu = () => {
        tl.reversed() ? tl.play() : tl.reverse();
    };

    const closeMenu = () => {
        setMenuOpen(false);
        tl.reverse();
    };

    const scrollTo = (e, link) => {
        e.preventDefault();
        lenis.scrollTo(link);
    };

    return (
        <>
            <header className="sticky top-0 z-50 min-h-20 flex justify-between items-center mix-blend-difference componentXPadding">
                <a
                    href="/"
                    className="uppercase font-bold"
                    id="logoText"
                    onClick={(e) => {
                        scrollTo(e, 0);
                    }}
                >
                    david lee
                </a>
                <button
                    id="menuBtn"
                    ref={menuBtn}
                    aria-label="open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "close menu" : "open menu"}
                </button>
            </header>
            <main className="h-[200vh]">main</main>
            <footer id="aboutme">footer</footer>

            {/* ***************************************************************************** */}
            {/* Global Menu */}
            <section
                id="menu"
                ref={menu}
                className="fixed top-0 left-0 z-40 flex w-screen h-screen"
            >
                <section className="w-full lg:w-3/4 flex justify-between items-center bg-csWhite componentPadding">
                    <figure className="hidden md:block w-3/5"></figure>
                    <aside className="w-full md:w-2/5 h-full lg:h-auto flex flex-col justify-center items-start space-y-12 border-l-[2px] lg:border-csGrey text-lg md:bg-csBlack lg:bg-transparent componentXPadding">
                        <ul
                            id="pageLinks"
                            className="text-csBlack md:text-csWhite lg:text-csBlack font-medium capitalize space-y-2"
                        >
                            <li className="text-sm capitalize text-csGrey">sitemap</li>
                            {links.map((link, index) => (
                                <li key={index} className="menuHoverEffect overflow-hidden">
                                    <a
                                        href={link.linkHref}
                                        download={link.download}
                                        onClick={(e) => {
                                            link.scrollable && scrollTo(e, link.linkHref);
                                        }}
                                    >
                                        {link.linkName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul
                            id="projectLinks"
                            className="text-csBlack md:text-csWhite lg:text-csBlack font-medium capitalize space-y-2"
                        >
                            <li className="text-sm capitalize text-csGrey">selected works</li>
                            {projectLiveSiteLinks.map((link, index) => (
                                <li key={index} className="menuHoverEffect">
                                    <a href={link.linkHref} target="_blank">
                                        {link.linkName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </section>
                <section className="relative hidden lg:block w-1/4 h-full md:bg-csBlack">
                    <p className="mt-8 ml-5 text-csGrey">2024</p>
                    <p className="absolute bottom-0 left-0 text-4xl lg:text-5xl font-bold uppercase leading-none">
                        index.
                    </p>
                </section>
            </section>
        </>
    );
}

export default App;
