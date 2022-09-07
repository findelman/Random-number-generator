import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 20px;
  border-radius: var(--default-border-radius);
  border: 1px solid var(--default-border-color);
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 19px;
  line-height: 19px;
`;

const NumberCounter = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.7);
  b {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ProgressLineWrapper = styled.div`
    
`
export const StatisticsBox = ({text}) => {
  return (
    <>
      <Box>
        <Title>Статистика лотереи {text}</Title>
        <NumberCounter>
          <b>0/6</b> Собери комбинацию
        </NumberCounter>
        <ProgressLineWrapper>

        </ProgressLineWrapper>
      </Box>
    </>
  );
};
