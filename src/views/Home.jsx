import React from 'react';

import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ListComp from '../components/ListComp';
import Main from '../components/Main';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import WelcomeComp from '../components/WelcomeComp';
import WhyUsComp from '../components/WhyUsComp';
import '../styles/home.css';

export default function Home() {
  const heroContent =
    'We provide a full range of high quality, reliable domestic and commercial electrical services throughout London and the surrounding areas';

  const welcomeContent = [
    {
      type: 'paragraph',
      text: "A friendly and reliable team who work hard to maintain our reputation as one of London's most trustworthy electrical companies.",
      formattedText: true
    },
    {
      type: 'paragraph',
      text: 'We are conscientious tradesmen and we take pride in our work. Our aim is to ensure a 100% customer satisfaction. We are a friendly, polite team and we believe in quality of work and we will always aim to deliver the best possible job. We accommodate services for both domestic and commercial clients. '
    },
    {
      type: 'paragraph',
      text: 'We pride ourselves on offering a hassle free and affordable service where the customer needs always take priority, as do excellent quality workmanship and operating to modern standards. As a company we are confident that we can meet all your requirements on your next electrical project and also exceed your expectations when it comes to quality and affordable electricians in London. All of our team are highly skilled in the electrical trade and have built up a wealth of experience over the last several years, so no job is too demanding for us as we have all been trained to deal with every situation that the electrical trade can offer.'
    },
    {
      type: 'paragraph',
      text: "So if you're looking for a electrical company in London with many years experience in the electrical trade then look no further than The One Electrician Ltd. Whether it’s a query or a quote, pick up the phone and call 07590360176 today or visit our contact page or send us an email."
    }
  ];
  return (
    <div className="Home">
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="lg" />
      <Main Comp={<WelcomeComp title="welcome" content={welcomeContent} />} />
      <ChooseUs WhyUs={<WhyUsComp />} List={<ListComp />} />
      <Review />
      <Footer />
    </div>
  );
}
