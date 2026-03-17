import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import CTASection from '../components/sections/CTASection';
import GallerySection from '../components/sections/GallerySection';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import VideoSection from '../components/sections/VideoSection';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <VideoSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;