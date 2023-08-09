import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { ChartsContainer, OverviewContainer, Loading } from "../../components";

const UserOverview = () => {
  const { showOverview, isLoading, monthlyApplication } = useAppContext();

  useEffect(() => {
    showOverview();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <h3 className="form-title">User Overview</h3>
      <OverviewContainer />
      {monthlyApplication.length > 0 && <ChartsContainer />}
    </Wrapper>
  );
};
export default UserOverview;

const Wrapper = styled.div`
  color: var(--black);
`;
