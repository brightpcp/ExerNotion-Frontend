import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    return (
      <div>
          
    <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo" ><a href="#add"><strong>Exer</strong>Notion</a></div>
        <ul className="links">
            <li><Link to ="/">Add Your Activity</Link></li>
            <li><Link to ="/History">Activity History</Link></li>
            <li><Link to="#footer">Subscribe</Link></li>
            <li><Link to="#footer">Sign Up</Link></li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
    </nav>
       
      </div>
    );
  }
  
  export default Navbar;