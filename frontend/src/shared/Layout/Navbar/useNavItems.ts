import { INavItem } from "./INavItem";

export const useNavItems = () => {
  return NAV_ITEMS;
};

export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Notification History",
    children: [
      {
        label: "View Logs",
        subLabel: "Check sent notifications and statuses",
        href: "/logs",
      },
    ],
  },
];
