export const menuItems = [
  {
    id: "home",
    number: "01",
    label: "HOME",
    href: "/",
  },
  {
    id: "work",
    number: "02",
    label: "WORK",
    href: "/projects",
  },
  {
    id: "about",
    number: "03",
    label: "ABOUT",
    href: "/about",
    children: [
      { id: "about1", label: "OUR STORY", href: "/about/story" },
      { id: "about2", label: "TEAM", href: "/about/team" },
      { id: "about3", label: "CAREERS", href: "/about/careers" },
    ],
  },
  { id: "blog", number: "04", label: "BLOG", href: "/blog" },
  { id: "contact", number: "05", label: "CONTACT", href: "/contact" },
];
