import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Loader from "./components/Loader";
function App() {
    return (
        <>
            <Menu />
            <Loader />
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
