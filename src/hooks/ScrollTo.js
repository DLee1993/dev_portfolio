import { useLenis } from "@studio-freight/react-lenis";

export const ScrollToEl = (e, link) => {
    const lenis = useLenis();
    e.preventDefault();
    lenis.scrollTo(link);
};
