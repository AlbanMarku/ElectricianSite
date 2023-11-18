import Banner from '../components/Banner';
import Hero from '../components/Hero';
import NavComp from '../components/NavComp';

export default function Services() {
  const heroContent = 'Providing high quality electrical, services in London';
  return (
    <div>
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
    </div>
  );
}
