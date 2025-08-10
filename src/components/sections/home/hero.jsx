import { hero_items } from "@/mocks/hero.mocks";
import Image from "next/image";
import Link from "next/link";

const HeroItem = ({
  image,
  alt,
  width,
  height,
  category,
  title,
  link,
  visibility,
}) => {
  const visibilityClasses =
    visibility === "block" ? "" : `hidden ${visibility}`;

  return (
    <div className={`group relative overflow-hidden ${visibilityClasses}`}>
      {/* Image Container */}
      <div className="img h-full">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full scale-125 object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
        />
      </div>

      {/* Overlay with Content */}
      <div className="group-hover:via-primary/10 group-hover:to-primary/80 absolute inset-0 z-10 flex items-end bg-black/50 p-11 transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-white/50">
        <div>
          {/* Category with animated line */}
          <p className="inline-flex items-center text-sm">
            <span className="inline-block h-[3px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-7" />
            <span className="transition-all duration-300 group-hover:ml-4">
              {category}
            </span>
          </p>

          {/* Title with Link */}
          <h4 className="text-lg font-semibold text-white">
            <Link href={link}>{title}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:min-h-[851px] 2xl:grid-cols-3">
      {hero_items.map((item) => (
        <HeroItem
          key={item.id}
          image={item.image}
          alt={item.alt}
          width={item.width}
          height={item.height}
          category={item.category}
          title={item.title}
          link={item.link}
          visibility={item.visibility}
        />
      ))}
    </div>
  );
};

export default HeroSection;
