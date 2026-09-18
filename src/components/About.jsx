function About() {
    return (
        <section id="about">

            <div className="profile">

                <img
                    src="/images/photo.jpeg"
                    alt="Profile"
                    className="profile-photo"
                />

                <div className="about-content">

                    <h2>About Me</h2>

                    <p>
                        I am a passionate developer and problem solver
                        interested in technology, programming and
                        creating meaningful digital experiences.
                    </p>

                    <p>
                        I am currently pursuing my Bachelor's degree in
                        Artificial Intelligence and Machine Learning through
                        the Chitkara University 2+2 Global Pathway program.
                    </p>

                    <div className="about-details">

                        <div>
                            🎓
                            <strong>Student</strong>
                            <span>B.Tech AI & ML</span>
                        </div>

                        <div>
                            📍
                            <strong>Location</strong>
                            <span>India</span>
                        </div>

                        <div>
                            ✉️
                            <strong>Email</strong>
                            <span>siya@example.com</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;