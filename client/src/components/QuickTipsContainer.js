import {
  AiOutlineSnippets,
  AiOutlineSolution,
  AiOutlineProfile,
  AiOutlineLike,
} from "react-icons/ai";
import QuickTipsItem from "./QuickTipsItem";
import styled from "styled-components";

const QuickTipsContainer = () => {
  const defaultQuickTips = [
    {
      icon: <AiOutlineProfile />,
      title: "account check-up",
      text: "been awhile? Consider updating your profile.",
      btn: "edit profile",
    },
    {
      icon: <AiOutlineLike />,
      title: "pick your favorites",
      text: `Pick your favorites for the best way to know what’s happening live near you.`,
      btn: "pick favorites",
    },
  ];

  return (
    <Wrapper>
      <h3 className="form-title">quick tips</h3>
      <div className="tips-container">
        {defaultQuickTips.map((item, index) => {
          return <QuickTipsItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
export default QuickTipsContainer;

const Wrapper = styled.div`
  .tips-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  @media screen and (min-width: 850px) {
    .tips-container {
      flex-direction: row;
    }
  }
`;
