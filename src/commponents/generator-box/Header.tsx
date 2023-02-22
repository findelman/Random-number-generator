import React from "react";
import styled from "styled-components";

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


export const Header = React.memo(() => {
    return (
      <BoxWrapper>
        <Title>Генератор cлучайных чисел</Title>
        <SubTitle>
          Создавайте свои случайные лотрейные комбинации для тиражных лотерей.
        </SubTitle>
      </BoxWrapper>
    );
  });