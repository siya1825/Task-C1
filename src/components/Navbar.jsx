
import { Link } from "react-router-dom";

function Navbar() {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About Me", href: "#about" },
        { label: "Projects", href: "#work" },
        { label: "Gallery", href: "#gallery" },
        { label: "Articles", href: "#articles" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Contact", href: "#contact" },
        { label: "Subscribe", href: "#subscribe" },
    ];

    return (
        <>
            {/* Left Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <h2>Siya ✨</h2>
                    <p>My Portfolio</p>
                </div>

                <nav className="side-nav">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Existing Top Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">DEV@Deakin</Link>
                </div>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                    <button type="button">Search</button>
                </div>

                <div className="navbar-links">
                    <Link to="/login">Login</Link>
                    <Link to="/post">Post</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
