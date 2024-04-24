import React from 'react';
import './download.css';

const DownloadSection = () => {
  return (
    <section className="download">
      <h1>PUTATOE: ONE</h1>
      <h1>Solution</h1>
      <h3>PUTATOE TECHNOLOGIES PRIVATE LIMITED</h3>

      <div className="app-info">
        <div className="app-info-item">
          <p>Review</p>
          <p>4.5</p>
        </div>
        <div className="app-info-item">
          <p>Downloads</p>
          <p>10M+</p>
        </div>
        <div className="app-info-item">
          <p>Rated</p>
          <p>Everyone</p>
        </div>
      </div>

      <div className="buttons">
        <button>Install</button>
        <button>🔁 Share</button>
        <button>🎁 Add to Wishlist</button>
      </div>

      <p>🖥️ This app is available for your device</p>
    </section>
  );
}

export default DownloadSection;

