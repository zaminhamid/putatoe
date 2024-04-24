import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import './Header.css'; // Import your CSS file for header styling

const Header = () => {
  return (
    <header>
      {/* Your header content here */}
      <div className="container">
        <div className="logo">
          <FaGooglePlay />
        </div>
        <nav>
          <ul>
            <li>Google Play</li>
            <li>Games</li>
            <li>Apps</li>
            <li>Movies</li>
            <li>Books</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

