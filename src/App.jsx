import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import InterviewBot from './page/InterviewBot';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🧠 Firebase User:", user);
      setIsLoggedIn(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/interview/*"
          element={isLoggedIn ? <InterviewBot /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
