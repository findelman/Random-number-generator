import { useEffect, useMemo } from "react";

export const useGenerateRandomNumbers = (
  limitNumber,
  amountNumber,
  changeInfo
) => {
  const Result = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < limitNumber; i++) {
      const randomNumber = Math.floor(Math.random() * amountNumber + 1);
      arr.push(randomNumber);
    }

    return arr.sort((a, b) => a - b);
  }, [changeInfo]);

  return <>{Result}</>;
};
