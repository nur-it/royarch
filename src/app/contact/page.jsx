import InfoBox from "@/components/layout/info-box";
import ContactFormSection from "@/components/sections/contact/contact-form";
import PageTitle from "@/components/shared/page-title";

export const metadata = {
  title: "Contact - Royarch",
};

const ContactPage = () => {
  return (
    <>
      <InfoBox />
      <PageTitle>
        <h1 className="text-5xl leading-tight font-bold text-white capitalize">
          Contact
        </h1>
        <p className="text-sm leading-6 font-light text-[#CCCCCC]">
          Excelling at the art
        </p>
      </PageTitle>
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
