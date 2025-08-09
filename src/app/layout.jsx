import FooterSection from "@/components/layout/footer";
import HeaderSection from "@/components/layout/header";
import "../styles/globals.css";

export const metadata = {
  title: "Home - Royarch",
  description:
    "The virtual space is dominated by dated and obsolete Architecture Website Template. This is primarily because updating design is mistakenly thought to be financially over-burdening. A Template that is functional and palatable however, can enhance the end-user experience, thereby revamping your brand image and virtual presence. Royarch, is our take on providing our clients with the best and latest in Architecture Website template trends. The template language is aesthetically pleasing and minimal , with immense focus on readability through the use of modern typography. It comes with 28 HTML files , with immense room for future scalability. If you’re looking to invest in a specialized contemporary HTML template to base your web site on, Royarch is the way to go!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderSection />
        </header>

        <main className="lg:ml-25">{children}</main>

        <footer className="lg:ml-25">
          <FooterSection />
        </footer>
      </body>
    </html>
  );
}
