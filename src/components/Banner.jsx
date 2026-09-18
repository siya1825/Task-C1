function Banner() {
    return (
        <section id="home" className="hero">

            <img
                src="/images/banner.jpeg"
                alt="Portfolio banner"
            />

            <div className="hero-overlay">

                <div className="hero-content">

                    <p className="hero-small">
                        Welcome to my portfolio
                    </p>

                    <h1>
                        Building Ideas.<br />
                        Creating Impact.
                    </h1>

                    <p className="hero-description">
                        I'm passionate about technology, design
                        and building meaningful digital experiences.
                    </p>

                    <div className="hero-buttons">

                        <a href="#work" className="primary-btn">
                            View My Work →
                        </a>

                        <a href="#contact" className="secondary-btn">
                            Let's Connect →
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Banner;