import React from 'react';
import './FeatureSection.css'; // Import your CSS file for FeatureSection styling

const FeatureSection = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <h2>About this app</h2>
        <p>
          Putatoe (Put-AT-Toe) provides numerous business services to customers from their fingertips to their footsteps.
          <br /><br />
          Putatoe offers a platform for business providers to interact directly with end consumers without any third-party involvement. Users can chat with service providers directly to schedule appointments.
        </p>
      </div>
      <div className="feature-card">
        <h2>Data Safety</h2>
        <p>
          Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.
          <br /><br />
          The developer has declared that no data is shared with third parties and no data is collected. However, data isn't encrypted, and users can request that their data be deleted.
        </p>
      </div>
      <div className="feature-card">
        <h2>Ratings and Reviews</h2>
        <div className="review">
          <strong>🌟️🌟️🌟️Somesh Kumar</strong><br />
          June 24, 2023<br />
          I attempted to open the app, but it crashed at the splash screen. Despite having 8 years of experience in mobile development & 15+ years of experience as a mobile user, I have never encountered such a poorly designed app with a bad user experience. It would be advisable to consider utilizing Kotlin and the splash screen API in future iterations.
          <br /><br />
          97 people found this review helpful.
        </div>
        <div className="review">
          <strong>🌟️🌟️varma Kumar</strong><br />
          June 4, 2023<br />
          I have never encountered such a poorly designed app with a bad user experience. It would be advisable to consider utilizing Kotlin and the splash screen API in future iterations.
          <br /><br />
          937 people found this review helpful.
        </div>
      </div>
      <p className="whats-new">
        <strong>What's new</strong> <br/>
        Bug Fix
      </p>
    </section>
  );
}

export default FeatureSection;

