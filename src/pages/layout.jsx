import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/computer-lab">Computer Lab</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

