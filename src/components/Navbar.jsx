import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About Me", href: "#about" },
        { label: "Projects", href: "#work" },
        { label: "Gallery", href: "#gallery" },
        { label: "Articles", href: "#articles" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Newsletter", href: "#subscribe" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <>
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

            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">DEV@Deakin</Link>
                </div>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search sections..."
                        aria-label="Search sections"
                    />
                    <button type="button">Search</button>
                </div>

                <div className="navbar-links">
                    <Link to="/">Home</Link>

                    {user ? (
                        <>
                            <Link to="/post">Post</Link>
                            <span className="user-email">
                                {user.email}
                            </span>
                            <button
                                type="button"
                                onClick={onLogout}
                                className="logout-button"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/post">Post</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;