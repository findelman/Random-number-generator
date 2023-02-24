import { useCallback, useContext } from "react";
import { GameContext } from "../context/GameProvaider";

export const useGenerateRandomNumbers = () => {
  const { setGameNumber, gameInfo, setgameInfo } = useContext(GameContext);
  const { limitNumber, amountNumber } = gameInfo;

  return useCallback(() => {
    const arr: number[] = [];
    while (arr.length < limitNumber) {
      const randomNumber = Math.floor(Math.random() * amountNumber + 1);
      if (!arr.includes(randomNumber)) arr.push(randomNumber);
    }
    setgameInfo({ ...gameInfo, ["generate"]: false });
    setGameNumber(arr.sort((a, b) => a - b));
  }, [limitNumber]);
};
