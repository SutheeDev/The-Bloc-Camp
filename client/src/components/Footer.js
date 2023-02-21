import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; 2022 by The Bloc Camp. Created by SutheeDeveloper</p>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background-color: #221333;
  padding: 50px 20px;
  text-align: center;

  p {
    font-family: sans-serif;
    font-size: 10px;
    letter-spacing: 1.3px;
  }
`;
