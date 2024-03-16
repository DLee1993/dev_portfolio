import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <Header setMenu={setMenu} menu={menu} />
            <main className="h-[200vh]">
                <Hero />
                <SelectedWorks />
            </main>
            <Contact />
        </>
    );
}

export default App;
