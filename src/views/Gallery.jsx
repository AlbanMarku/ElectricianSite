import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import GalleryComp from '../components/GalleryComp';
import Hero from '../components/Hero';
import Main from '../components/Main';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import WhyUsComp from '../components/WhyUsComp';

export default function Gallery() {
  const heroContent = 'Providing high quality work throughout London';
  return (
    <div className="Gallery">
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
      <Main Comp={<GalleryComp />} />
      <ChooseUs WhyUs={<WhyUsComp />} />
      <Review />
      <Footer />
    </div>
  );
}
