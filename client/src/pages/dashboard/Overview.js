import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { ChartsContainer, OverviewContainer, Loading } from "../../components";

const Overview = () => {
  const { showOverview, isLoading, monthlyApplication } = useAppContext();

  useEffect(() => {
    showOverview();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <OverviewContainer />
      {monthlyApplication > 0 && <ChartsContainer />}
    </Wrapper>
  );
};
export default Overview;

const Wrapper = styled.div`
  color: var(--black);
`;
