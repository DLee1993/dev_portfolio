import { useState } from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Footer from "./components/Footer";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main className="h-[200vh]">
                <Hero />
                <SelectedWorks />
            </main>
            <Footer />
            <Menu setMenuOpen={setMenuOpen} />
        </>
    );
}

export default App;
