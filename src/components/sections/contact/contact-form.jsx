import { ClockIcon, MapIcon, PhoneIcon2 } from "@/components/shared/svgs";

const infoCards = [
  {
    icon: <PhoneIcon2 className="h-8 w-8 text-white" strokeWidth={1.5} />,
    title: "Reception Desk",
    description: "(+01) 123 456 7899",
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-white" strokeWidth={1.5} />,
    title: "Working Hours",
    description: "Monday - Friday / 08:00-17:00",
  },
  {
    icon: <MapIcon className="h-8 w-8 text-white" strokeWidth={1.5} />,
    title: "Address",
    description: "Example street nr 23",
  },
];

function InfoCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`border-darker flex items-center gap-6 border px-14 py-9 lg:px-10 xl:px-14 ${className}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white">{title}</h3>
        <p className="text-sm font-light text-white/80">{description}</p>
      </div>
    </div>
  );
}

const ContactFormSection = () => {
  return (
    <section className="bg-midnight py-8 lg:py-25 2xl:py-[140px]">
      <div className="container_fluid">
        <div className="mb-6">
          <p className="mb-1 text-sm">Get in touch</p>
          <h2 className="text-3xl leading-[42px] font-semibold text-white">
            Contact us
          </h2>
        </div>

        {/* address contact information */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
          {infoCards.map((card, index) => {
            // Auto apply special border for middle card in desktop
            let borderClass = "";
            if (infoCards.length > 1 && index === 1) {
              borderClass = "lg:border-x-0 lg:border-y";
            }

            return <InfoCard key={index} {...card} className={borderClass} />;
          })}
        </div>

        {/* contact form */}
      </div>
    </section>
  );
};

export default ContactFormSection;
