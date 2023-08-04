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
  return (
    <div>
      <h1>overview container</h1>
      <OverviewItem />
    </div>
  );
};
export default OverviewContainer;
