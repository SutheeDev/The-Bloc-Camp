import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
import styled from "styled-components";

const ChartsContainer = () => {
  const { monthlyApplication: data } = useAppContext();
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;

const Wrapper = styled.div``;
