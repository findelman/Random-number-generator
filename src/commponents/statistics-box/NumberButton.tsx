import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";
import { useGenerateRandomNumbers } from "../../hooks/useGenerateRandomNumbers";

const Number = styled.button<{ isActive?: boolean }>`
  :disabled {
    opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  }
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

export const NumberButton = ({ item, index }) => {
  const { gameNumber, setGameNumber, gameInfo, setgameInfo } =
    useContext(GameContext);

  const generateNumber = useGenerateRandomNumbers();

  const numberArrayPush = () => {
    if (gameInfo.generate === false) {
      setGameNumber([item]);
      setgameInfo({ ...gameInfo, ["generate"]: true });
    } else if (!gameNumber.includes(item)) {
      setGameNumber((e) => [...e, item]);
    } else {
      gameNumber.splice(gameNumber.indexOf(item), 1);
      setGameNumber([...gameNumber]);
      if (gameNumber.length === 0) {
        generateNumber();
      }
    }
  };

  return (
    <Number
      disabled={
        gameNumber.length === gameInfo.limitNumber &&
        !gameNumber.includes(item) &&
        gameInfo.generate
      }
      isActive={gameNumber.includes(item) && gameInfo.generate}
      onClick={numberArrayPush}
      key={index}
    >
      {item}
    </Number>
  );
};
