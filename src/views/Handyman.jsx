import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import HandyComp from '../components/HandyComp';
import Hero from '../components/Hero';
import InfoComp from '../components/InfoComp';
import Main from '../components/Main';
import NavComp from '../components/NavComp';
import Review from '../components/Review';

export default function Handyman() {
  const heroContent = 'Now providing top quality handyman services!';
  return (
    <div>
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
      <Main Comp={<HandyComp />} />
      <ChooseUs WhyUs={<InfoComp />} />
      <Review />
      <Footer />
    </div>
  );
}
