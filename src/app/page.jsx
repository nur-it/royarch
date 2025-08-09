import InfoBox from "@/components/layout/info-box";
import BuildingExcellenceSection from "@/components/sections/home/building-excellence";
import HeroSection from "@/components/sections/home/hero";
import ServiceSection from "@/components/sections/home/services";
import StylishIdeaSection from "@/components/sections/home/stylish-ideas";

const HomePage = () => {
  return (
    <>
      <InfoBox />
      <HeroSection />
      <StylishIdeaSection />
      <BuildingExcellenceSection />
      <ServiceSection />
    </>
  );
};

export default HomePage;
