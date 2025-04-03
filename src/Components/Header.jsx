// components/Header.jsx
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import './Header.css'    
export default function Header() {
  return (
    <nav>
      <div className="logo">
        <GiKnifeFork />
        <span>Kary's Diner</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}