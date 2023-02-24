import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";
import { NumberWrapper } from "./NumberWrapper";
import { LastSvg, LessSvg, MostSvg } from "./svg";

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
  width: 100%;
  height: 2px;
  overflow: hidden;
  background: gray;
  margin: 10px 0px 5px;
  background: rgba(43, 93, 168, 0.1);
  border-radius: 5px;
`;

const ProgressLine = styled.div`
  background: #2b5da8;
  height: 100%;
  transition: 300ms ;
  width: ${({ width }) => `${width}%`};
`;

export const StatisticsBox = ({ text, api, numberCount }) => {
  const { gameInfo, gameNumber } = useContext(GameContext);

  return (
    <>
      <Box>
        <Title>Статистика {text}</Title>
        <NumberCounter>
          <b>
            {numberCount}/{gameInfo.limitNumber}
          </b>
          &nbsp; Собери комбинацию
        </NumberCounter>
        <ProgressLineWrapper>
          <ProgressLine
            width={(gameNumber.length * 100) / gameInfo.limitNumber }
          ></ProgressLine>
        </ProgressLineWrapper>
        <NumberWrapper
          api={api?.less}
          svg={<LessSvg />}
          title={"Предыдущий тираж"}
          text={"Числа, которые выпали в предыдущем тираже лотереи"}
        />
        <NumberWrapper
          api={api?.most}
          svg={<MostSvg />}
          title={"Часто выпадающие"}
          text={"Числа, которые часто выпадают в лотерее"}
        />
        <NumberWrapper
          api={api?.last}
          svg={<LastSvg />}
          title={"Давно не выпадали"}
          text={"Числа, которые давно не выпадали в лотерее"}
        />
      </Box>
    </>
  );
};
