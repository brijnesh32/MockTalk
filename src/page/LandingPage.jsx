import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Discover from '../components/Discover';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Tools from '../components/Tool';
import UserReview from '../components/UserReview';

const LandingPage = ({ setIsLoggedIn }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header setIsLoginOpen={setIsLoginOpen} />
      <Section />
      <Discover />
      <Tools />
      <UserReview />
      <Blog />
      <FAQ />
      <Footer />
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
};

export default LandingPage;
