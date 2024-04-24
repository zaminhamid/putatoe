import React from 'react';
import './Footer.css'; // Import your CSS file for footer styling

const Footer = () => {
  return (
    <footer>
      {/* Footer content and links */}
      <p>&copy; 2024 App Name. All rights reserved.</p>
      <div className="footer-lists">
        <ul>
          <li>Google Play</li>
          <li>Play Pass</li>
          <li>Play Points</li>
          <li>Gift cards</li>
          <li>Redeem</li>
          <li>Refund policy</li>
        </ul>
        <ul>
          <li>Kids & family</li>
          <li>Parent Guide</li>
          <li>Family sharing</li>
          
        </ul>
      </div>
      <div className="additional-links">
        <p>
          <span>Terms of Service</span> 
          <span>Privacy</span> 
          <span>About </span> 
          <span>Google Play Developers</span> 
         
            <span>All prices include GST.</span>
        </p>
      </div>
    
    </footer>
  );
}

export default Footer;

