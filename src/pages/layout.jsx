import { Outlet, Link } from "react-router-dom";

export const Layout = ({ isAutheticated }) => {
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
                    <Link to="/computer-lab">Computer Lab</Link>
                </li>
                }
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

