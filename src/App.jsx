import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
function App() {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <Hero />
                <SelectedWorks />
            </main>
            <Contact />
        </>
    );
}

export default App;
