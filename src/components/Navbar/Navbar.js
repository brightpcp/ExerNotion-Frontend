import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <Link to="/">
            <strong>Exer</strong>Notion
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Add Your Activity</Link>
          </li>
          <li>
            <Link to="/activities">Activity History</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
}

export default Navbar;
