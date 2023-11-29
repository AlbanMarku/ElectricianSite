import React from 'react';

import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import ContactComp from '../components/ContactComp';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/Main';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import WhyUsComp from '../components/WhyUsComp';

export default function Contact() {
  const heroContent = 'Providing high quality electrical, services in London';

  return (
    <div className="Contact">
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
      <Main Comp={<ContactComp />} />
      <ChooseUs WhyUs={<WhyUsComp />} />
      <Review />
      <Footer />
    </div>
  );
}
