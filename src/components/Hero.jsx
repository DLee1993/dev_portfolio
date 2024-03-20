// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import SplitType from "split-type";
// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    // const tl = gsap.timeline();

    // useGSAP(() => {
    //     const line1 = new SplitType("#firstLine");
    //     const line2 = new SplitType("#secondLine");

    //     gsap.set([line1.chars, line2.chars], {
    //         y: "200%",
    //     });

    //     tl.to(line1.chars, {
    //         ease: "power4.inOut",
    //         y: 0,
    //         duration: 1.5,
    //         stagger: 0.01,
    //     });

    //     tl.to(line2.chars, {
    //         ease: "sine.out",
    //         y: 0,
    //         duration: 1,
    //         stagger: 0.01,
    //         scrollTrigger: {
    //             trigger: document.getElementsByTagName("main"),
    //             scrub: true,
    //             start: "top top",
    //             end: "center+=100 center-=100",
    //             pin: true,
    //         },
    //     });
    // });

    return (
        <section
            id="textReveal"
            className="min-h-screen w-full flex flex-col justify-center items-center"
        >
            <aside className="flex flex-col justify-center items-center text-2xl">
                <h1 id="firstLine" className="overflow-hidden">
                    Bringing ideas to life.
                </h1>
                <h2 id="secondLine" className="max-w-4xl text-center overflow-hidden">
                    I build accessible, modern web apps to help streamline the needs of people and
                    businesses.
                </h2>
            </aside>
        </section>
    );
};

export default Hero;
