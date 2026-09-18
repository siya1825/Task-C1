function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-column">
                    <h3>Explore</h3>
                    <a href="#home">Home</a>
                    <a href="#about">Questions</a>
                    <a href="#articles">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                </div>

                <div className="footer-column">
                    <h3>Support</h3>
                    <a href="#contact">FAQs</a>
                    <a href="#contact">Help</a>
                    <a href="#contact">Contact Us</a>
                </div>

                <div className="footer-column">
                    <h3>Stay Connected</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Instagram">◎</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <h3>DEV@Deakin</h3>

                <p>© 2026 My Portfolio. All rights reserved.</p>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Code of Conduct</a>
                </div>

                <p>Built with React</p>
            </div>

        </footer>
    );
}

export default Footer;