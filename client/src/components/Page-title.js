import styled from "styled-components";

const PageTitle = ({ text1, text2 }) => {
  return (
    <Wrapper className="pageTitle">
      <h1 className="pageTitle-text1">{text1}</h1>
      <div className="pageTitle-box">
        <h1 className="pageTitle-text2">{text2}</h1>
        <div className="block"></div>
        <div className="line2"></div>
      </div>
    </Wrapper>
  );
};
export default PageTitle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .pageTitle-text1,
  .pageTitle-text2 {
    font-size: calc(3vw + 1rem);
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #221333;
    padding: 0px 0 0px 20px;
  }
  .pageTitle-text1 {
    background-color: #ffffff;
    line-height: 1.7;
  }
  .pageTitle-text2 {
    width: 100%;
    background-color: #df3311;
    margin-bottom: 0;
    line-height: 57px;
    margin: 0;
  }
  .pageTitle-box {
    width: 27vw;
    position: relative;
  }
  .block {
    background-image: repeating-linear-gradient(
      60deg,
      #ffffff58 0px,
      #ffffff58 1px,
      #221333 1px,
      #221333 1px,
      #221333 1.5px
    );

    width: 58px;
    height: 17px;
    background-color: #221333;
    position: absolute;
    top: 20px;
    right: -36px;
    transform: rotate(90deg);
  }
  .line2 {
    height: 8px;
    background-color: #ffffff;
    width: 110px;
    position: absolute;
    bottom: -8px;
    right: -15px;
  }

  @media screen and (max-width: 850px) {
    .pageTitle-text1,
    .pageTitle-text2 {
      font-size: calc(2vw + 0.5rem);
      padding-left: 10px;
    }
    .pageTitle-box {
      width: 210px;
    }
    .block {
      right: -37px;
    }
    .line2 {
      right: -17px;
    }
    .pageTitle-text2 {
      line-height: 50px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 80vw;
    .pageTitle-text1 {
      width: 30%;
    }
    .pageTitle-box {
      width: 70%;
    }
    .line2 {
      right: 1px;
    }
    .block {
      right: -20px;
    }
  }
`;
