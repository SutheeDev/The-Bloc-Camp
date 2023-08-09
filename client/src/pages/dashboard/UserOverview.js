import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { OverviewContainer, Loading } from "../../components";

const UserOverview = () => {
  const { showOverview, isLoading, user } = useAppContext();
  const { name, lastname, email } = user;

  useEffect(() => {
    showOverview();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <h3 className="form-title">Overview</h3>
      <div className="overview-container">
        <header>
          <h3>
            {name} {lastname}
          </h3>
        </header>
      </div>
      <OverviewContainer />
    </Wrapper>
  );
};
export default UserOverview;

const Wrapper = styled.div`
  color: var(--black);
`;
