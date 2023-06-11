import { BiBookContent, BiGridSmall, BiBarChartSquare } from "react-icons/bi";

const userLinks = [
  {
    id: 0,
    text: "Overview",
    path: "/admin-dashboard/",
    icon: <BiBarChartSquare />,
  },
  {
    id: 1,
    text: "My Tickets",
    path: "/admin-dashboard/my-tickets",
    icon: <BiGridSmall />,
  },
  {
    id: 2,
    text: "Profile",
    path: "/admin-dashboard/profile",
    icon: <BiBookContent />,
  },
];

export default userLinks;
