import { contactInfo, locations, socialLinks } from "@/mocks/footer.mocks";
import Image from "next/image";
import Link from "next/link";

const FooterContent = ({ title, children, className = "" }) => (
  <div className={`space-y-5 ${className}`}>
    <h3 className="text-base font-[300] tracking-widest text-white/80 uppercase">
      {title}
    </h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const FooterLink = ({ href, children, external = false }) => (
  <Link
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : ""}
    className="text-15 block leading-relaxed text-white underline decoration-1 underline-offset-2 transition-colors duration-200 hover:text-gray-300"
  >
    {children}
  </Link>
);

const FooterSection = () => {
  return (
    <section className="bg-crimson">
      <div className="divide-midnight grid min-h-[360px] grid-cols-1 divide-y md:grid-cols-3 md:divide-x xl:grid-cols-4 2xl:h-[440px]">
        <div className="hidden h-full items-center py-[30px] pl-[90px] xl:flex">
          <div>
            <Image
              src="/footer-logo.png"
              alt="Logo"
              width={84}
              height={87.14}
              className="h-auto w-auto"
            />
          </div>
        </div>
        <div className="flex h-full items-center px-[30px] py-[30px] 2xl:pr-0 2xl:pl-[90px]">
          <FooterContent title="Locations">
            {locations.map((location) => (
              <FooterLink key={location.name} href={location.href}>
                {location.name}
              </FooterLink>
            ))}
          </FooterContent>
        </div>{" "}
        <div className="flex h-full items-center px-[30px] py-[30px] 2xl:pr-0 2xl:pl-[90px]">
          <FooterContent title="Connect">
            {socialLinks.map((social) => (
              <FooterLink key={social.name} href={social.href} external>
                {social.name}
              </FooterLink>
            ))}
          </FooterContent>
        </div>{" "}
        <div className="flex h-full items-center px-[30px] py-[30px] 2xl:pr-0 2xl:pl-[90px]">
          <FooterContent title="Get In Touch">
            {contactInfo.map((contact) => (
              <FooterLink key={contact.type} href={contact.href}>
                {contact.label}
              </FooterLink>
            ))}
          </FooterContent>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
