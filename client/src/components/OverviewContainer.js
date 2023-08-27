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
      color: "var(--blueText)",
      bcg: "var(--lightBlue)",
    },
    {
      title: "canceled",
      count: overview.canceled || 0,
      icon: <BiCalendarX />,
      color: "var(--darkRed)",
      bcg: "var(--lightRed)",
    },
    {
      title: "sold out",
      count: overview.soldout || 0,
      icon: <BiCalendarExclamation />,
      color: "var(--green)",
      bcg: "var(--lightGreen)",
    },
  ];

  return (
    <Wrapper>
      {defaultOverview.map((item, index) => {
        return <OverviewItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default OverviewContainer;

const Wrapper = styled.div`
  margin-bottom: 5em;
  @media screen and (min-width: 450px) {
    margin-bottom: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }
  @media screen and (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
