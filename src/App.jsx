import "./style.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Articles from "./components/Articles";
import Tutorials from "./components/Tutorials";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Banner />

                <About />

                <Projects />

                <Gallery />

                <Articles />

                <Tutorials />

                <Newsletter />

                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;