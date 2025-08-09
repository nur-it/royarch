import InfoBox from "@/components/layout/info-box";
import BuildingExcellenceSection from "@/components/sections/home/building-excellence";
import EnhanceFutureSection from "@/components/sections/home/enhance-future";
import HeroSection from "@/components/sections/home/hero";
import ServiceSection from "@/components/sections/home/services";
import StylishIdeaSection from "@/components/sections/home/stylish-ideas";
import SystemSection from "@/components/sections/home/systems";

const HomePage = () => {
  return (
    <>
      <InfoBox />
      <HeroSection />
      <EnhanceFutureSection />
      <StylishIdeaSection />
      <BuildingExcellenceSection />
      <SystemSection />
      <ServiceSection />
    </>
  );
};

export default HomePage;
