import { FacebookIcon, TwitterIcon } from "@/components/shared/svgs";
import { Instagram } from "lucide-react";

// current year
const currentYear = new Date().getFullYear();

export const socialLinks = [
  {
    href: "/",
    icon: TwitterIcon,
    label: "Twitter",
  },
  {
    href: "/",
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: "/",
    icon: Instagram,
    label: "Instagram",
  },
];

export const sidebarConfig = {
  copyright: `© ${currentYear} Royarch`,
};
