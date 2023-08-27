import {
  BiBookContent,
  BiBarChartSquare,
  BiBookmarkHeart,
  BiCalendarEvent,
} from "react-icons/bi";

const userLinks = [
  {
    id: 0,
    text: "Overview",
    path: "/dashboard",
    icon: <BiBarChartSquare />,
  },
  {
    id: 1,
    text: "Favorites",
    path: "/dashboard/favorites",
    icon: <BiBookmarkHeart />,
  },
  {
    id: 2,
    text: "Upcoming",
    path: "/dashboard/upcoming",
    icon: <BiCalendarEvent />,
  },
  {
    id: 3,
    text: "Profile",
    path: "/dashboard/profile",
    icon: <BiBookContent />,
  },
];

export default userLinks;
