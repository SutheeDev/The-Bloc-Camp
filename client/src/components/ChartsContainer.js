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
        className="chart-toggle-btn"
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
  h4 {
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }
  .chart-toggle-btn {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.5em 1em;
    color: var(--grey-300);
    border: 2px solid var(--grey-300);
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    font-weight: 600;

    transition: all 0.2s ease;
  }
  .chart-toggle-btn:hover {
    color: var(--white);
    background-color: var(--lighterBlue);
    border: 2px solid var(--lighterBlue);
  }
`;
