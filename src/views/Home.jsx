import React from 'react';

import Banner from '../components/Banner';
import NavComp from '../components/NavComp';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="Home">
      <NavComp />
      <Banner />
    </div>
  );
}
