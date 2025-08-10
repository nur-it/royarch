import { services } from "@/mocks/enhance-future.mocks";
import Link from "next/link";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group border-border-darker flex flex-col items-center justify-center border text-center">
    {/* Icon Container */}

    <Link
      href="/"
      className="group-hover:bg-primary bg-darkest flex h-[82px] w-[95px] cursor-pointer items-center justify-center transition-colors duration-300"
    >
      <Icon
        className="h-10 w-10 text-white transition-all duration-300 group-hover:scale-[0.8] group-hover:text-gray-300"
        strokeWidth={2.5}
      />
    </Link>

    <div className="space-y-2 p-6">
      <h3 className="text-xl leading-tight font-semibold text-white">
        {title}
      </h3>
      <p className="text-15 leading-[26px] font-[300] text-white/80">
        {description}
      </p>
    </div>
  </div>
);

const EnhanceFutureSection = () => {
  return (
    <section className="bg-midnight py-[130px]">
      <div className="container_fluid">
        <div className="mb-6">
          <p className="mb-1 text-sm">Spice up your living</p>
          <h2 className="text-3xl leading-[42px] font-semibold text-white">
            Enhance your future
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhanceFutureSection;
