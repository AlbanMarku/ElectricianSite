import React from 'react';

import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import Welcome from '../components/Welcome';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="Home">
      <NavComp />
      <Banner />
      <Hero />
      <Welcome />
      <ChooseUs />
      <Review />
      <Footer />
    </div>
  );
}
