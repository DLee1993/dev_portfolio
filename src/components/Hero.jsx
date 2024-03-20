import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const tl = gsap.timeline();

    useGSAP(() => {
        gsap.set(document.body, {
            className: "white",
        });

        tl.to("#textReveal", {
            ease: "expo.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: document.getElementsByTagName("main"),
                scrub: true,
                start: "top top",
                end: "center center",
                pin: true,
                // markers: true,
            },
        }).set(document.body, {
            className: "dark",
        });
    });

    return (
        <section id="textReveal" className="min-h-screen w-full flex justify-center items-center">
            <p className="w-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure facilis
                exercitationem nam similique ipsam ab quibusdam! Deleniti ratione corrupti, tempore
                cum, unde voluptate ex aperiam aut autem a repellat.
            </p>
        </section>
    );
};

export default Hero;
