import { GrTransaction, GrUserSettings } from "react-icons/gr";
import {
  BsEmojiSmileFill,
  BsJournalBookmarkFill,
  BsBarChartFill,
} from "react-icons/bs";

export const ReactIcons = [
  BsBarChartFill,
  BsJournalBookmarkFill,
  GrTransaction,
  GrUserSettings,
  BsEmojiSmileFill,
];

export const listItems = [
  {
    title: "Renting Information",
    bio: "Revenue, reviews, ratings",
    pathTo: "/rental/renting-info",
  },
  {
    title: "Rentings",
    bio: "Past and upcoming reservations",
    pathTo: "/rental/renting-history",
  },
  {
    title: "Transaction history",
    bio: "View all your transactions",
    pathTo: "/transaction-history",
  },
  {
    title: "Settings",
    bio: "SETTINGS",
    pathTo: "/rental",
  },
  {
    title: "Support",
    bio: "",
    pathTo: "/profile/support",
  },
];
