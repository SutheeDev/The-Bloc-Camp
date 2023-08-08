import { BiBookContent, BiBarChartSquare } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";

const userLinks = [
  {
    id: 0,
    text: "Overview",
    path: "/dashboard/",
    icon: <BiBarChartSquare />,
  },
  {
    id: 1,
    text: "My Tickets",
    path: "/dashboard/my-tickets",
    icon: <RiCoupon2Line />,
  },
  {
    id: 2,
    text: "Profile",
    path: "/dashboard/profile",
    icon: <BiBookContent />,
  },
];

export default userLinks;
