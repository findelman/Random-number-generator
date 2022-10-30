import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../../gloabl-style/style-variables";
import { LessSvg } from "./svg";

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

const Number = styled.button<{ isActive?: boolean }>`
  max-height: 38px;
  transition: 300ms;
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  padding: 50% 0px;
  font-weight: 400;
  border: unset;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  background: ${({ isActive }) =>
    isActive ? "#2B5DA8" : "rgba(43, 93, 168, 0.05);"};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberItem = ({ randomNumbers, numberArray, item, index }) => {
  const [numberActive, setNumberActive] = useState(false);

  if (numberArray.length >= 6) {
    numberArray = [];
  }
  const numberArrayPush = () => {
    setNumberActive(!numberActive);
    if (!numberArray.includes(item)) {
      randomNumbers([...numberArray, item]);
    } else {
      console.log(numberArray);
      numberArray.splice(numberArray.indexOf(item), 1);
      randomNumbers([...numberArray]);
    }
  };

  return (
    <Number isActive={numberActive} onClick={numberArrayPush} key={index}>
      {item}
    </Number>
  );
};

const NumberWrapperS = styled.div`
  padding: 20px 0px;
  :not(:last-child) {
    border-bottom: 1px solid rgba(43, 93, 168, 0.1);
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin: 5px 0px 10px;
  }
`;

const NumberWrapperGrid = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(38px, 38px));
`;

const NumberWrapperTitle = styled(FlexCenter)`
  svg {
    margin-right: 10px;
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
`;

const NumberWrapper = ({
  svg,
  title,
  text,
  api,
  randomNumbers,
  numberArray,
}) => {
  return (
    <NumberWrapperS>
      <NumberWrapperTitle>
        {svg}
        <h3>{title}</h3>
      </NumberWrapperTitle>
      <p>{text}</p>
      <NumberWrapperGrid>
        {api.map((item, index) => {
          return (
            <NumberItem
              randomNumbers={randomNumbers}
              numberArray={numberArray}
              item={item}
              index={index}
            />
          );
        })}
      </NumberWrapperGrid>
    </NumberWrapperS>
  );
};

const ProgressLineWrapper = styled.div``;
export const StatisticsBox = ({
  text,
  api,
  randomNumbers,
  numberArray,
  numberCount,
  limitNumber,
}) => {
  return (
    <>
      <Box>
        <Title>Статистика {text}</Title>
        <NumberCounter>
          <b>
            {numberCount}/{limitNumber}
          </b>{" "}
          Собери комбинацию
        </NumberCounter>
        <ProgressLineWrapper></ProgressLineWrapper>
        <NumberWrapper
          api={api[0].less}
          randomNumbers={randomNumbers}
          numberArray={numberArray}
          svg={<LessSvg />}
          title={"Предыдущий тираж"}
          text={"Числа, которые выпали в предыдущем тираже лотереи"}
        />
        <NumberWrapper
          api={api[0].most}
          randomNumbers={randomNumbers}
          numberArray={numberArray}
          svg={<LessSvg />}
          title={"Часто выпадающие"}
          text={"Числа, которые часто выпадают в лотерее"}
        />
        <NumberWrapper
          api={api[0].last}
          randomNumbers={randomNumbers}
          numberArray={numberArray}
          svg={<LessSvg />}
          title={"Давно не выпадали"}
          text={"Числа, которые давно не выпадали в лотерее"}
        />
      </Box>
    </>
  );
};
