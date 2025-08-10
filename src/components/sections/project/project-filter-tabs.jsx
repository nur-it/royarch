import { cn } from "@/lib/utils";
import { portfolioCategories } from "@/mocks/projects.mocks";

const ProjectFilterTabSection = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="bg-[#505050]">
      <ul className="grid grid-cols-3 divide-x divide-y divide-[#5e5e5e] md:grid-cols-4 lg:mx-auto lg:max-w-[1170px] lg:grid-cols-8 lg:px-3">
        {portfolioCategories.map((category) => (
          <li
            key={category.id}
            className="inline-block py-6 last:border-r last:border-[#5e5e5e] last:pr-0 lg:last:border-r-0 2xl:py-[70px]"
          >
            <button
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "relative block w-full cursor-pointer p-4 text-center text-base text-[#f8f8f8]",
              )}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-1/2 h-[3px] w-[30px] -translate-x-1/2 rounded-full bg-red-500" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectFilterTabSection;
