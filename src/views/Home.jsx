import React from 'react';

import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Hero from '../components/Hero';
import NavComp from '../components/NavComp';
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
    </div>
  );
}
