import { systems } from "@/mocks/systems.mocks";
import Image from "next/image";
import Link from "next/link";

const SystemCard = ({ system }) => {
  if (system.isImage) {
    return (
      <div className="group relative">
        <Image
          width={602}
          height={400}
          src={system.image}
          alt={`System ${system.id}`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const { icon: Icon, title, description } = system;

  return (
    <div className="group bg-charcoal cursor-pointer">
      {/* Content */}
      <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 p-6 text-center">
        {/* Icon */}
        <Link
          href="/"
          className="group-hover:border-primary group-hover:bg-primary mb-2 flex h-[98px] w-[98px] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent transition-colors duration-300"
        >
          <Icon
            className="h-10 w-10 text-white transition-all duration-300 group-hover:scale-[0.8] group-hover:text-gray-300"
            strokeWidth={2.5}
          />
        </Link>

        <h3 className="text-xl leading-tight font-semibold text-white">
          {title}
        </h3>
        <p className="text-15 max-w-[481px] leading-[26px] font-[300] text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

const SystemSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3">
      {systems.map((system) => (
        <SystemCard key={system.id} system={system} />
      ))}
    </section>
  );
};

export default SystemSection;
