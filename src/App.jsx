import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Menu from "./components/Menu";
import Header from "./components/Header";
gsap.registerPlugin(ScrollTrigger);

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure facilis
                    exercitationem nam similique ipsam ab quibusdam! Deleniti ratione corrupti,
                    tempore cum, unde voluptate ex aperiam aut autem a repellat.
                </section>
            </main>
            <footer id="aboutme">footer</footer>
            <Menu setMenuOpen={setMenuOpen} />
        </>
    );
}

export default App;
