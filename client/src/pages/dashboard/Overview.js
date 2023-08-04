import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";

const Overview = () => {
  const { showOverview } = useAppContext();

  useEffect(() => {
    showOverview();
  }, []);

  return (
    <Wrapper>
      <h2>Overview</h2>
    </Wrapper>
  );
};
export default Overview;

const Wrapper = styled.div`
  color: var(--black);
`;
