interface changeInfoIF {
  gameTitle: string;
  gameImg: string;
  amountNumber: number;
  limitNumber: number;
}

export interface AccardionItemIF {
  img: string;
  text: string;
  limit: number;
  amount: number;
  changeInfo: ({
    gameTitle,
    gameImg,
    amountNumber,
    limitNumber,
  }: changeInfoIF) => void;
}
