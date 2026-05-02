import NavigationBar from "@/components/wedding/NavigationBar";
import HeroSection from "@/components/wedding/HeroSection";
import StorySection from "@/components/wedding/StorySection";
import EventSection from "@/components/wedding/EventSection";
import GiftSection from "@/components/wedding/GiftSection";
import GallerySection from "@/components/wedding/GallerySection";
import MessagesSection from "@/components/wedding/MessagesSection";
import FooterSection from "@/components/wedding/FooterSection";
import FloralParticles from "@/components/wedding/FloralParticles";

const Index = () => {
  return (
    <div className="relative">
      <FloralParticles />
      <NavigationBar />
      <HeroSection />
      <StorySection />
      <EventSection />
      <GiftSection />
      <GallerySection />
      <MessagesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
