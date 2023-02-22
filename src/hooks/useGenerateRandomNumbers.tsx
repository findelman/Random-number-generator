import { useCallback, useContext, useEffect, useMemo } from "react";
import { GameContext } from "../context/GameProvaider";

export const useGenerateRandomNumbers = () => {
  const { gameNumber, setGameNumber, gameInfo, setgameInfo } =
    useContext(GameContext);
  const { limitNumber, amountNumber, gameTitle, gameImg } = gameInfo;

  const generateRandomNumbers = useCallback(() => {
    const arr: number[] = [];
    for (let i = 0; i < limitNumber; i++) {
      const randomNumber = Math.floor(Math.random() * amountNumber + 1);
      arr.push(randomNumber);
    }
    setgameInfo({ ...gameInfo, ["generate"]: false });
    setGameNumber(arr.sort((a, b) => a - b));
  }, [limitNumber]);
};
