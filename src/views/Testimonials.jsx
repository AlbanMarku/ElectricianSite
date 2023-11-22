import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/Main';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import TestimonialsComp from '../components/TestimonialsComp';
import WhyUsComp from '../components/WhyUsComp';

export default function Testimonials() {
  const heroContent = 'Providing high quality electrical, services in London';

  return (
    <div className="Testimonials">
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
      <Main Comp={<TestimonialsComp />} />
      <ChooseUs WhyUs={<WhyUsComp />} />
      <Review />
      <Footer />
    </div>
  );
}
