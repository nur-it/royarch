import InfoBox from "@/components/layout/info-box";
import BuildingExcellenceSection from "@/components/sections/home/building-excellence";
import HeroSection from "@/components/sections/home/hero";
import ServiceSection from "@/components/sections/home/services";

const HomePage = () => {
  return (
    <>
      <InfoBox />
      <HeroSection />
      <BuildingExcellenceSection />
      <ServiceSection />
    </>
  );
};

export default HomePage;
