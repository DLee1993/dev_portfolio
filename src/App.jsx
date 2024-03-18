import { useState } from "react";
import Menu from "./components/Menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <button id="menuBtn" aria-label="open menu" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "close menu" : "open menu"}
                </button>
            </header>
            <main className="h-[200vh]">main</main>
            <footer id="aboutme">footer</footer>
            <Menu setMenuOpen={setMenuOpen} />
        </>
    );
}

export default App;
