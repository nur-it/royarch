import InfoBox from "@/components/layout/info-box";
import BuildingExcellenceSection from "@/components/sections/home/building-excellence";
import HeroSection from "@/components/sections/home/hero";
import ServiceSection from "@/components/sections/home/services";
import StylishIdeaSection from "@/components/sections/home/stylish-ideas";
import SystemSection from "@/components/sections/home/systems";

const HomePage = () => {
  return (
    <>
      <InfoBox />
      <HeroSection />
      <StylishIdeaSection />
      <BuildingExcellenceSection />
      <SystemSection />
      <ServiceSection />
    </>
  );
};

export default HomePage;
