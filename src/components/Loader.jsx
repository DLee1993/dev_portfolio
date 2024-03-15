import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdCopyright } from "react-icons/md";
const Loader = () => {
    let container = useRef();
    const tl = gsap.timeline({ defaults: { ease: "expo", duration: 2 } });

    useGSAP(
        () => {
            gsap.set(container.current, {
                y: 0,
            });
            gsap.set("#left", {
                y: -50,
            });
            gsap.set("#right", {
                y: 50,
            });

            tl.to(["#left", "#right"], {
                y: 0,
            })
                .to("#left", {
                    y: 50,
                })
                .to(
                    "#right",
                    {
                        y: -50,
                    },
                    "<"
                )
                .to(
                    container.current,
                    {
                        opacity: 0,
                        duration: 1,
                        pointerEvents: "none",
                    },
                    "<"
                )
                .to(container.current, {
                    y: "-100%",
                });
        },
        { scope: container }
    );

    return (
        <section
            className="absolute inset-0 z-50 bg-csWhite text-csBlack w-screen h-screen flex justify-center items-center uppercase font-bold text-lg"
            id="loaderContainer"
            ref={container}
        >
            <aside className="flex justify-center items-center gap-x-2 overflow-hidden">
                <p id="left">portfolio </p>
                <p id="right" className="flex justify-center items-center gap-x-2 text-csGrey">
                    <MdCopyright className="text-csBlack" /> 2024
                </p>
            </aside>
        </section>
    );
};

export default Loader;
