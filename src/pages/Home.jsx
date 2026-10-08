import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Articles from "../components/Articles";
import Tutorials from "../components/Tutorials";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";

function Home() {
    return (
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
    );
}

export default Home;