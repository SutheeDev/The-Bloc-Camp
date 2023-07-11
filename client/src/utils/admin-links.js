import {
  BiBookContent,
  BiInfoSquare,
  BiAddToQueue,
  BiCalendarEdit,
  BiBarChartSquare,
} from "react-icons/bi";

const adminLinks = [
  {
    id: 0,
    text: "Overview",
    path: "/admin-dashboard",
    icon: <BiBarChartSquare />,
  },
  {
    id: 1,
    text: "All Shows",
    path: "/admin-dashboard/all-shows",
    icon: <BiAddToQueue />,
  },
  {
    id: 2,
    text: "Create Show",
    path: "/admin-dashboard/create-show",
    icon: <BiInfoSquare />,
  },
  {
    id: 3,
    text: "Edit Show",
    path: "/admin-dashboard/edit-show",
    icon: <BiCalendarEdit />,
  },
  {
    id: 4,
    text: "Profile",
    path: "/admin-dashboard/profile",
    icon: <BiBookContent />,
  },
];

export default adminLinks;
