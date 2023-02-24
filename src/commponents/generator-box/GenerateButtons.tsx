import { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";

const GenerateButton = styled.button`
  padding: 12px 0px;
  border-radius: 30px;
  text-align: center;
  color: white;
  color: ${({ primary }) => (primary ? "#000" : "white")};
  background: ${({ primary }) => (primary ? "#FFCC01" : "#2b5da8")};
  width: ${({ primary }) => (primary ? "40%" : "60%")};
  border: unset;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 300ms;
  &:active {
    transform: scale(0.95);
  }

  ${({ disabled }) => disabled && "opacity: 0.5; pointer-events: none;"}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 10px;
`;

export const GenerateButtons = ({ handleClick }) => {
  const {
    gameInfo: { gameId, limitNumber },
    gameNumber,
  } = useContext(GameContext);

  const redirectGame = `https://sz.kz/gamedemo?gameid=${gameId}&numbers=${JSON.stringify(
    gameNumber
  )}`;

  return (
    <ButtonsWrapper>
      <GenerateButton onClick={handleClick}>Сгенерировать</GenerateButton>
      <GenerateButton
        disabled={gameNumber.length !== limitNumber}
        href={redirectGame}
        as="a"
        target="_blank"
        primary
      >
        Купить билет
      </GenerateButton>
    </ButtonsWrapper>
  );
};
