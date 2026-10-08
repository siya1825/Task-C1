import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">DEV@Deakin</Link>
            </div>

            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search..."
                />
                <button type="button">Search</button>
            </div>

            <div className="navbar-links">
                <Link to="/login">Login</Link>
                <Link to="/post">Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;