import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 25px var(--default-border-color);
  border-radius: var(--default-border-radius);
`;

const BoxWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 23px;
  line-height: 27px;
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
  border-radius: ${({accardion}) => accardion ? "15px 15px 0px 0px" : "var(--default-border-radius)"};
  background: ${(props) =>
    props.primary ? "white" : "var(--default-border-color)"};
  cursor: ${({primary}) => (primary ? "unset" : "pointer")};
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

const AccardionWrapperHidden = styled.div`
  height: 200px;
  position: absolute;
  background: rgb(233 238 246);
  width: 100%;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 5;

  transition: 300ms;
  border-radius: 0px 0px 15px 15px;
  ${({accardion}) =>
    accardion
      ? "opacity: 1; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;

const AccardionTitle = styled.div``;

const AccardionItem = styled.div``;


export function GeneratorBox() {
  const [accardion, setAccardion] = React.useState(false);

  const toggleIsAccardion = () => {
    setAccardion((current) => !current);
    console.log("123");
  };
  return (
    <Box>
      <BoxWrapper>
        <Title>Генератор счастливых чисел</Title>
        <SubTitle>
          Создавайте свои счастливые лотрейные комбинации для тиражных лотерей.
        </SubTitle>
      </BoxWrapper>
      <BoxWrapper>
        <AccardionWrapper onClick={toggleIsAccardion} accardion={accardion}>
          <AccardionImg src="https://static.sz.kz/img/logos/649.svg" />
          <AccardionTitle>лотерея «LOTO 6/49»</AccardionTitle>
          <AccardionWrapperHidden accardion={accardion}>
            <AccardionItem>TEST</AccardionItem>
          </AccardionWrapperHidden>
        </AccardionWrapper>
        <NumberOutput primary></NumberOutput>
      </BoxWrapper>
    </Box>
  );
}
