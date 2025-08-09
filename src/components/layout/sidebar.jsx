import { cn } from "@/lib/utils";
import { sidebarConfig, socialLinks } from "@/mocks/sidebar.mocks";
import Link from "next/link";

const HamburgerMenu = ({ isOpen, onToggle, isMenuOpen }) => {
  const baseLineClasses =
    "h-[2px] w-7 bg-white transition-all duration-300 ease-in-out";

  return (
    <div
      className={cn(
        "bg-primary flex min-h-25 w-full items-center justify-center",
        "transition-transform duration-300 ease-in-out",
        isMenuOpen ? "lg:translate-y-25" : "translate-y-0",
      )}
    >
      <button
        className="inline-flex cursor-pointer flex-col justify-center gap-1.5 p-2"
        onClick={onToggle}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <span
          className={`${baseLineClasses} ${
            isOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`${baseLineClasses} ${
            isOpen ? "-translate-y-[1px] -rotate-45" : "translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`h-[2px] w-4 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-3 opacity-0" : "translate-x-0 opacity-100"
          }`}
        />
      </button>
    </div>
  );
};

const SocialLinksSection = ({ isMenuOpen }) => {
  const decorativeLine = "mx-auto w-[1px] bg-[#4c4c4c]";

  return (
    <div className="bg-darker big:min-h-[501px] hidden h-full w-full flex-col items-center justify-between py-[30px] lg:flex">
      <div
        className={`${decorativeLine} transition-all duration-300 ease-in-out ${isMenuOpen ? "mt-24 h-32" : "h-56"}`}
      />

      <nav aria-label="Social Links">
        <ul className="flex flex-col items-center justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }, index) => (
            <li key={`social-${index}`}>
              <Link
                href={href}
                aria-label={label}
                className="group hover:bg-primary hover:border-primary focus:ring-primary focus:ring-offset-night inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#4c4c4c] bg-transparent text-white/40 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <Icon className="size-4 transition-all group-hover:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`${decorativeLine} h-10`} />
    </div>
  );
};

const CopyrightSection = () => {
  return (
    <div className="big:min-h-[350px] relative hidden h-[350px] w-full lg:block">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-180">
        <p
          className="text-17 text-text-light cursor-text whitespace-nowrap select-text"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          title={sidebarConfig.copyright}
        >
          {sidebarConfig.copyright}
        </p>
      </div>
    </div>
  );
};

// Main Sidebar component
const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <aside
      className="bg-night h-full w-full text-white"
      role="complementary"
      aria-label="Sidebar Navigation"
    >
      <div className="flex h-full flex-col items-center justify-between">
        <HamburgerMenu
          isOpen={isMenuOpen}
          onToggle={handleMenuToggle}
          isMenuOpen={isMenuOpen}
        />

        <SocialLinksSection isMenuOpen={isMenuOpen} />

        <CopyrightSection />
      </div>
    </aside>
  );
};

export default Sidebar;
