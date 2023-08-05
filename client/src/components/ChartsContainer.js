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
      <h4>monthly shows</h4>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="button"
      >
        {barChart ? "area chart" : "bar chart"}
      </button>
    </Wrapper>
  );
};
export default ChartsContainer;

const Wrapper = styled.div``;
