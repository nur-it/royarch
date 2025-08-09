import { building_excellence } from "@/mocks/building-excellence.mocks";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group cursor-pointer">
    <div className="flex items-start gap-6">
      {/* Icon with corner brackets and border */}
      <div className="group-hover:bg-primary relative flex-shrink-0 bg-transparent transition-colors duration-300">
        {/* Border around icon area */}
        <div className="border-charcoal h-[120px] w-[120px] border transition-colors duration-300 group-hover:border-gray-300/50"></div>

        {/* Corner brackets */}
        <div className="border-muted absolute -top-0 -left-0 h-3 w-3 border-t-2 border-l-2 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-gray-300/50"></div>

        <div className="border-muted absolute -right-0 -bottom-0 h-3 w-3 border-r-2 border-b-2 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-gray-300/50"></div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-10 w-10 text-white transition-all duration-300 group-hover:scale-[0.8] group-hover:text-gray-300"
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="mb-3 text-xl leading-tight font-semibold text-white">
          {title}
        </h3>
        <p className="text-15 leading-relaxed font-[300] text-white/80">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const BuildingExcellenceSection = () => {
  return (
    <section className="bg-midnight pt-[130px] pb-25">
      <div className="container_fluid">
        <div className="mb-6">
          <p className="mb-1 text-sm">The art of building</p>
          <h2 className="text-3xl leading-[42px] font-semibold text-white">
            Building Excellence
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {building_excellence.map((service) => (
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

export default BuildingExcellenceSection;
