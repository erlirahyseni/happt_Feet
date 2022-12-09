import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>happyFeet.</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/jokes">Fun Time</Link>
          </li>
          <li>
            <Link to="/books">Choose a Book</Link>
          </li>
          <li>
            <Link to="/book-search">Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
