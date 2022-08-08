import { Outlet, Link } from "react-router-dom";

export const Layout = ({ isAutheticated, setIsAuthenticated }) => {

    const handleLogout = () => {
        setIsAuthenticated(false);
    }

    return (
        <>
        <nav>
            <ul className="main-nav">
                {!isAutheticated && <li className="nav-link">
                    <Link to="/">Login</Link>
                </li>}
                {!isAutheticated && <li className="nav-link">
                    <Link to="/register">Register</Link>
                </li>}
                {isAutheticated && <li className="nav-link">
                    <Link onClick={handleLogout} to="/">Logout</Link>
                </li>
                }
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

