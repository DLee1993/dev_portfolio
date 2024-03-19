import { useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { links, projects } from "../data/data";
const Menu = ({ setMenuOpen }) => {
    const [hoverImage, setHoverImage] = useState("");
    const menu = useRef();
    const menuTL = gsap.timeline({ paused: true });

    useGSAP(() => {
        gsap.set(menu.current, {
            opacity: 0,
            pointerEvents: "none",
        });

        gsap.set(".menuLink", {
            y: "100%",
        });

        menuTL
            .to(menu.current, {
                opacity: 1,
                pointerEvents: "all",
                ease: "power4.inOut",
            })
            .to(
                ".menuLink",
                {
                    y: 0,
                },
                "-=0.2"
            )
            .reverse();

        document.getElementById("menuBtn").addEventListener("click", toggleMenu);

        document
            .querySelectorAll("#pageLinks li a")
            .forEach((link) => link.addEventListener("click", closeMenu));

        document.getElementById("logoText").addEventListener("click", closeMenu);
    });

    const toggleMenu = () => {
        menuTL.reversed() ? menuTL.play() : menuTL.reverse();
    };

    const closeMenu = (e) => {
        e.preventDefault();
        setMenuOpen(false);
        menuTL.reverse();
    };

    return (
        <section
            id="menu"
            ref={menu}
            className="fixed top-0 left-0 z-40 flex w-screen h-screen"
        >
            <section className="w-full lg:w-3/4 min-h-screen pt-20 sm:pt-0 flex justify-between items-center bg-csWhite componentPadding">
                <aside className="hidden md:flex justify-center items-center w-full lg:w-3/5">
                    {hoverImage !== "" && (
                        <figure className="absolute h-96 p-10 bg-csGrey/10">
                            <img
                                id="hoverImage"
                                src={hoverImage}
                                alt="project screenshot"
                                aria-label="project screenshot"
                                className="w-full h-full"
                            />
                        </figure>
                    )}
                </aside>
                <aside
                    id="menuLinks"
                    className="w-full md:w-3/5 lg:w-2/5 h-full lg:h-auto flex flex-col justify-center items-start space-y-12 border-l-[2px] lg:border-csGrey text-2xl md:text-lg md:bg-csBlack lg:bg-transparent componentXPadding"
                >
                    <ul id="pageLinks">
                        <li id="menuListTitle">sitemap</li>
                        {links.map((link, index) => (
                            <li key={index} id="menuHoverEffect">
                                <a
                                    href={link.linkHref}
                                    download={link.download}
                                    className="block menuLink"
                                >
                                    {link.linkName}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul id="pageLinks">
                        <li id="menuListTitle">selected works</li>
                        {projects.map((link, index) => (
                            <li key={index} id="menuHoverEffect">
                                <a
                                    href={link.linkHref}
                                    target="_blank"
                                    onMouseEnter={() => setHoverImage(link.image)}
                                    onMouseLeave={() => setHoverImage("")}
                                    className="block menuLink"
                                >
                                    {link.title}
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
    );
};

Menu.propTypes = {
    setMenuOpen: PropTypes.func,
};

export default Menu;
