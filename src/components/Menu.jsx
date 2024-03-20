import { useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { links, projects } from "../data/data";
const Menu = ({ setMenuOpen }) => {
    const menu = useRef();
    const menuTL = gsap.timeline({ paused: true });

    useGSAP(
        () => {
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
        },
        { scope: menu }
    );

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
            className="fixed top-0 left-0 z-10 flex w-screen min-h-screen bg-csBlack bg-menu-bg bg-cover bg-no-repeat bg-center text-xl"
        >
        </section>
    );
};

Menu.propTypes = {
    setMenuOpen: PropTypes.func,
    openMenu: PropTypes.bool,
};

export default Menu;
