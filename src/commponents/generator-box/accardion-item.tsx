import React from "react";
import styled from "styled-components";
import { AccardionItemIF } from "./types";

export const accardionItemsData = [
  {
    limit: 6,
    amount: 49,
    text: "лотерея «LOTO 6/49»",
    img: "https://static.sz.kz/img/logos/649.svg",
  },
  {
    limit: 5,
    amount: 36,
    text: "лотерея «5/36»",
    img: "https://static.sz.kz/img/logos/536.svg",
  },
  {
    limit: 10,
    amount: 80,
    text: "лотерея «KENO»",
    img: "https://static.sz.kz/img/logos/keno.svg",
  },
  {
    limit: 10,
    amount: 80,
    text: "лотерея «KENO2»",
    img: "https://static.sz.kz/img/logos/keno2.svg",
  },
  {
    limit: 3,
    amount: 9,
    text: "лотерея «777»",
    img: "https://static.sz.kz/img/logos/777.svg",
  },
];

const Box = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(43, 93, 168, 0.1);
  padding: 14px 15px;
  transition: 500ms;
  &:hover {
    background: #eaeff7;
  }
`;
const BoxImg = styled.img`
  width: 37px;
  margin-right: 14px;
`;
export const AccardionItem = React.memo(
  ({ img, text, limit, amount, changeInfo }: AccardionItemIF) => {
    return (
      <Box
        data-number-limit={limit}
        onClick={() => {
          changeInfo({
            gameTitle: text,
            gameImg: img,
            amountNumber: amount,
            limitNumber: limit,
          });
        }}
        data-amount-number={amount}
      >
        <BoxImg src={img} />
        {text}
      </Box>
    );
  }
);
