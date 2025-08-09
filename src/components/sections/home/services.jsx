import { services } from "@/mocks/services.mocks";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group flex flex-row items-start space-y-4 space-x-6">
    {/* Icon Container */}
    <div className="flex-shrink-0">
      <div className="group-hover:border-primary group-hover:bg-primary border-charcoal flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-full border-[10px] bg-transparent transition-colors duration-300">
        <Icon
          className="h-10 w-10 text-white transition-all duration-300 group-hover:scale-[0.8] group-hover:text-gray-300"
          strokeWidth={2.5}
        />
      </div>
    </div>

    {/* Content */}
    <div className="min-w-0 flex-1">
      <h3 className="mb-3 text-xl leading-tight font-semibold text-white">
        {title}
      </h3>
      <p className="text-15 leading-relaxed font-[300] text-white/80">
        {description}
      </p>
    </div>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="bg-midnight pt-[130px] pb-20">
      <div className="container_fluid">
        <div className="mb-6">
          <p className="mb-1 text-sm">The art of building</p>
          <h2 className="text-3xl leading-[42px] font-semibold text-white">
            With people's comfort in mind
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
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

export default ServiceSection;
