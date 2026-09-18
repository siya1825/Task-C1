function Navbar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <h2>Siya ✨</h2>
                <p>Portfolio</p>
            </div>

            <nav className="side-nav">

                <a href="#home" className="active">
                    🏠 <span>Home</span>
                </a>

                <a href="#about">
                    👤 <span>About</span>
                </a>

                <a href="#work">
                    💼 <span>Work</span>
                </a>

                <a href="#articles">
                    📰 <span>Articles</span>
                </a>

                <a href="#tutorials">
                    ▶ <span>Tutorials</span>
                </a>

                <a href="#contact">
                    ✉ <span>Contact</span>
                </a>

                <a href="#subscribe">
                    📩 <span>Subscribe</span>
                </a>

            </nav>


        </aside>
    );
}

export default Navbar;