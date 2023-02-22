import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";
import { NumberWrapper } from "./NumberWrapper";
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

const ProgressLineWrapper = styled.div``;

export const StatisticsBox = ({ text, api, numberCount }) => {
  const { gameInfo } = useContext(GameContext);

  return (
    <>
      <Box>
        <Title>Статистика {text}</Title>
        <NumberCounter>
          <b>
            {numberCount}/{gameInfo.limitNumber}
          </b>
          &nbsp;
          Собери комбинацию
        </NumberCounter>
        <ProgressLineWrapper></ProgressLineWrapper>
        <NumberWrapper
          api={api?.less}
          svg={<LessSvg />}
          title={"Предыдущий тираж"}
          text={"Числа, которые выпали в предыдущем тираже лотереи"}
        />
        <NumberWrapper
          api={api?.most}
          svg={<LessSvg />}
          title={"Часто выпадающие"}
          text={"Числа, которые часто выпадают в лотерее"}
        />
        <NumberWrapper
          api={api?.last}
          svg={<LessSvg />}
          title={"Давно не выпадали"}
          text={"Числа, которые давно не выпадали в лотерее"}
        />
      </Box>
    </>
  );
};
