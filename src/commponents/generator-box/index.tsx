import React from "react";
import styled from "styled-components";
import { AccardionItemsWrapper } from "./AccardionItemsWrapper";

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 25px var(--default-border-color);
  border-radius: var(--default-border-radius);
`;

const BoxWrapper = styled.div`
  padding: 20px;
  &:first-child {
    border-bottom: 1px solid #eaeff7;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 23px;
  line-height: 27px;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const AccardionWrapper = styled.div`
  padding: 14px 15px;
  position: relative;
  transition: 300ms;
  border-radius: ${({ accardion }) =>
    accardion ? "15px 15px 0px 0px" : "var(--default-border-radius)"};
  background: ${({ primary }) =>
    primary ? "white" : "var(--default-border-color)"};
  cursor: ${({ primary }) => (primary ? "unset" : "pointer")};
  display: flex;
  align-items: center;
`;

const AccardionImg = styled.img`
  width: 37px;
  margin-right: 14px;
`;
const NumberOutput = styled(AccardionWrapper)`
  border: 1px solid var(--default-border-color);
  margin-top: 20px;
`;

const AccardionTitle = styled.div``;

const Header = React.memo(() => {
  return (
    <BoxWrapper>
      <Title>Генератор cлучайных чисел</Title>
      <SubTitle>
        Создавайте свои случайные лотрейные комбинации для тиражных лотерей.
      </SubTitle>
    </BoxWrapper>
  );
});

export const GeneratorBox = ({ text, img, numbers }) => {
  const [accardion, setAccardion] = React.useState(false);

  const toggleIsAccardion = () => {
    setAccardion((current) => !current);
  };
  return (
    <Box>
      <Header />
      <BoxWrapper>
        <AccardionWrapper onClick={toggleIsAccardion} accardion={accardion}>
          <AccardionImg src={img} />
          <AccardionTitle>{text}</AccardionTitle>
          <AccardionItemsWrapper
            accardion={accardion}
          />
        </AccardionWrapper>
        <NumberOutput primary>{numbers}</NumberOutput>
      </BoxWrapper>
    </Box>
  );
};
