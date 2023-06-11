import {
  BiBookContent,
  BiInfoSquare,
  BiAddToQueue,
  BiGridSmall,
  BiBarChartSquare,
} from "react-icons/bi";

const adminLinks = [
  {
    text: "Profile",
    path: "/profile",
    icon: <BiBookContent />,
  },
  {
    text: "Create Show",
    path: "/create-show",
    icon: <BiInfoSquare />,
  },
  {
    text: "All Shows",
    path: "/all-shows",
    icon: <BiAddToQueue />,
  },
  {
    text: "My Tickets",
    path: "/my-tickets",
    icon: <BiGridSmall />,
  },
  {
    text: "Overview",
    path: "/",
    icon: <BiBarChartSquare />,
  },
];

export default adminLinks;
