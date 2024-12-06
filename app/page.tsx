import GetStartedWith from '@/components/GetStarted';
import HeroSection from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceSection from '@/components/Service';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <GetStartedWith />
      <ServiceSection />
    </>
  );
}
