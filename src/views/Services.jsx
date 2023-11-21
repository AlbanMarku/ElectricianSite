import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavComp from '../components/NavComp';
import Review from '../components/Review';
import Welcome from '../components/Welcome';
import WhyUsComp from '../components/WhyUsComp';

export default function Services() {
  const heroContent = 'Providing high quality electrical, services in London';
  const welcomeContent = [
    {
      type: 'paragraph',
      text: 'Here at The One Electrician Ltd, we provide a complete range of high quality, professional electrical services in London and the surrounding areas, covering all aspects of electrical including the following:'
    },
    {
      type: 'list',
      items: [
        'EICR Safety Checks',
        'Full re-wiring',
        'Part re-wiring',
        'Periodic Inspection and Testing',
        'New Installations/Partial Installations,',
        'Fuseboards',
        'PAT Testing',
        'Fault Finding',
        'Smoke Alarms',
        'Earth Bonding',
        'Cooker Installation',
        'Electric Shower',
        'Bathroom Fan',
        'Electric Radiators',
        'Commercial and Domestic Jobs'
      ]
    },
    {
      type: 'paragraph',
      text: "So if you're looking for a electrical company in London with many years experience in the electrical trade then look no further than The One Electrician Ltd. Whether it’s a query or a quote, pick up the phone and call 07590360176 today or visit our contact page or send us an email."
    }
  ];
  return (
    <div>
      <NavComp />
      <Banner />
      <Hero content={heroContent} size="sm" />
      <Welcome title="Our Services" content={welcomeContent} />
      <ChooseUs WhyUs={<WhyUsComp />} />
      <Review />
      <Footer />
    </div>
  );
}
