import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { QuickTipsContainer, Loading } from "../../components";
import moment from "moment";

const UserOverview = () => {
  const { showOverview, isLoading, user } = useAppContext();
  const { name, lastname, createdAt } = user;
  const year = moment(createdAt).format("YYYY");

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
          <h2>
            {name} {lastname && `${lastname[0]}.`}
          </h2>
        </header>
        <p>fan since {year}</p>
      </div>
      <QuickTipsContainer />
    </Wrapper>
  );
};
export default UserOverview;

const Wrapper = styled.div`
  color: var(--darkBlue);
  .overview-container {
    padding: 2em;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.014),
      0px 0.4px 0.5px rgba(0, 0, 0, 0.02), 0px 0.8px 1px rgba(0, 0, 0, 0.025),
      0px 1.3px 1.8px rgba(0, 0, 0, 0.03), 0px 2.5px 3.3px rgba(0, 0, 0, 0.036),
      0px 6px 8px rgba(0, 0, 0, 0.05);
    margin-bottom: 2em;
  }
  header {
    margin-bottom: 0.7em;
  }
  h2 {
    text-transform: capitalize;
  }
  p {
    font-family: var(--bodyFont);
  }
  p::first-letter {
    text-transform: capitalize;
  }
`;
