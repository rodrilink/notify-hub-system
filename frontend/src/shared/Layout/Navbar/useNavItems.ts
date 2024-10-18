import { INavItem } from "./INavItem";

export const useNavItems = () => {
  return NAV_ITEMS;
};

export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Repository",
    children: [
      {
        label: "GitHub Repo",
        subLabel: "View the notify-hub-system repository",
        href: "https://github.com/rodrilink/notify-hub-system", // Updated link to the repository
      },
    ],
  },
];
