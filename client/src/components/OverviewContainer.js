import OverviewItem from "./OverviewItem";
import {
  BiCalendarStar,
  BiCalendarX,
  BiCalendarExclamation,
} from "react-icons/bi";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";

const OverviewContainer = () => {
  const { overview } = useAppContext();

  const defaultOverview = [
    {
      title: "upcoming shows",
      count: overview.upcoming || 0,
      icon: <BiCalendarStar />,
      color: "var(--reddish)",
      bcg: "var(darkred)",
    },
    {
      title: "canceled",
      count: overview.canceled || 0,
      icon: <BiCalendarX />,
      color: "var(--reddish)",
      bcg: "var(darkred)",
    },
    {
      title: "sold out",
      count: overview.soldout || 0,
      icon: <BiCalendarExclamation />,
      color: "var(--reddish)",
      bcg: "var(darkred)",
    },
  ];

  return (
    <div>
      {defaultOverview.map((item, index) => {
        return <OverviewItem key={index} {...item} />;
      })}
    </div>
  );
};
export default OverviewContainer;
