// App.js
import React from 'react';
import './App.css';

import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     
      <DownloadSection />
       <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;

