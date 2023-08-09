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
      {defaultQuickTips.map((item, index) => {
        <QuickTipsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default QuickTipsContainer;

const Wrapper = styled.div``;
