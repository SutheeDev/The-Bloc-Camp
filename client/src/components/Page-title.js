import styled from "styled-components";

const PageTitle = () => {
  return (
    <Wrapper class="pageTitle">
      <h1 class="pageTitle-text1">upcoming</h1>
      <div class="pageTitle-box">
        <h1 class="pageTitle-text2">shows</h1>
        <div class="block"></div>
        <div class="line2"></div>
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
    width: 272px;
    position: relative;
  }
  .block {
    width: 58px;
    height: 17px;
    background-color: #221333;
    position: absolute;
    top: 20px;
    left: 250px;
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
      left: 190px;
    }
    .line2 {
      right: -17px;
    }
    .pageTitle-text2 {
      line-height: 50px;
    }
  }
  @media screen and (max-width: 450px) {
    .block {
      left: 137px;
    }
  }
`;
