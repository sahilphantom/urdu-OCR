import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UploadPage from './components/UploadPage';
import ResultsPage from './components/ResultsPage';
import Loader from './components/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        {showLoader ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<UploadPage setShowLoader={setShowLoader} />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

