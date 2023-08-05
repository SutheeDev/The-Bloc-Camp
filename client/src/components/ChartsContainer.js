import BarChartCompoent from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
import styled from "styled-components";

const ChartsContainer = () => {
  const { monthlyApplication: data } = useAppContext();
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>monthly shows</h4>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="button"
      >
        {barChart ? "area chart" : "bar chart"}
      </button>
      {barChart ? <BarChartCompoent data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;

const Wrapper = styled.div`
  text-align: center;
`;
