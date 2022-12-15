import {
  BsFillPersonFill,
  BsCreditCardFill,
  BsEmojiSmileFill,
} from "react-icons/bs";
import { GrTransaction, GrCircleInformation, GrCar } from "react-icons/gr";

export const ReactIcons = [
  BsFillPersonFill,
  BsCreditCardFill,
  GrTransaction,
  GrCar,
  BsEmojiSmileFill,
  GrCircleInformation,
];

export const listItems = [
  {
    title: "Personal info",
    bio: "",
    pathTo: "/profile/personal-info",
  },
  {
    title: "Account settings",
    bio: "",
    pathTo: "/profile/settings",
  },
  {
    title: "Transaction history",
    bio: "View all your transactions",
    pathTo: "/transaction-history",
  },
  {
    title: "Car rental",
    bio: "Lend out a car for hire",
    pathTo: "/rental",
  },
  {
    title: "Support",
    bio: "",
    pathTo: "/profile/support",
  },
  {
    title: "Change details",
    bio: "Language, currency and location",
    pathTo: "/profile/change-details",
  },
];
