export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Title of your site",
  description: "Description of your site.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/aboutMe",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "About Me",
    //   href: "/aboutMe",
    // },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
};
