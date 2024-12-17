import GetStartedWith from '@/components/GetStarted';
import HeroSection from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceSection from '@/components/Service';
import StatsSection from '@/components/Stats';
import TestimonialsSection from '@/components/Testimonial';
import DirectorMessage from '@/components/DirectorMessage';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <StatsSection />
      <GetStartedWith />
      <ServiceSection />
      <DirectorMessage />
      <TestimonialsSection />
    </>
  );
}
