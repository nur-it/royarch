import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:min-h-[851px] 2xl:grid-cols-3">
      <div className="group relative overflow-hidden">
        <div className="img h-full">
          <Image
            src="/hero/carousel-item-1.png"
            alt="Hero"
            width={607}
            height={750}
            className="h-full w-full scale-125 object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
          />
        </div>
        <div className="group-hover:from-primary/0 group-hover:via-primary/10 group-hover:to-primary/80 absolute inset-0 z-10 flex items-end bg-black/50 p-11 transition-all duration-300 group-hover:bg-gradient-to-b">
          <div>
            <p className="inline-flex items-center text-sm">
              {" "}
              <span className="inline-block h-[3px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-7" />{" "}
              <span className="transition-all duration-300 group-hover:ml-4">
                Metal
              </span>
            </p>
            <h4 className="text-lg font-semibold text-white">
              <Link href="/material-design">Material Design</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="group relative hidden overflow-hidden lg:block">
        <div className="img h-full">
          <Image
            src="/hero/carousel-item-2.jpg"
            alt="Hero"
            width={607}
            height={750}
            className="h-full w-full scale-125 object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
          />
        </div>
        <div className="group-hover:from-primary/0 group-hover:via-primary/10 group-hover:to-primary/80 absolute inset-0 z-10 flex items-end bg-black/50 p-11 transition-all duration-300 group-hover:bg-gradient-to-b">
          <div>
            <p className="inline-flex items-center text-sm">
              {" "}
              <span className="inline-block h-[3px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-7" />{" "}
              <span className="transition-all duration-300 group-hover:ml-4">
                Interior
              </span>
            </p>
            <h4 className="text-lg font-semibold text-white">
              <Link href="/best-interior-design">Best Interior Design</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="group relative hidden overflow-hidden 2xl:block">
        <div className="img h-full">
          <Image
            src="/hero/carousel-item-3.jpg"
            alt="Hero"
            width={606}
            height={750}
            className="h-full w-full scale-125 object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
          />
        </div>
        <div className="group-hover:from-primary/0 group-hover:via-primary/10 group-hover:to-primary/80 absolute inset-0 z-10 flex items-end bg-black/50 p-11 transition-all duration-300 group-hover:bg-gradient-to-b">
          <div>
            <p className="inline-flex items-center text-sm">
              {" "}
              <span className="inline-block h-[3px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-7" />{" "}
              <span className="transition-all duration-300 group-hover:ml-4">
                Building
              </span>
            </p>
            <h4 className="text-lg font-semibold text-white">
              <Link href="/exterior-collection-2021">
                Exterior Collection 2021
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
