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
  const heroContent =
    'We provide a full range of high quality, reliable domestic and commercial electrical services throughout London and the surrounding areas';
  return (
    <div className="Home">
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="lg" />
      <Welcome />
      <ChooseUs />
      <Review />
      <Footer />
    </div>
  );
}
