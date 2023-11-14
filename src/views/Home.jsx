import React from 'react';

import Banner from '../components/Banner';
import Hero from '../components/Hero';
import NavComp from '../components/NavComp';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="Home">
      <NavComp />
      <Banner />
      <Hero />
      <p style={{ paddingTop: '240px' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat porro
        aspernatur beatae tenetur magnam quos temporibus quam hic! Eius
        excepturi quaerat sint cumque dolor neque culpa minus ratione eaque,
        quibusdam est pariatur consequatur assumenda nam error ab, commodi unde
        aut tenetur? Corrupti est laborum, ex animi cupiditate molestiae eveniet
        a!
      </p>
    </div>
  );
}
