import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar sidebar-show">
        <h3>Sidebar</h3>
      </div>
    </Wrapper>
  );
};
export default Sidebar;

const Wrapper = styled.div`
  .sidebar {
    display: none;
  }
  @media (min-width: 950px) {
    .sidebar {
      display: block;
      background-color: var(--darkBlue);
      width: 300px;
      min-height: 100vh;
      height: 100%;
      margin-left: -300px;

      transition: all 0.3s ease;
    }
    .sidebar-show {
      margin-left: 0;
    }
  }
`;
