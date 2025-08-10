import { ideas } from "@/mocks/stylish-idea.mocks";
import Link from "next/link";

const IdeaCard = ({ icon: Icon, title, description }) => (
  <div className="group border-darkest flex items-center space-x-6 border backdrop-blur-xs">
    {/* Icon Circle */}
    <div className="bg-darkest flex h-[207px] w-[47%] flex-shrink-0 items-center justify-center">
      <Link
        href="/"
        className="group-hover:border-primary group-hover:bg-primary border-border-dark flex h-[124px] w-[124px] cursor-pointer items-center justify-center rounded-full border bg-transparent transition-colors duration-300"
      >
        <Icon
          className="h-12 w-12 text-white transition-all duration-300 group-hover:scale-[0.8] group-hover:text-gray-300"
          strokeWidth={2.5}
        />
      </Link>
    </div>

    {/* Content */}
    <div className="flex-1 lg:p-3">
      <h3 className="mb-3 text-xl leading-tight font-semibold text-white">
        {title}
      </h3>
      <p className="text-base leading-[26px] font-[300] text-[#CCCCCC]">
        {description}
      </p>
    </div>
  </div>
);

const StylishIdeaSection = () => {
  return (
    <section className="stylish_idea_bg py-[90px]">
      <div className="container_fluid">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm">Enhance your future</p>
          <h2 className="text-3xl leading-[42px] font-semibold text-white">
            Innovation stylish ideas
          </h2>
        </div>

        {/* innovation stylish ideas */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              icon={idea.icon}
              title={idea.title}
              description={idea.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylishIdeaSection;
