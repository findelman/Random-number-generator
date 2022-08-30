import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(43, 93, 168, 0.15);
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
  border-radius: var(--default-border-radius);
  background: ${(props) =>
    props.primary ? "white" : "rgba(43, 93, 168, 0.1)"};
  cursor: ${(props) =>
    props.primary ? "unset" : "pointer"};
  display: flex;
  align-items: center;
`;

const AccardionImg = styled.img`
  width: 37px;
  margin-right: 14px;
`;
const NumberOutput = styled(AccardionWrapper)`
  border: 1px solid rgba(43, 93, 168, 0.1);
  margin-top: 20px;
`;

const AccardionWrapperHidden = styled.div``;
const AccardionTitle = styled.div``;

export function GeneratorBox() {
  return (
    <Box>
      <BoxWrapper>
        <Title>Генератор счастливых чисел</Title>
        <SubTitle>
          Создавайте свои счастливые лотрейные комбинации для тиражных лотерей.
        </SubTitle>
      </BoxWrapper>
      <BoxWrapper>
        <AccardionWrapper>
          <AccardionImg src="https://static.sz.kz/img/logos/649.svg" />
          <AccardionTitle>лотерея «LOTO 6/49»</AccardionTitle>
          <AccardionWrapperHidden></AccardionWrapperHidden>
        </AccardionWrapper>
        <NumberOutput primary></NumberOutput>
      </BoxWrapper>
    </Box>
  );
}
