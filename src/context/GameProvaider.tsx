import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IgameInfo {
  limitNumber: number;
  amountNumber: number;
  gameTitle: string;
  gameImg: string;
  generate: boolean;
}

export const GameContext = createContext<{
  gameInfo: IgameInfo;
  gameNumber: number[];
  setGameNumber: Dispatch<SetStateAction<number[]>>;
  setgameInfo: Dispatch<SetStateAction<IgameInfo>>;
}>({
  gameInfo: {
    generate: false,
    limitNumber: 6,
    amountNumber: 46,
    gameTitle: "лотерея «LOTO 6/49»",
    gameImg: "https://static.sz.kz/img/logos/649.svg",
  },
  gameNumber: [],
  setgameInfo: () => {},
  setGameNumber: () => {},
});

export const GameProvaider = ({ children }: { children: React.ReactNode }) => {
  const [gameInfo, setgameInfo] = useState({
    limitNumber: 6,
    amountNumber: 46,
    gameTitle: "лотерея «LOTO 6/49»",
    generate: true,
    gameImg: "https://static.sz.kz/img/logos/649.svg",
  });

  const [gameNumber, setGameNumber] = useState<any>([]);

  return (
    <GameContext.Provider
      value={{ gameInfo, setgameInfo, gameNumber, setGameNumber }}
    >
      {children}
    </GameContext.Provider>
  );
};
